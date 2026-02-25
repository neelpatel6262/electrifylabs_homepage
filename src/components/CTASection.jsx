import { useState, useEffect, useRef, useCallback } from 'react';

// ── Constants ──────────────────────────────────────────────
const EMAIL_REGEX         = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const SUCCESS_RESET_DELAY = 5000;
const SUBMIT_COOLDOWN_MS  = 3000;

// Default placeholder shown inside the input at all times
const PLACEHOLDER_DEFAULT = 'Enter your email address';
// Message shown inside the input when user submits with empty/invalid email
const PLACEHOLDER_ERROR   = 'Please enter a valid email id';

// ── Helpers ────────────────────────────────────────────────
const isValidEmail = (value) =>
  value.trim().length > 0 && EMAIL_REGEX.test(value.trim());

// Simulated API — replace with real fetch() call
const submitEmailToAPI = async (email) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (Math.random() < 0.2) throw new Error('Server error. Please try again.');
  return { ok: true };
};

// ── Form State Machine ─────────────────────────────────────
const FORM_STATE = {
  IDLE:       'idle',
  SUBMITTING: 'submitting',
  SUCCESS:    'success',
  ERROR:      'error',
};

function CTASection() {
  // ── State ────────────────────────────────────────────────
  const [email, setEmail]           = useState('');
  const [formState, setFormState]   = useState(FORM_STATE.IDLE);
  const [apiErrorMsg, setApiErrorMsg] = useState('');
  const [isFocused, setIsFocused]   = useState(false);

  // Controls what the floating label / placeholder shows
  // When true → show error hint inside the input label instead of default text
  const [showPlaceholderError, setShowPlaceholderError] = useState(false);

  const [showCookiePopup, setShowCookiePopup]   = useState(false);
  const [cookieAccepted, setCookieAccepted]     = useState(false);

  // ── Refs ─────────────────────────────────────────────────
  const successTimerRef  = useRef(null);
  const cooldownTimerRef = useRef(null);
  const isOnCooldown     = useRef(false);
  const inputRef         = useRef(null);

  // ── Derived ──────────────────────────────────────────────
  const isSubmitting     = formState === FORM_STATE.SUBMITTING;
  const isSuccess        = formState === FORM_STATE.SUCCESS;
  const hasApiError      = formState === FORM_STATE.ERROR;
  const isButtonDisabled = isSubmitting || isSuccess || isOnCooldown.current;

  // The text shown in the floating label:
  // — error state (no value, no focus) → show error hint
  // — otherwise                        → show default
  const placeholderText = showPlaceholderError && !email && !isFocused
    ? PLACEHOLDER_ERROR
    : PLACEHOLDER_DEFAULT;

  // ── Effects ──────────────────────────────────────────────

  // Clear the placeholder error as soon as the user starts typing
  useEffect(() => {
    if (email && showPlaceholderError) {
      setShowPlaceholderError(false);
    }
  }, [email, showPlaceholderError]);

  // Auto-reset after success
  useEffect(() => {
    if (isSuccess) {
      successTimerRef.current = setTimeout(() => {
        setFormState(FORM_STATE.IDLE);
        setEmail('');
        setShowPlaceholderError(false);
      }, SUCCESS_RESET_DELAY);
    }
    return () => clearTimeout(successTimerRef.current);
  }, [isSuccess]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(successTimerRef.current);
      clearTimeout(cooldownTimerRef.current);
    };
  }, []);

  // ── Handlers ─────────────────────────────────────────────

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setEmail(value);
    // Clear API-level error so user can retry cleanly
    if (hasApiError) {
      setFormState(FORM_STATE.IDLE);
      setApiErrorMsg('');
    }
  }, [hasApiError]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    // When user clicks into the field, stop showing the error placeholder
    setShowPlaceholderError(false);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    // If user typed something invalid and left, show error hint in placeholder
    if (email && !isValidEmail(email)) {
      setShowPlaceholderError(true);
    }
  }, [email]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (isSubmitting || isOnCooldown.current) return;

    // Invalid or empty → show error INSIDE the input placeholder, no popup
    if (!isValidEmail(email)) {
      setShowPlaceholderError(true);
      // Clear whatever was typed so the placeholder is fully visible
      setEmail('');
      inputRef.current?.focus();
      return;
    }

    setShowPlaceholderError(false);
    setFormState(FORM_STATE.SUBMITTING);
    setApiErrorMsg('');

    try {
      await submitEmailToAPI(email.trim());
      setFormState(FORM_STATE.SUCCESS);

      isOnCooldown.current = true;
      cooldownTimerRef.current = setTimeout(() => {
        isOnCooldown.current = false;
      }, SUBMIT_COOLDOWN_MS);

    } catch (err) {
      setFormState(FORM_STATE.ERROR);
      setApiErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }, [email, isSubmitting]);

  const handleCookieAccept = useCallback(() => {
    setCookieAccepted(true);
    setShowCookiePopup(false);
    try {
      localStorage.setItem('cookie_accepted', 'true');
    } catch {
      // localStorage unavailable — fail silently
    }
  }, []);

  const handleCookieClose = useCallback(() => setShowCookiePopup(false), []);

  // ── Button label ─────────────────────────────────────────
  const buttonLabel = () => {
    if (isSubmitting) return 'Submitting...';
    if (isSuccess)    return '✓ Success!';
    if (hasApiError)  return 'Retry';
    return 'Request Access';
  };

  // ── Render ───────────────────────────────────────────────
  return (
    <section className="cta-section" id="cta" aria-labelledby="cta-heading">
      <div className="cta-container">

        {/* Heading */}
        <header className="cta-intro-section">
          <p aria-hidden="true">Get in Touch</p>
          <h1 id="cta-heading">
            We'd love to hear from you! Reach out with any questions or inquiries.
          </h1>
        </header>

        {/* Form */}
        <div className="cta-btn">
          <form
            className={`cta-email-form ${isFocused ? 'focused' : ''}`}
            onSubmit={handleSubmit}
            noValidate
            aria-label="Email subscription form"
          >
            {/* Input */}
            <div
              className={[
                'input-container',
                // Red underline when placeholder is showing the error hint
                showPlaceholderError ? 'error' : '',
                isSuccess            ? 'success' : '',
                isFocused            ? 'focused' : '',
              ].filter(Boolean).join(' ')}
            >
              <input
                ref={inputRef}
                type="email"
                id="emailInput"
                className="email-input"
                required
                autoComplete="email"
                value={email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isSubmitting || isSuccess}
                aria-describedby="email-help"
                aria-invalid={showPlaceholderError}
                aria-label="Email address"
              />

              {/*
                Floating label — doubles as the validation hint.
                When showPlaceholderError is true AND the input is empty and unfocused,
                placeholderText becomes "Please enter a valid email id" (no popup).
              */}
              <label
                className={[
                  'input-placeholder',
                  // Float up if there's a value OR focused OR showing error hint
                  (email || isFocused || showPlaceholderError) ? 'active' : '',
                  // Turn the label red when showing the error message
                  showPlaceholderError ? 'placeholder-error' : '',
                ].filter(Boolean).join(' ')}
                htmlFor="emailInput"
                style={showPlaceholderError && !email && !isFocused
                  ? { color: 'var(--error-color)', top: '50%', transform: 'translateY(-50%)', fontSize: 'var(--font-size-md)' }
                  : {}
                }
              >
                {placeholderText}
              </label>

              <span id="email-help" className="sr-only">
                Enter your email address to request access
              </span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className={`email-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isButtonDisabled}
              aria-busy={isSubmitting}
            >
              <span className="btn-text">{buttonLabel()}</span>
              {isSubmitting && <div className="btn-spinner" aria-hidden="true" />}
            </button>

            {/* Screen-reader live region */}
            <span className="sr-only" aria-live="polite" aria-atomic="true">
              {isSubmitting       && 'Submitting your email…'}
              {isSuccess          && 'Successfully submitted! Thank you.'}
              {showPlaceholderError && 'Please enter a valid email id'}
              {apiErrorMsg        && `Error: ${apiErrorMsg}`}
            </span>
          </form>

          {/* API-level error (network / server) — shown below the form */}
          {hasApiError && apiErrorMsg && (
            <p role="alert" className="notification error">
              {apiErrorMsg}
            </p>
          )}

          {/* Success message */}
          {isSuccess && (
            <p role="status" className="notification success">
              Thank you! We'll be in touch soon.
            </p>
          )}

          {/* Cookie consent */}
          <h4>
            {cookieAccepted
              ? 'Cookies accepted. Thank you!'
              : (
                <>
                  accepts the cookies.{' '}
                  <span
                    role="button"
                    tabIndex={0}
                    className="cookie-okay"
                    onClick={() => setShowCookiePopup(true)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setShowCookiePopup(true);
                      }
                    }}
                    aria-haspopup="dialog"
                    aria-label="Accept cookies"
                  >
                    OKAY
                  </span>
                </>
              )
            }
          </h4>
        </div>
      </div>

      {/* Cookie dialog */}
      {showCookiePopup && (
        <>
          <div
            className="popup-overlay"
            onClick={handleCookieClose}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-dialog-title"
            className="cookie-popup"
          >
            <p id="cookie-dialog-title">
              Cookies accepted! Your preferences have been saved.
            </p>
            <button
              className="popup-close-btn"
              onClick={handleCookieAccept}
              autoFocus
            >
              Accept & Close
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default CTASection;
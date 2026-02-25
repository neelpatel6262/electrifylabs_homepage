import { useState, useEffect, useRef, useCallback } from 'react';

// ── Constants ──────────────────────────────────────────────
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const SUCCESS_RESET_DELAY = 5000;
const SUBMIT_COOLDOWN_MS  = 3000; // prevent rapid re-submissions

// ── Helpers ────────────────────────────────────────────────
const isValidEmail = (value) =>
  value.trim().length > 0 && EMAIL_REGEX.test(value.trim());

// Simulated API — replace with real fetch() call
const submitEmailToAPI = async (email) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Simulate occasional failure for demo purposes
  if (Math.random() < 0.2) throw new Error('Server error. Please try again.');
  return { ok: true };
};

// ── Form State Machine ─────────────────────────────────────
// idle → submitting → success | error → idle
const FORM_STATE = {
  IDLE:       'idle',
  SUBMITTING: 'submitting',
  SUCCESS:    'success',
  ERROR:      'error',
};

function CTASection() {
  // ── State ────────────────────────────────────────────────
  const [email, setEmail]             = useState('');
  const [formState, setFormState]     = useState(FORM_STATE.IDLE);
  const [errorMsg, setErrorMsg]       = useState('');
  const [isFocused, setIsFocused]     = useState(false);
  const [touched, setTouched]         = useState(false); // track if user has interacted
  const [showCookiePopup, setShowCookiePopup] = useState(false);
  const [cookieAccepted, setCookieAccepted]   = useState(false);

  // ── Refs ─────────────────────────────────────────────────
  const successTimerRef   = useRef(null);
  const cooldownTimerRef  = useRef(null);
  const isOnCooldown      = useRef(false);
  const inputRef          = useRef(null);

  // ── Derived state ────────────────────────────────────────
  const isSubmitting = formState === FORM_STATE.SUBMITTING;
  const isSuccess    = formState === FORM_STATE.SUCCESS;
  const hasError     = formState === FORM_STATE.ERROR;

  // Inline validation — only show error after field is touched
  const inlineError = touched && !isValidEmail(email)
    ? 'Please enter a valid email address.'
    : '';

  // Button disabled when: submitting, on cooldown, or already succeeded
  const isButtonDisabled = isSubmitting || isSuccess || isOnCooldown.current;

  // ── Effects ──────────────────────────────────────────────

  // Auto-reset success state after delay
  useEffect(() => {
    if (isSuccess) {
      successTimerRef.current = setTimeout(() => {
        setFormState(FORM_STATE.IDLE);
        setEmail('');
        setTouched(false);
      }, SUCCESS_RESET_DELAY);
    }
    return () => clearTimeout(successTimerRef.current);
  }, [isSuccess]);

  // Cleanup all timers on unmount
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
    // Clear API-level error when user starts editing
    if (hasError) {
      setFormState(FORM_STATE.IDLE);
      setErrorMsg('');
    }
  }, [hasError]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    // Mark field as touched on first blur so inline validation activates
    if (!touched) setTouched(true);
  }, [touched]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Guard: block if already in flight or on cooldown
    if (isSubmitting || isOnCooldown.current) return;

    // Mark as touched to surface any inline errors
    setTouched(true);

    // Client-side validation before hitting API
    if (!isValidEmail(email)) {
      setFormState(FORM_STATE.ERROR);
      setErrorMsg('Please enter a valid email address.');
      inputRef.current?.focus();
      return;
    }

    setFormState(FORM_STATE.SUBMITTING);
    setErrorMsg('');

    try {
      await submitEmailToAPI(email.trim());
      setFormState(FORM_STATE.SUCCESS);

      // Start cooldown to prevent immediate re-submission after success resets
      isOnCooldown.current = true;
      cooldownTimerRef.current = setTimeout(() => {
        isOnCooldown.current = false;
      }, SUBMIT_COOLDOWN_MS);

    } catch (err) {
      setFormState(FORM_STATE.ERROR);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }, [email, isSubmitting]);

  const handleCookieAccept = useCallback(() => {
    setCookieAccepted(true);
    setShowCookiePopup(false);
    // Persist acceptance — replace with your actual cookie/storage logic
    try {
      localStorage.setItem('cookie_accepted', 'true');
    } catch {
      // localStorage unavailable (private browsing, etc.) — fail silently
    }
  }, []);

  const handleCookieClose = useCallback(() => {
    setShowCookiePopup(false);
  }, []);

  // ── Button label ─────────────────────────────────────────
  const buttonLabel = () => {
    if (isSubmitting) return 'Submitting...';
    if (isSuccess)    return '✓ Success!';
    if (hasError && errorMsg && !inlineError) return 'Retry';
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
                inlineError || hasError ? 'error' : '',
                isSuccess              ? 'success' : '',
                isFocused              ? 'focused' : '',
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
                aria-describedby="email-error email-help"
                aria-invalid={!!(inlineError || hasError)}
                aria-label="Email address"
              />
              <label
                className={`input-placeholder ${email || isFocused ? 'active' : ''}`}
                htmlFor="emailInput"
              >
                Enter your email address
              </label>

              {/* Accessible helper */}
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
              aria-live="polite"
            >
              <span className="btn-text">{buttonLabel()}</span>
              {isSubmitting && <div className="btn-spinner" aria-hidden="true" />}
            </button>

            {/* Screen-reader live region */}
            <span className="sr-only" aria-live="polite" aria-atomic="true">
              {isSubmitting && 'Submitting your email…'}
              {isSuccess    && 'Successfully submitted! Thank you.'}
              {(inlineError || errorMsg) && `Error: ${inlineError || errorMsg}`}
            </span>
          </form>

          {/* Inline validation error */}
          {(inlineError || (hasError && errorMsg)) && (
            <p
              id="email-error"
              role="alert"
              className="notification error"
            >
              {inlineError || errorMsg}
            </p>
          )}

          {/* Success message */}
          {isSuccess && (
            <p role="status" className="notification success">
              Thank you! We'll be in touch soon.
            </p>
          )}

          {/* Cookie consent text */}
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

      {/* Cookie popup */}
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
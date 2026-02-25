import { useState, useEffect } from 'react';

function CTASection() {
  // State management for form and UI
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isDuplicateSubmission, setIsDuplicateSubmission] = useState(false);

  // Reset success state after delay
  useEffect(() => {
    let timer;
    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isSuccess]);

  // Email validation helper
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return email.trim().length > 0 && emailRegex.test(email);
  };

  // Handle input blur for validation
  const handleBlur = () => {
    setIsFocused(false);
    if (email && !isValidEmail(email)) {
      setError('Please enter a valid email address');
    }
  };

  // Handle input focus
  const handleFocus = () => {
    setIsFocused(true);
    setError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent duplicate submissions
    if (isLoading || isDuplicateSubmission) {
      return;
    }
    
    // Validate email
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsLoading(true);
    setIsDuplicateSubmission(true);
    
    try {
      // Simulate API call with async/await
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/failure (random for demo)
      const isSuccess = Math.random() > 0.3; // 70% success rate
      
      if (isSuccess) {
        setIsSuccess(true);
        setIsSubmitted(true);
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
      setIsDuplicateSubmission(false);
    }
  };

  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="cta-container">

        {/* Semantic heading structure */}
        <header className="cta-intro-section">
          <p id="cta-title" className="sr-only">Contact Us</p>
          <p aria-hidden="true">Get in Touch</p>
          <h1>We'd love to hear from you! Reach out with any questions or inquiries.</h1>
        </header>

        {/* Form section */}
        <div className="cta-btn">
          <form className="cta-email-form" onSubmit={handleSubmit} noValidate>
            <div className={`input-container ${error ? 'error' : ''} ${isFocused ? 'focused' : ''}`}>
              <input
                type="email"
                className="email-input"
                id="emailInput"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error && isValidEmail(e.target.value)) {
                    setError('');
                  }
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                aria-describedby="email-error email-help"
                aria-invalid={!!error}
              />
              <label 
                className={`input-placeholder ${email ? 'active' : ''}`}
                htmlFor="emailInput"
              >
                Enter your email address
              </label>
              
              {/* Hidden helper text for accessibility */}
              <span id="email-help" className="sr-only">
                Enter your email address to request access
              </span>
            </div>

            <button 
              type="submit" 
              className="email-btn" 
              disabled={isLoading || isSubmitted}
              aria-busy={isLoading}
              aria-describedby="submit-status"
            >
              {isLoading ? (
                <>
                  <span className="btn-text" aria-hidden="true">Submitting...</span>
                  <div className="btn-spinner"></div>
                </>
              ) : isSubmitted && isSuccess ? (
                <span className="btn-text">✓ Success!</span>
              ) : isSubmitted && !isSuccess ? (
                <span className="btn-text">Retry</span>
              ) : (
                <span className="btn-text">Request Access</span>
              )}
            </button>
            
            {/* Status indicator for screen readers */}
            <span id="submit-status" className="sr-only" aria-live="polite">
              {isLoading && 'Submitting...'}
              {isSuccess && 'Successfully submitted!'}
              {error && `Error: ${error}`}
            </span>
          </form>
          
          {/* Success/Error messages */}
          {(isSuccess || error) && (
            <div 
              role="alert" 
              aria-live="polite"
              className={`notification ${isSuccess ? 'success' : 'error'}`}
              style={{ marginTop: '10px', padding: '8px', borderRadius: '4px', fontSize: '14px' }}
            >
              {isSuccess ? 'Thank you! We\'ll be in touch soon.' : error}
            </div>
          )}
          
          <h4>accepts the cookies. <span>OKAY</span></h4>
        </div>

      </div>
    </section>
  );
}

export default CTASection;
import { useState } from 'react';

function CTASection() {
  // useState to track what user types in the email input
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // This runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();       // stops page from refreshing (default form behavior)
    setIsLoading(true);       // show spinner

    // Simulate a 2 second API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setEmail('');            // clear input after submit
    }, 2000);
  };

  return (
    <div className="cta-section">
      <div className="cta-container">

        {/* Intro */}
        <div className="cta-intro-section">
          <p>Get in Touch</p>
          <h1>We'd love to hear from you! Reach out with any questions or inquiries.</h1>
        </div>

        {/* Form */}
        <div className="cta-btn">
          <form className="cta-email-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="email"
                className="email-input"
                id="emailInput"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="input-placeholder" htmlFor="emailInput">
                Enter your email address
              </label>
            </div>

            <button type="submit" className="email-btn" disabled={isLoading}>
              {/* Show spinner or text based on loading state */}
              {isLoading ? (
                <div className="btn-spinner" />
              ) : submitted ? (
                <span className="btn-text">✓ Done!</span>
              ) : (
                <span className="btn-text">Request Access</span>
              )}
            </button>
          </form>

          <h4>accepts the cookies. <span>OKAY</span></h4>
        </div>

      </div>
    </div>
  );
}

export default CTASection;
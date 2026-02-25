import Logo from '../assets/LOGO.svg';

// Navigation links data
const navLinks = [
  { id: 1, label: 'about', href: '#' },
  { id: 2, label: 'service', href: '#' },
  { id: 3, label: 'product', href: '#', isNew: true },
  { id: 4, label: 'library', href: '#' },
  { id: 5, label: 'blogs', href: '#' },
];

// Social links data
const socialLinks = [
  { id: 1, label: 'Instagram', href: 'https://www.instagram.com/' },
  { id: 2, label: 'Twitter', href: 'https://twitter.com/' },
  { id: 3, label: 'Facebook', href: 'https://www.facebook.com/' },
];

// Legal links data
const legalLinks = [
  { id: 1, label: 'Terms & Conditions', href: '#' },
  { id: 2, label: 'Privacy Policy', href: '#' },
  { id: 3, label: 'ESG Policy', href: '#' },
];

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section-content">

            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={Logo} alt="logo" />
                electrifylabs
              </div>
              <div className="footer-contact">+1 (555) 123-4567</div>
              <div className="footer-email">contact@electrifylabs.com</div>
            </div>

            {/* Links */}
            <div className="footer-links">

              {/* Navigation */}
              <div className="navigation-content">
                <h4>Navigation</h4>
                {navLinks.map((link) => (
                  <div key={link.id} className="footer-link-wrapper">
                    <a href={link.href} className="footer-link">{link.label}</a>
                    {/* Only show "new" badge on product link */}
                    {link.isNew && <div className="new-tag">new</div>}
                  </div>
                ))}
              </div>

              {/* Follow Us */}
              <div className="follow-content">
                <h4>Follow Us</h4>
                {socialLinks.map((link) => (
                  <div key={link.id} className="footer-link-wrapper">
                    <a href={link.href} target="_blank" rel="noreferrer" className="footer-link">
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>

              {/* Legal */}
              <div className="legal-content">
                <h4>legal</h4>
                {legalLinks.map((link) => (
                  <div key={link.id} className="footer-link-wrapper">
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <hr className="footer-line" />
          <p>© 2025 ElectrifyLabs. All rights reserved.</p>

        </div>
      </div>
    </div>
  );
}

export default Footer;
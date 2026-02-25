import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from '../assets/LOGO.svg';

const navLinks = [
  { id: 1, label: 'about', href: '#about' },
  { id: 2, label: 'service', href: '#services' },
  { id: 3, label: 'product', href: '#products' },
  { id: 4, label: 'library', href: '#library' },
  { id: 5, label: 'blogs', href: '#blog' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar-section${scrolled ? ' navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <a href="#hero" className="logo-link" onClick={(e) => smoothScroll(e, '#hero')}>
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} onClick={(e) => smoothScroll(e, link.href)}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <button
            className="navbar-btn"
            onClick={(e) => smoothScroll(e, '#cta')}
          >
            <div className="navbar-btn-conatiner">
              contact us
              <ArrowUpRight size={20} />
            </div>
          </button>

          {/* Hamburger Button (mobile/tablet only) */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile/Tablet Slide-in Menu */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu-header">
          <img src={Logo} alt="logo" className="mobile-menu-logo" />
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => smoothScroll(e, link.href)}
            >
              {link.label}
              <ArrowUpRight size={18} className="mobile-nav-arrow" />
            </a>
          ))}
        </nav>

        <button
          className="mobile-contact-btn"
          onClick={(e) => smoothScroll(e, '#cta')}
        >
          contact us
          <ArrowUpRight size={20} />
        </button>
      </div>
    </>
  );
}

export default Navbar;
import { ArrowUpRight } from 'lucide-react';
import Logo from '../assets/LOGO.svg';

const navLinks = [
  { id: 1, label: 'about', href: '#about' },
  { id: 2, label: 'service', href: '#services' },
  { id: 3, label: 'product', href: '#products' },
  { id: 4, label: 'library', href: '#library' },
  { id: 5, label: 'blogs', href: '#blog' },
];

function Navbar() {
  return (
    <div className="navbar-section">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#hero" className="logo-link">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </a>

        {/* Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.querySelector(link.href);
                if (targetElement) {
                  targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Button */}
        <button
          className="navbar-btn"
          onClick={(e) => {
            e.preventDefault();
            const targetElement = document.querySelector('#cta');
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
        >
          <div className="navbar-btn-conatiner">
            contact us
            <ArrowUpRight size={20} />
          </div>
        </button>

      </div>
    </div>
  );
}

export default Navbar;
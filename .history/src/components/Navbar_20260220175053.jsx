import { ArrowUpRight } from 'lucide-react';
import Logo from '../assets/LOGO.svg';

const navLinks = [
  { id: 1, label: 'about', href: '#' },
  { id: 2, label: 'service', href: '#' },
  { id: 3, label: 'product', href: '#' },
  { id: 4, label: 'library', href: '#' },
  { id: 5, label: 'blogs', href: '#' },
];

function Navbar() {
  return (
    <div className="navbar-section">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        {/* Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Button */}
        <button className="navbar-btn">
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
import { ArrowUpRight, Zap, Star as StarIcon } from 'lucide-react';
import Frame from '../assets/frame.svg';
import HeroImg from '../assets/heo-img.svg';



// Star rating array — 5 stars
const stars = [1, 2, 3, 4, 5];

function HeroSection() {
  return (
    <div className="hero-section">

      {/* Left Content */}
      <div className="hero-left-content">
        <div className="heading-section">

          {/* CRM / Rating Row */}
          <div className="crm-section">
            <div className="frame">
              <img src={Frame} alt="frame" />
            </div>
            <div className="rating-section">
              <div className="rating-section-container">
                <div className="rating">
                  {stars.map((star) => (
                    <StarIcon key={star} color="#1447e6" fill="#1447e6" size={16} />
                  ))}
                </div>
                <div className="rating-heading">
                  rated 5.0 by 40+ happy customers!
                </div>
              </div>
            </div>
          </div>

          {/* Hero Heading */}
          <div className="hero-heading">
            <span className="hero-highlights">electrifylabs</span> is powering the future of innovation
          </div>

        </div>

        {/* Subheading + Buttons */}
        <div className="hero-subheading">
          <div className="subheading">
            At ElectrifyLabs, we are dedicated to transforming ideas into cutting-edge technology solutions.
            Join us on a journey to innovate and electrify the future.
          </div>

          <div className="hero-cta-actions">
            {/* Primary Button */}
            <button className="hero-btn" onClick={(e) => {
              e.preventDefault();
              const targetElement = document.querySelector('#cta');
              if (targetElement) {
                targetElement.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}>
              <div className="hero-btn-container">
                contact us
                <ArrowUpRight size={20} />
              </div>
            </button>

            {/* Secondary Button */}
            <button className="hero-secondary-btn" onClick={(e) => {
              e.preventDefault();
              const targetElement = document.querySelector('#products');
              if (targetElement) {
                targetElement.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}>
              <div className="hero-secondary-btn-container">
                view all products
                <Zap size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Right Content - Hero Image */}
      <div className="right-content">
        <img src={HeroImg} alt="hero" />
      </div>

    </div>
  );
}

export default HeroSection;
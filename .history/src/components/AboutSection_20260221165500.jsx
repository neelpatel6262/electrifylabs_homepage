import { ArrowUpRight } from 'lucide-react';
import Placeholder from '../assets/Placeholder.jpg';

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-container">

        {/* Who We Are - Top Text */}
        <div className="who-we-are-section">
          <div className="about-heading">Who We Are</div>
          <div className="sub-heading">
            At ElectrifyLabs, we are committed to driving innovation through cutting-edge technology.
            Our mission is to deliver smart, electrifying solutions that enhance performance and
            reliability across various industries.
          </div>
        </div>

        {/* Content Section - Image + Stats */}
        <div className="about-content-section">

          {/* Left - Placeholder Image */}
          <div className="placeholder">
            <img src={Placeholder} alt="about us" />
          </div>

          {/* Right - Stats + CTA */}
          <div className="about-right-content">

            {/* Stat One */}
            <div className="content-one">
              <h1>75+</h1>
              <h4>Global Branches Established</h4>
              <p>Expanding our reach worldwide.</p>
            </div>

            {/* Stat Two + Read More */}
            <div className="content-two">
              <div className="content-two-info">
                <h1>15+</h1>
                <h4>Industry Awards Won</h4>
                <p>Recognized for excellence in manufacturing and automation.</p>
              </div>

              {/* Read More CTA */}
              <div className="content-cta-section">
                <div className="content-cta-section-container">
                  <h1>read more</h1>
                  <ArrowUpRight size={32} />
                </div>
                <hr className="about-cta" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
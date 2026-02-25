import { Zap, Plug, Cable, ArrowUpRight } from 'lucide-react';
import ServiceCard from './ServiceCard'

const cards = [
  {
    id: 1,
    icon: <Zap size={24} color="white" />,
    heading: "Explore Our Comprehensive Range of Services",
    subheading: "At ElectrifyLabs, we provide cutting-edge technology solutions to drive your success.",
    cardClass: "service-card-one",
    headingClass: "service-card-heading",
    subheadingClass: "service-card-subheading",
  },
  {
    id: 2,
    icon: <Plug size={24} color="white" />,
    heading: "Product Engineering: Transforming Ideas into Reality",
    subheading: "Our team specializes in developing innovative products tailored to your specifications.",
    cardClass: "service-card-two",
    headingClass: "service-card-two-heading",
    subheadingClass: "service-card-two-subheading",
  },
  {
    id: 3,
    icon: <Cable size={24} color="white" />,
    heading: "R&D Innovation: Pioneering Tomorrow's Technologies Today",
    subheading: "We invest in research and development to create groundbreaking tech solutions.",
    cardClass: "service-card-three",
    headingClass: "service-card-three-heading",
    subheadingClass: "service-card-three-subheading",
  },
];

function ServiceSection() {
  return (
    <div className="service-section">
      <div className="service-container">

        {/* Intro */}
        <div className="service-intro-section">
          <div className="service-body-heading">our services</div>
          <div className="service-heading">
            What We Offer: Innovative Solutions Tailored to Your Needs
          </div>
        </div>

        {/* Cards */}
        <div className="services-cards-section">
          {cards.map((card) => (
            <ServiceCard
              key={card.id}
              icon={card.icon}
              heading={card.heading}
              subheading={card.subheading}
              cardClass={card.cardClass}
              headingClass={card.headingClass}
              subheadingClass={card.subheadingClass}
            />
          ))}
        </div>

        {/* Button */}
        <button className="service-btn">
          <div className="service-btn-container">
            view all services
            <ArrowUpRight size={20} />
          </div>
        </button>

      </div>
    </div>
  );
}

export default ServiceSection;
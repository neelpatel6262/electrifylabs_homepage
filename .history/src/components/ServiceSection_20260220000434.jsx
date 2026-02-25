import { Zap, Plug, Cable, ArrowUpRight } from 'lucide-react';
import ServiceCard from './ServiceCard'

const cards = [
  {
    id: 1,
    icon: <Zap size={24} color="white" />, 
    heading: "Explore Our Comprehensive Range of Services",
    subheading: "At ElectrifyLabs, we provide cutting-edge technology solutions to drive your success.",
  },
  {
    id: 2,
    icon: <Plug size={24} color="white" />,
    heading: "Product Engineering: Transforming Ideas into Reality",
    subheading: "Our team specializes in developing innovative products tailored to your specifications.",
  },
  {
    id: 3,
    icon: <Cable size={24} color="white" />,
    heading: "R&D Innovation: Pioneering Tomorrow's Technologies Today",
    subheading: "We invest in research and development to create groundbreaking tech solutions.",
  },
];

function ServiceSection() {
  return (
    <div className="w-[1440px] h-[928px] bg-[#eff6ff] p-[80px] mx-auto">
      <div className="w-[1280px] h-[728px] mx-auto">

        {/* Intro */}
        <div className="w-[765px] h-[162px] mx-auto text-center mb-20">
          <div className="h-[20px] w-[765px] text-[24px] uppercase text-[#1447e6] font-semibold mb-8">
            our services
          </div>
          <div className="w-[765px] h-[116px] text-center font-semibold text-[48px]">
            What We Offer: Innovative Solutions Tailored to Your Needs
          </div>
        </div>

        {/* Cards */}
        <div className="mt-[78px] mb-[78px] flex w-[1280px] h-[362px] gap-[38px]">
          {cards.map((card) => (
            <ServiceCard
              key={card.id}
              icon={card.icon}
              heading={card.heading}
              subheading={card.subheading}
            />
          ))}
        </div>

        {/* Button */}
        <button className="rounded-[6px] bg-[#1447e6] border-[#1447e6] text-white text-[14px] uppercase p-[10px_20px_10px_20px] w-[200px] h-[48px] gap-[12px] mx-auto mt-[100px] tracking-[1%] flex items-center justify-center hover:shadow-[0px_4px_4px_0px_rgba(20,71,230,0.44)] transition-shadow duration-300">
          <div className="flex items-center">
            view all services
            <ArrowUpRight size={20} className="ml-[4px]" />
          </div>
        </button>

      </div>
    </div>
  );
}

export default ServiceSection;
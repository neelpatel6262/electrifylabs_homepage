function ServiceCard({ icon, heading, subheading, cardType = 1 }) {

  // Define card styles based on type
  const cardStyles = {
    1: "w-[402px] h-[362px] border-[2px] border-[#1447e6] rounded-[12px] p-[33px_29px_33px_29px]",
    2: "w-[402px] h-[362px] border-[2px] border-[#1447e6] rounded-[12px] p-[33px_21px_33px_21px]",
    3: "w-[402px] h-[362px] border-[2px] border-[#1447e6] rounded-[12px] p-[33px_17px_33px_17px]"
  };

  const headingWidth = cardType === 2 ? "w-[361px]" : cardType === 3 ? "w-[386px]\" : "w-[318px]";
  const subheadingWidth = cardType === 2 ? "w-[360px]" : cardType === 3 ? "w-[353px]" : "w-[344px]";
  const subheadingHeight = cardType === 2 ? "h-[48px]" : "h-[52px]";
  
  return (
    <div className={cardStyles[cardType] || cardStyles[1]}>
      <div className="w-[62px] h-[62px] bg-[#1447e6] rounded-[6px] mb-[84px] p-[9px] shadow-[0px_4px_4px_0px_rgba(20,71,230,0.44)]">
        {icon}
      </div>
      <div className={`text-[24px] leading-[160%] ${headingWidth} h-[76px] font-semibold mb-[22px] text-[#171717]`}>
        {heading}
      </div>
      <div className={`text-[16px] leading-[160%] text-[#171717] ${subheadingWidth} ${subheadingHeight}`}>
        {subheading}
      </div>
    </div>
  );


}

export default ServiceCard;
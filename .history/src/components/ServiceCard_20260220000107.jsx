function ServiceCard({ icon, heading, subheading, cardClass, headingClass, subheadingClass }) {


  return (
    <div className={cardClass}>
    
      <div className={headingClass}>
        {heading}
      </div>
      <div className={subheadingClass}>
        {subheading}
      </div>
    </div>
  );

  
}

export default ServiceCard;
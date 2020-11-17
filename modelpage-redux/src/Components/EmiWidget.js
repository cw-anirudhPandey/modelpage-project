import React from "react";

const EmiWidget = (props) => {
  return (
    <div className="emi-widget">
      Emi {props.details.cost} <button className="Rectangle-9">Customize your EMI</button>
      <p className="price-type">For {props.details.duration}</p>
    </div>
  );
};

export default EmiWidget;

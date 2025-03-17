import React from "react";
import BenefitItem from "./BenefitItem";

const BenefitsSection = ({ benefits = []}) => {
  return (
    <div className="px-4 py-5 bg-white rounded-lg shadow-sm max-w-md mx-auto">
      {benefits.map((benefit, index) => (
        <BenefitItem key={index} text={benefit} />
      ))}

    </div>
  );
};

export default BenefitsSection;
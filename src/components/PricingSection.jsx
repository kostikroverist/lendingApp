import React from 'react';

const PricingSection = ({ originalPrice, discountedPrice }) => {
  const hasDiscount = discountedPrice < originalPrice;

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-xs flex justify-between">
      <div className="text-gray-700 mr-4">
        <span className="block text-sm font-semibold">ЗВИЧАЙНА ЦІНА:</span>
        <span className={`block text-xl font-bold ${hasDiscount ? 'line-through text-gray-400' : 'text-black'}`}>
          {originalPrice} ГРН
        </span>
      </div>
      {hasDiscount && (
        <div className="text-green-600">
          <span className="block text-sm font-semibold">ЦІНА ЗА АКЦІЄЮ:</span>
          <span className="block text-xl font-bold">
            {discountedPrice} ГРН
          </span>
        </div>
      )}
    </div>
  );
};

export default PricingSection;
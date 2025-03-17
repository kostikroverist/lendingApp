import React from "react";

const HeroSection = ({ nameItems, imgUrl }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-md">
      <div className="w-full bg-pink-300 py-2 px-4 text-center">
        <h1 className="text-xl font-medium text-white">{nameItems}</h1>
      </div>
      <div className="flex justify-center bg-gray-50">
        <img
          src={imgUrl}
          alt={nameItems}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;

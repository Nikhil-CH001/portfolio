import React from 'react';

const SkillCard = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center p-3 sm:p-4 md:p-5 bg-gray-800 rounded-xl shadow-lg 
                    transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
      <img src={icon} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-1 sm:mb-2" />
      <span className="text-gray-300 text-xs sm:text-sm md:text-base">{name}</span>
    </div>
  );
};

export default SkillCard;
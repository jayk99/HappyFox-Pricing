import React, { useState } from 'react';
import { pricingData } from '../constants';
import PricingCard from '../components/PricingCard';

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState('Monthly');
  const planTitles = ['Monthly', 'Annual', '2-Year Savings Plan', '3-Year Contract'];

  const handleClick = (index) => {
    setSelectedPlan(planTitles[index]);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Pricing Bar */}
      <div className="flex flex-col items-center mb-[70px] mt-10 w-full">
        <div className="flex w-[1140px] h-[91px] bg-[#f5f4f4] justify-between items-center rounded-xl">
          {planTitles.map((title, index) => (
            <div
              key={index}
              className={`w-[280px] h-[71px] flex items-center justify-center py-[10px] px-[13.5px] text-center cursor-pointer rounded-xl transition duration-300 ease-in-out ${
                selectedPlan === title ? 'bg-[#fff] font-medium border border-[#c8c7c7]' : ''
              } ${selectedPlan !== title ? 'hover:bg-[#fff] hover:font-medium hover:border hover:border-[#c8c7c7]' : ''}`}
              onClick={() => handleClick(index)}
            >
              {title}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="w-full flex justify-center">
        <div className="w-[1140px] h-auto pl-[15px] pr-[15px] grid grid-cols-4 gap-4">
          {pricingData[selectedPlan].map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;


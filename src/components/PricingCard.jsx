import React from 'react';
import '/Users/Krishna/Desktop/happyfox-pricing/src/global.css'
import ArrowSvg from '../assets/Icons/right-arrow.svg'


const PricingCard = ({ plan }) => {
  return (
    <div className="w-[277.5px] h-[550px] pb-[10px] border-r-[1px]  hover:shadow-[0_20px_10px_0_rgba(0,0,0,0.08)] hover:rounded-br-[10px] duration-300 hover:rounded-bl-[10px] pricing-card">
      <h3 className="text-[24px] font-medium ml-[30px] mb-[20px] text-left">{plan.name}</h3>
      <div className="w-[227.5px] h-[72px] ml-[30px] mb-[20px] text-left">
        <span className="text-[24px]">$</span>
        <span className=' text-[48px]'>{plan.price}</span>
        <span className=" ml-[1px] text-[12px] font-light">Per agent/mo</span>
      </div>
      {plan.savings && (
        <div className="w-[227.5px] h-[24px] pb-[40px] ml-[30px] mb-[20px] text-left border-b border-gray-300 text-[#009928]">
          {plan.savings}
        </div>
      )}
      {!plan.savings && <div className="w-[227.5px] h-[24px] pb-[20px] ml-[30px] mb-[20px] text-left border-b border-gray-300"></div>}
      <ul className="w-[196.72px] h-[216px] ml-[30px] mb-[20px]">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex w-[196px] h-[21px] items-center mb-[15px] text-[14px] font-light">
 
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-[217.5px] h-[44px] ml-[30px] mt-10 py-2 px-4 bg-[#f9f9f9] text-black font-medium rounded-lg flex justify-between items-center transition-all duration-200 ease-in  pricing-card-button">
        Get a Demo
   
      </button>
    </div>
  );
};

export default PricingCard;


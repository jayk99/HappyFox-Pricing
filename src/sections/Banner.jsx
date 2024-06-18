// Banner.js
import React, { useState } from 'react';
import bannerImage from '../assets/Images/pricing-banner.png';
import PlanSwitcher from '../components/PlanSwitcher';

const Banner = ({ onPlanSelect }) => {
  const [selectedPlan, setSelectedPlan] = useState('Agent');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    onPlanSelect(plan);
  };

  return (
    <div className="relative">
      <img
        src={bannerImage}
        alt="Banner"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-[40px] font-medium text-black plan-margin font-inter">Plans & Pricing</h1>
        <PlanSwitcher selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
      </div>
    </div>
  );
};

export default Banner;


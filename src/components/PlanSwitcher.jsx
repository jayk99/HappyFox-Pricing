import React from 'react'

const PlanSwitcher = ({ selectedPlan, onSelectPlan }) => {
  return (
    <div className="flex justify-center gap-6 ">
      <span
        className={`bg-white rounded-t-xl cursor-pointer w-319 h-90 flex items-center justify-center plan-coloring font-inter ${selectedPlan === 'Agent' ? 'bg-white' : 'bg-[#ffeada]'}`}
        onClick={() => onSelectPlan('Agent')}
      >
        Agent-based pricing
      </span>
      <span
        className={`rounded-t-xl cursor-pointer w-319 h-90 flex items-center justify-center plan-coloring font-inter ${selectedPlan === 'Unlimited' ? 'bg-white' : 'bg-[#ffeada]'} hover:bg-white`}
        onClick={() => onSelectPlan('Unlimited')}
      >
        Unlimited agents
      </span>
    </div>
  );
};

export default PlanSwitcher;

      

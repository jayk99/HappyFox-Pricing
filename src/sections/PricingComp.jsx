
import { planData, ticketManagementFeatures } from '../constants'
import TickSvg from '../assets/Icons/pricing-tick.svg'
import NoTick from '../assets/Icons/pricing-no-tick.svg'



  
const PricingComp = () => {
    
return (
    <div className="flex flex-col items-center font-inter">
   
      <div className="max-w-[1110px] w-full mx-auto px-4">
        
        <div className="w-full">
          <div className="grid grid-cols-5 w-full py-2 mt-8">
            <div className="col-span-1 px-5 text-left">
              <div className="font-medium">Ticket Management</div>
            </div>
            <div className="col-span-4"></div>
          </div>
          {ticketManagementFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-5 w-full pt-[14px] ${index % 2 === 1 ? 'bg-[#FAFAFA]' : ' hover:bg-[#f7f7f7]'}`}
            >
              <div className="col-span-1  px-5 text-left">
                <a href="#" className="border-b-[0.5px] border-[#323643] text-[#323643] font-light hover:text-[#f16631] hover:border-b-[0.5px] hover:border-b-[#f16631]  whitespace-nowrap ">
                  {feature}
                </a>
              </div>
              {planData.map((plan, planIndex) => (
                <div key={`${planIndex}-${index}`} className="flex items-center justify-center py-2">
                  {plan.ticketManagement[feature] ? <img src={TickSvg} /> : <img src={NoTick}/>}
                </div>
              ))}
            </div>
          ))}
          <div className="grid grid-cols-5 w-full pt-[14px] bg-[#FAFAFA]">
            <div className="col-span-1 py-2 px-5 text-left">
              <a href="#" className=" border-b-[0.5px] font-light  border-[#323643] text-[#323643] hover:text-[#f16631]  hover:border-b-[0.5px] hover:border-b-[#f16631] whitespace-nowrap ">
                Attachment Store
              </a>
            </div>
            {planData.map((plan, planIndex) => (
              <div key={planIndex} className="flex items-center justify-center py-2 font-light">
                {plan.attachmentStore}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComp;
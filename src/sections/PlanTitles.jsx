import React from 'react'
import { planData } from '../constants'

const PlanTitles = () => {
  return (

    <div className="sticky top-[60px] z-10 bg-white w-full h-[74px] flex items-center"> 
    <div className='container w-[1122px] mx-auto flex flex-row justify-end gap-[135px] pt-[50px] pb-5 mr-[195px] border-b-[1px] border-solid border-[#989DAD33]'>
    {planData.map((plan, planIndex) => (
            <div key={planIndex} className=" flex text-left justify-end ">
              <div className=" font-medium text-[#323643] text-[20px]">{plan.plan}</div>
            </div>
          ))}
    </div>

     
    </div>
  )
}

export default PlanTitles



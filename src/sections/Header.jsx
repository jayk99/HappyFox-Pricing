import React from 'react'
import '/Users/Krishna/Desktop/happyfox-pricing/src/global.css'
import helpDesk from '../assets/Icons/HD-logo.svg'
import arrowDown from '../assets/Icons/arrow-down.png'

const Header = () => {
  return (
 
    

      <header className=' w-full h-61 bg-btn-clr block helpdesk-border sticky top-0 z-10'>
      <div className=' w-full wrapper-div h-54 padding-nav ml-auto mr-auto flex justify-between items-center pt-0.5 pb-0.5'>
      <div className=' flex items-center'>
        <a className=' cursor-pointer' href='/'>
            <img src={helpDesk} className=' h-30 w-30 mt-1' alt='HelpDesk Logo'></img>
        </a>
        <span className=' font-inter text-[25px] font-normal w-107 h-37 inline-flex items-center pl-3 '>helpdesk</span>
      </div>
      <div className='flex items-center'>
            <ul className=' flex px-14 list-margin'>
              
                <li className='w-130 h-54 flex items-center'>
                  <a href='/' className=' a-padding'>
                   <span className=' flex items-center nav-padding w-auto h-auto hover:bg-white rounded-lg '>Features<img src={arrowDown} className=' h-2 w-2 ml-1.5 mt-0.5'></img></span> 
                  </a>
                </li>
                <li className='w-130 h-54 flex items-center'>
                  <a href='/' className=' a-padding'>
                   <span className=' flex items-center nav-padding w-auto h-auto  hover:bg-white rounded-lg   '>Solutions<img src={arrowDown} className=' h-2 w-2 ml-1.5 mt-0.5'></img></span> 
                  </a>
                </li>
                <li className='w-130 h-54 flex items-center'>
                  <a href='/' className=' a-padding'>
                   <span className=' flex items-center nav-padding w-auto h-auto hover:bg-white rounded-lg'>Pricing</span> 
                  </a>
                </li>
                <li className='w-130 h-54 flex items-center'>
                  <a href='/' className=' a-padding'>
                   <span className=' flex items-center nav-padding w-auto h-auto  hover:bg-white rounded-lg'>Resources<img src={arrowDown} className=' h-2 w-2 ml-1.5 mt-0.5'></img></span> 
                  </a>
                </li>
              
            </ul>
            <button className=' font-inter header-red hover:translate-y-1 transition ease-out duration-300 '>Get a Demo</button>
          </div>

      </div>

      </header>
  
  )
}

export default Header

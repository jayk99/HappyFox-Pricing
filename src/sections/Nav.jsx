
import topLogo from '../assets/Images/header.svg'
import '/Users/Krishna/Desktop/happyfox-pricing/src/global.css'
import arrowDown from '../assets/Icons/arrow-down.png'

const Nav = () => {
  return (
    <>
    <header className=' w-1440 h-56 pt-2.5 block'>
        <div className=' w-1140 h-46 pr-3.5 pl-3.5 ml-auto mr-auto flex items-center '>
            <div className=' flex justify-start items-start'>
                <a href='https://www.happyfox.com/help-desk-price/' className=' cursor-pointer'>
                    <img src={topLogo} className=' w-116 h-24 mt-3' ></img>
                </a> 
                <span className=' w-136 h-45  bg-btn-clr top-border font-inter text-base text-text-clr font-medium inline-flex items-center justify-center cursor-pointer ml-6'>
                   Products <img src={arrowDown} className='arrow-down'></img>
                </span>
            </div>
            <div className='login'>
                <a className=' cursor-pointer' href='/'>Log In</a>
            </div>
            
          

            </div> 
        
         
        
    </header>
    </>
  )
}

export default Nav

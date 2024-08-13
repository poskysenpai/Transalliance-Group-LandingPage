import React from 'react'
import Logo from '../../assets/images/Logo (1).svg'
import img from '../../assets/images/yellowellipse (1).svg'
import arrow from '../../assets/images/arrow.svg'
const Navbar = () => {
  return (
   
      
    <div className="flex justify-between ">

        <div>
            <img src={img} alt="" srcset="" className="absolute -top-32 -left-32 " />
        </div>
      {/* Add your page content here */}
      <div className="mt-4 pr-10 mr-20">
        
        <img src={Logo} alt="" srcset="" className=" h-20 w-16 "/>
        </div>
      <div className="text-white p-8 flex mr-10">
        
        <div className="flex justify-between items-center">
          
          <ul className="flex space-x-8">
            <li>Home</li>
            <li>About</li>
            <li>Solutions</li>
            <li>News & Insights</li>
            <li>Contact Us</li>
          </ul>
         
        </div>
        <div className="bg-custom-green1 flex text-black ml-6 py-2 px-4 rounded-md"> <p className='mr-1'>Get Started </p> <img src={arrow} alt="" srcset="" className='h-2 w-2 mt-2 ' /> </div>
      </div>

    </div>
    
  )
}

export default Navbar

import React from 'react'
import Logo from '../../assets/images/Logo (1).svg'
import img from '../../assets/images/image 43.svg'
const Footer2 = () => {
  return (
    <div className='flex mt-10'>
        <div className='bg-custom-blue h-80 flex pt-10 w-1/2 pl-20 rounded-tr-3xl '>
        <img src={Logo} alt="" srcset="" className='h-10 w-10 mr-20' />
       <img src={img} alt="" srcset="" className='h-64 mt-5'/>
       
      </div>
      <div className='bg-custom-green3  h-60 w-1/2 mt-20 pl-40 pt-2 space-y-2'>
        <div className='font-medium text-3xl'>One portal, <br/> every transaction

        </div>
        <div className='text-sm font-medium'> Our customer portal provides an intuitive <br/>interface to access all of our services via a <br/> simple, single login.<br/>
            <ul>
                <li>Real-time, 24/7, 365 transaction tracking  </li>
                <li> Customizable & downloadable reports </li>
                <li>Rich data analysis </li>
                <li>Multiple integration methods, built to suit your needs</li>
            </ul>
        </div>
        
      </div>
      
    </div>
  )
}

export default Footer2

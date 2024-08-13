import React from 'react'
import img from '../../assets/images/Frame 526.svg'
import img2 from '../../assets/images/Layer 0 1.svg'
import Logo from '../../assets/images/Logo (1).svg'
const Footer1 = () => {
  return (
    <div className='flex mt-10'>
      <div className='bg-custom-green3  h-60 w-1/2 mt-20 pl-40 pt-4 space-y-4'>
        <div className='font-medium text-3xl'>The human-powered <br/> payments network
        </div>
        <div className='text-sm'>Driven by a team of over 200 global <br/> payments experts with absolute dedication <br/>  to solving our customers’ most complex <br/>  cross-border payments challenges.
        </div>
        <div> <img src={img} alt="" className='h-10' /> </div>
      </div>
      <div className='bg-custom-blue h-80 flex pt-10 w-1/2 pl-40 rounded-tl-3xl '>
       <img src={img2} alt="" srcset="" className='h-64 pr-20'/>
       <img src={Logo} alt="" srcset="" className='h-10 w-10' />
      </div>
    </div>
  )
}

export default Footer1

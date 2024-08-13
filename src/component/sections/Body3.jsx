import React from 'react'
import img from '../../assets/images/Frame 592.svg'
import img1 from '../../assets/images/Frame 593.svg'
import img2 from '../../assets/images/Frame 594.svg'
import img3 from '../../assets/images/Frame 595.svg'
import img4 from '../../assets/images/Frame 558.svg'

const Body3 = () => {
  return (
    <div className='bg-gray-100'>
      <div className='space-y-10 p-10'>
        <h2 className='font-medium text-5xl'>Sectors we serve
        </h2>
        <p>We simplify the complexities of cross-border payments in some of the world’s most <br/> demanding sectors. Learn more about who we serve and how we add value below.
        </p>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 gap-y-10 px-16 pb-16'>
        <div> <img src={img3} alt="" className='h-60'/> </div>
        <div> <img src={img2} alt="" className='h-60  '/> </div>
        <div> <img src={img}alt="" className='h-60 pl-10'/> </div>
        <div> <img src={img1} alt="" className='h-60 pl-14 ' /> </div>
      </div>
      <div>
      <img src={img4} alt="" className='w-screen ' /> 
      </div>
    </div>
  )
}

export default Body3

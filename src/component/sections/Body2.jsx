import React from 'react'
import img0 from '../../assets/images/image 39.svg'
import img1 from '../../assets/images/image 40.svg'
import img2 from '../../assets/images/image 41.svg'
import img3 from '../../assets/images/image 42.svg'
import img4 from '../../assets/images/Frame 598.svg'
const Body2 = () => {
  return (
    <div className='flex p-20 '>
      <div className='space-y-10'>
        <div> OUR SERVICE</div>
        <div className='space-y-2 mr-44'> 
            <img src={img0} alt="" srcset="" className='h-10'/>
            <h3 className='font-medium text-xl'>We are your trusted partner</h3>
            <p className='text-sm w-72'>We are a dedicated and diligent team of payments specialists that’s committed to helping you unlock opportunity, create value and make payments happen, together.</p>
        </div>
        <div className='space-y-2'>
            <img src={img1} alt="" srcset="" className='h-10'/>
            <h3 className='font-medium text-xl'>We provide the network you need</h3>
            <p className='text-sm w-72'>We open access to a resilient global network spanning 90+ countries that’s built to simplify complex challenges and move money at speed.</p>
        </div>
        <div className='space-y-2'>
            <img src={img2} alt="" srcset="" className='h-10' />
            <h3 className='font-medium text-xl'>We bring certainty through compliance</h3>
            <p className='text-sm w-72'>We were born with compliance at our heart. Licensed by the globally trusted Danish FSA, when we move money you can be confident that it gets to the right place with absolute accuracy.</p>
        </div>
        <div className='space-y-2'>
            <img src={img3} alt="" srcset="" className='h-10' />
            <h3 className='font-medium text-xl'>We execute with expertise</h3>
            <p className='text-sm w-72'>We complete an industry-leading 99% of payments for customers in the fast-changing financial services, iGaming, corporate and NGO sectors, drawing on 16 years of proven expertise.
            .</p>
        </div>
      </div>
      <div className='space-y-10'>
      <div className='ml-20 space-y-2'>
     
        <h1 className='font-semibold text-4xl '>The Transalliance Group. <br/> difference
        </h1>
        <p>Our global payments network is powered by passionate people, transparent customer relationships, and leading-edge technology.
        </p>
      </div>
      <div className='pt-20'>
      <img src={img4} alt="" srcset="" />
      </div>
      </div>
    </div>
  )
}

export default Body2

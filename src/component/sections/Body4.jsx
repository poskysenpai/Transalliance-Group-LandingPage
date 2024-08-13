import React from 'react'
import img0 from '../../assets/images/image 48.svg'
import img1 from '../../assets/images/arrow-right-circle.svg'
const Body4 = () => {
  return (
    <div className='flex justify-around px-16 py-10 bg-gray-100'>
      <div className='w-5/12 px-10 py-10'><img src={img0} alt="" srcset="" className=''/></div>
      <div className='border w-5/12 rounded-md bg-white'>
        <h2 className='font-medium text-2xl ml-5 mt-5'>Speak to Sales</h2>
        <div className=' pl-16 py-5  space-y-2'>
            <div className='space-y-1'>
                <p className='font-medium'>Email</p>
                <input type="text" className='border w-80 rounded-lg'/>
            </div>
            <div className='space-y-1'>
                <p className='font-medium'>First Name</p>
                <input type="text" className='border w-80 rounded-lg'/>
            </div>
            <div className='space-y-1'>
                <p className='font-medium'>Last Name</p>
                <input type="text" className='border w-80 rounded-lg'/>
            </div>
            <div className='space-y-1'>
                <p className='font-medium'>Message</p>
                
               <input type="" name="" id="" className='border w-80 h-20 rounded-lg'/>
            </div>
            <div className='flex'>
            <input type="checkbox" name="" id="" className='mb-10'  />
                <p className='text-xs p-5'>I agree to receiving payment news and trends from Inpay, including updates to our products and services. I am aware that I can withdraw this consent at any time by contacting Inpay or unsubscribing via email. I agree to Inpay processing my personal data in accordance with its Privacy Policy.</p>
            </div>
            <div className=''> <button className='flex justify-between px-3 py-2 rounded-lg bg-gradient-to-bl from-[#24343E] to-[#5AAF87]'> <p>Submit</p> <img src={img1} alt="" className='h-5 w-5 ml-5'/></button></div>
            </div>
        
      </div>
    </div>
  )
}

export default Body4

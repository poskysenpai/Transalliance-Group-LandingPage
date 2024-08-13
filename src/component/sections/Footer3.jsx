import React from 'react'
import img0 from '../../assets/images/Frame 565.svg'
import img1 from '../../assets/images/social.svg'
import img2 from '../../assets/images/Frame 612.svg'
import img3 from '../../assets/images/Frame 615.svg'
import img4 from '../../assets/images/arrow-right-circle.svg'
const Footer3 = () => {
  return (
    <div>
      <div className='flex '>
        <div className=' w-7/12 pl-40 pt-12 space-y-5'>
            <img src={img3} alt="" srcset="" className='h-10' />
            <button className='flex justify-between px-3 py-1 rounded-lg bg-gradient-to-bl from-[#24343E] to-[#5AAF87]'>
                 <p>Contact us</p> <img src={img4} alt="" className='h-5 w-5 ml-5'/>
            </button>
        </div>
        <div className='pt-10' >
            <img src={img2} alt="" srcset="" />
        </div>
      </div>
            <div className="py-20 pr-24 flex justify-end">
                <div className="">
                    <p>Social media</p>
                    <img src={img1} alt=""  className='h-7'/>
                </div>
            </div>

      <div>
        <img src={img0} alt="" srcset="" className=''/>
      </div>
    </div>
  )
}

export default Footer3

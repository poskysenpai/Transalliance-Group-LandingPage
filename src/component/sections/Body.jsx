import React from 'react'
import image from '../../assets/images/image1.svg'
import image1 from '../../assets/images/Travel concept with documents.svg'
import img from '../../assets/images/Ellipse 15.svg'
import img1 from '../../assets/images/fi_arrow-right-circle.svg'
import img2 from '../../assets/images/Vector 49.svg'
import img3 from '../../assets/images/Frame 525.svg'

const Body = () => {
  return (
    <div className='flex-col'>
        <div className='flex justify-center'>
            <div className='pt-20 pr-10 space-y-5'>
                <div className='text-orange-600'>Simplified cross-border payment</div>
                <div className='text-white text-6xl text-wrap font-normal'>We are the <br/> payments people</div>
                <div className='text-white text-wrap'>Transalliance Group.’s cross-border payments solutions connect <br/>organisations and communities globally to the network they need <br/> to thrive. Together, we make money move.</div>
            </div>
            <div>

            <img src={image} alt="" srcset="" className='object-cover w-96 h-96 ml-20'/>
            <p className='absolute top-52 left-1118px bg-gray-100 bg-opacity-70 text-gray-800 font-bold text-sm p-2 rounded-md shadow'>24/7, 365 transaction tracking</p>
            </div>
           
        </div>
        <div className='mt-11'>
            <div className='absolute bg-gray-400 bg-opacity-50 bottom-1 left-40 font-sm flex text-sm rounded-md text-white px-8 py-4 '> <p className='pr-10'>Discover More </p> <img src={img1} alt="" srcset="" className='w-5 h-5' /> </div>
            <div className='absolute left-1/2 top-1/3 lg:top-3/4 pr-10  '> <img src={img2} alt="" srcset="" className='w-40 h-32' /> </div>
            
            <div className='flex'>
                <div className='bg-custom-green2  rounded-tr-3xl flex items-center justify-center '> <img src={image1} alt="" srcset="" className='w-fit h-44 lg:h-56  fill-emerald-600 opacity-80'/> </div>
                <div className=''>
                <img src={img} alt="" srcset="" className=" absolute top-36 lg:-top-64 -left-0  " />
                </div>
            </div>
            <div className="absolute left-32 bottom-96 lg:-bottom-52  bg-opacity-70  p-4  bg-white rounded-tr-lg rounded-tl-lg shadow-lg w-3/4">
                <p className="text-gray-900 font-semibold ">
                Send and Receive Money from all <br/> over with ease.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Body

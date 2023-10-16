/* eslint-disable no-unused-vars */
import React from 'react'
import cup1 from '../assets/cup1.png'
import cup2 from '../assets/cup2.png'
import cup3 from '../assets/cup3.png'
import cup4 from '../assets/cup4.png'
import cup5 from '../assets/cup5.png'
import cup6 from '../assets/cup6.png'
import cup7 from '../assets/cup7.png'
import cup8 from '../assets/cup8.png'

const Instagram = () => {
  return (
    <div className='px-8 md:px-12 lg:px-16 pb-20'>
        <p className='text-center mb-1 text-sm'>Follow Us Now</p>
        <h1 className='text-2xl text-center text-[#331A15] drop-shadow-md mb-8 font-semibold font-display'>Follow on Instagram</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <img src={cup1} alt="" className='w-full'/>
            <img src={cup2} alt="" className='w-full'/>
            <img src={cup3} alt="" className='w-full'/>
            <img src={cup4} alt="" className='w-full'/>
            <img src={cup5} alt="" className='w-full'/>
            <img src={cup6} alt="" className='w-full'/>
            <img src={cup7} alt="" className='w-full'/>
            <img src={cup8} alt="" className='w-full'/>
        </div>
    </div>
  )
}

export default Instagram

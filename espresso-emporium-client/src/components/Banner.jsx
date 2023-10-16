/* eslint-disable no-unused-vars */
import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="relative bg-cover bg-[url('https://i.ibb.co/ZG4DvGf/banner.png')] bg-no-repeat">
        <div className="flex justify-end items-center px-10 lg:px-44 h-[500px] lg:h-screen">
            <div className='mx-auto lg:mx-0'>
                <h2 className='font-display text-white font-medium  text-2xl md:text-4xl mb-3'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='text-zinc-100 text-xs md:w-[450px] leading-5 mb-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='font-display font-medium text-lg bg-[#E3B577] px-4 py-1'>Learn More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

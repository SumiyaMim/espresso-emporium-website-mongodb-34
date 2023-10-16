/* eslint-disable no-unused-vars */
import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

const About = () => {
  return (
    <div className='bg-[#ECEAE3]'>
      <div className='px-8 md:px-12 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div>
            <img src={icon1} alt="" className='h-10 mb-3'/>
            <h1 className='font-display font-medium text-2xl mb-1'>Awesome Aroma</h1>
            <p className='text-xs font-medium leading-5'>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div>
            <img src={icon2} alt="" className='h-10 mb-3'/>
            <h1 className='font-display font-medium text-2xl mb-1'>High Quality</h1>
            <p className='text-xs font-medium leading-5'>We served the coffee to you maintaining the best quality</p>
        </div>
        <div>
            <img src={icon3} alt="" className='h-10 mb-3'/>
            <h1 className='font-display font-medium text-2xl mb-1'>Pure Grades</h1>
            <p className='text-xs font-medium leading-5'>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div>
            <img src={icon4} alt="" className='h-10 mb-3'/>
            <h1 className='font-display font-medium text-2xl mb-1'>Proper Roasting</h1>
            <p className='text-xs font-medium leading-5'>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </div>
  )
}

export default About

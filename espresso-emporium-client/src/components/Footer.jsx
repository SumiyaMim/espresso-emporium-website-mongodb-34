/* eslint-disable no-unused-vars */
import React from 'react'
import logo1 from '../assets/logo1.png'
import icon from '../assets/icon.png'
import { BiSolidMap } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';


const Footer = () => {
  return (
    <div>
      <div className="relative bg-cover bg-[url('https://i.ibb.co/ZGPQ6wd/13.jpg')] bg-no-repeat">
      <div className="relative flex flex-col md:flex-row md:justify-between md:items-center md:h-[500px] gap-10 lg:gap-20 px-8 md:px-12 lg:px-16 py-20 md:py-5">
            <div className='md:w-1/2'>
                <img src={logo1} alt="" className='w-12 mb-1'/>
                <h2 className='font-display text-[#331A15] drop-shadow-md font-semibold text-3xl mb-4'>Espresso Emporium</h2>
                <p className='text-sm mb-5'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <img src={icon} alt="" className='w-32 mb-5'/>
                <h2 className='font-display text-[#331A15] drop-shadow-md font-semibold text-3xl mb-4'>Get in Touch</h2>
                <div className='flex items-center gap-3 mb-1'>
                    <i className='text-[#331A15] text-base'><BsFillTelephoneFill></BsFillTelephoneFill></i>
                    <p className='text-sm'>+88 01533 333 333</p>
                </div>
                <div className='flex items-center gap-3 mb-1'>
                    <i className='text-[#331A15] text-lg'><MdMail></MdMail></i>
                    <p className='text-sm'>info@gmail.com</p>
                </div>
                <div className='flex items-center gap-3'>
                    <i className='text-[#331A15] text-lg'><BiSolidMap></BiSolidMap></i>
                    <p className='text-sm'>72, Wall street, King Road, Dhaka</p>
                </div>
            </div>
            <div className='md:w-1/2'>
                <h2 className='font-display text-[#331A15] drop-shadow-md font-semibold text-3xl mb-6'>Connect with Us</h2>
                <div className="form-control mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered text-sm w-full outline-none focus:outline-none"
                    />
              </div>
              <div className="form-control mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered text-sm w-full outline-none focus:outline-none"
                    />
              </div>
              <textarea 
              className="textarea textarea-bordered resize-none h-24 text-sm w-full outline-none focus:outline-none mb-4" 
              placeholder="Message">
              </textarea>
              <button className='text-[#331A15] bg-transparent border-2 border-[#331A15] px-3 py-1 rounded-3xl font-display text-base font-medium'>Send Message</button>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Footer

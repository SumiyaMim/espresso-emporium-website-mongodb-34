/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import error from '../assets/error.gif'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';


const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-10 pb-20">
        <div className="flex items-center gap-3 mb-10 justify-center">
            <div><FiArrowLeft className="text-xl"></FiArrowLeft></div>
            <div>
                <Link to='/'>
                    <h1 className="text-xl text-[#374151] drop-shadow-md font-semibold font-display">
                    Back to home
                    </h1>
                </Link>
            </div>
            </div>
            <img src={error} alt="" className='mx-auto'/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Error

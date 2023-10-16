/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const ViewCoffee = () => {

    const [singleCoffee, setSingleCoffee] = useState({})

    const {id} = useParams();
    const coffee = useLoaderData();
    // console.log(coffee)

    useEffect(() => {
        const findCoffee = coffee?.find((singleCoffee) => singleCoffee._id === id)
        setSingleCoffee(findCoffee)
        // console.log(findCoffee)
    },[id, coffee])

    const { name, chef, category, taste, supplier, photo, details } = singleCoffee;

  return (
    <div>
      <Navbar></Navbar>
      <div className="px-8 md:px-12 lg:px-16 pt-10 pb-20">
        <div className="flex items-center gap-3 mb-10">
          <div><FiArrowLeft className="text-xl"></FiArrowLeft></div>
          <div>
            <Link to='/'>
                <h1 className="text-xl text-[#374151] drop-shadow-md font-semibold font-display">
                Back to home
                </h1>
            </Link>
          </div>
        </div>
        <div className="bg-[#F4F3F0] px-8 lg:px-12 py-10">
            <div className='flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20'>
                <img src={photo} alt="" className='lg:w-60'/>
                <div>
                    <p className='font-bold mb-1'>Name: <span className='font-medium'>{name}</span></p>
                    <p className='font-bold mb-1'>Chef: <span className='font-medium'>{chef}</span></p>
                    <p className='font-bold mb-1'>Supplier: <span className='font-medium'>{supplier}</span></p>
                    <p className='font-bold mb-1'>Taste: <span className='font-medium'>{taste}</span></p>
                    <p className='font-bold mb-1'>Category: <span className='font-medium'>{category}</span></p>
                    <p className='font-bold mb-1'>Details: <span className='font-medium'>{details}</span></p>
                </div>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ViewCoffee

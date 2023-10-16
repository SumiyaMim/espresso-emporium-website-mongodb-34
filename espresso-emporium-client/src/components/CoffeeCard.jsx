/* eslint-disable no-unused-vars */
import React from 'react'
import { MdModeEdit } from 'react-icons/md';
import { AiTwotoneDelete, AiFillEye } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {

    const { _id, name, chef, category, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure that you want to delete it?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://espresso-emporium-server-r94cyccfq-sumiya-islams-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        // remove the coffee from the UI
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining);
                    }
                })
            }
        })

    }

  return (
    <div className='bg-[#F5F4F1] rounded-lg p-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-5 mx-auto lg:px-10'>
            <div>
                <img src={photo} alt="" className='w-28 h-40'/>
            </div>
            <div>
                <h2 className='font-bold text-sm mb-1'>Name: <span className='font-normal'>{name}</span></h2>
                <h2 className='font-bold text-sm mb-1'>Chef: <span className='font-normal'>{chef}</span></h2>
                <h2 className='font-bold text-sm'>Category: <span className='font-normal'>{category}</span></h2>
            </div>
            <div className='flex flex-row lg:flex-col gap-4 lg:gap-2'>
                <Link to={`/coffee/${_id}`}>
                    <button className='bg-[#D2B48C] text-white text-xl p-2 rounded-md'><AiFillEye></AiFillEye></button>
                </Link>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className='bg-[#3C393B] text-white text-xl p-2 rounded-md'><MdModeEdit></MdModeEdit></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className='bg-[#EA4744] text-white text-xl p-2 rounded-md'><AiTwotoneDelete></AiTwotoneDelete></button>
            </div>
        </div>
    </div>
  )
}

export default CoffeeCard

/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FiArrowLeft } from 'react-icons/fi';
import Swal from 'sweetalert2';
import Footer from './Footer';

const UpdateCoffee = () => {

  const coffee = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, chef, supplier, taste, category, details, photo }
    console.log(updatedCoffee);

     // send data to the server
     fetch(`https://espresso-emporium-server-r94cyccfq-sumiya-islams-projects.vercel.app/coffee/${_id}`,{
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCoffee)
     })
     .then(res => res.json())
     .then(data => {
         console.log(data);
         if(data.modifiedCount > 0){
          Swal.fire({
              title: 'Congratulations!',
              text: 'Coffee Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
          })
          navigate('/');
        }
     })

  }
  return (
    <div className='max-w-7xl'>
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
          <h1 className="text-2xl text-center text-[#374151] mb-4 drop-shadow-md font-semibold font-display">
              Update Existing Coffee Details
          </h1>
          <p className="text-zinc-500 text-center mx-auto leading-5 text-xs mb-6 md:w-3/4 lg:w-1/2">Elevate your coffee game with Espresso Emporium's exquisite brews. Experience the perfect fusion of boldness and sophistication in every sip. Your daily dose of luxury awaits.</p>
          <form onSubmit={handleUpdateCoffee}>
            <div className="md:flex gap-7 md:mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-bold">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    defaultValue={name} 
                    placeholder="Enter coffee name"
                    className="input input-bordered text-sm w-full outline-none focus:outline-none"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-bold">Chef</span>
                </label>
                <input
                    type="text"
                    name="chef"
                    defaultValue={chef} 
                    placeholder="Enter coffee chef"
                    className="input input-bordered text-sm w-full outline-none focus:outline-none"
                />
              </div>
            </div>
            <div className="md:flex gap-7 md:mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-bold">Supplier</span>
                </label>
                <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier} 
                    placeholder="Enter coffee supplier"
                    className="input input-bordered text-sm w-full outline-none focus:outline-none"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-bold">Taste</span>
                </label>
                <input
                    type="text"
                    name="taste"
                    defaultValue={taste} 
                    placeholder="Enter coffee taste"
                    className="input input-bordered text-sm w-full outline-none focus:outline-none"
                />
              </div>
            </div>
            <div className="md:flex gap-7 md:mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-bold">Category</span>
                </label>
                <input
                    type="text"
                    name="category"
                    defaultValue={category} 
                    placeholder="Enter coffee category"
                    className="input input-bordered text-sm w-full outline-none focus:outline-none"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-bold">Details</span>
                </label>
                <input
                    type="text"
                    name="details"
                    defaultValue={details} 
                    placeholder="Enter coffee details"
                    className="input input-bordered text-sm w-full outline-none focus:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">Photo</span>
                </label>
                <input
                    type="text"
                    name="photo"
                    defaultValue={photo} 
                    placeholder="Enter photo URL"
                    className="input input-bordered text-sm w-full outline-none focus:outline-none"
                />
              </div>
            </div>
            <div className="my-10">
              <button className="bg-[#D2B48C] w-full font-display text-[#331A15] p-2 border-2 border-[#331A15] rounded-md text-lg font-medium">Update Coffee Details</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default UpdateCoffee

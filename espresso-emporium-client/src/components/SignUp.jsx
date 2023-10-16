/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { FiArrowLeft } from 'react-icons/fi';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Congratulations!',
                    text: 'Account Created Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                signOutUser(); 
                navigate('/signin');

                // new user has been created
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt: createdAt };
                fetch('https://espresso-emporium-server-b8qbbbg9g-sumiya-islams-projects.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            console.log('user added to the database')
                        }
                    })
            })
            .catch(error => {
                console.error(error)
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
        <div className="px-8 lg:px-12 py-10">
            <div className='bg-[#F4F3F0] md:w-3/4 lg:w-1/2 p-8 md:p-10 lg:p-16 mx-auto'>
                <h1 className="text-2xl text-center text-[#374151] mb-4 drop-shadow-md font-semibold font-display">
                Sign up
                </h1>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-base font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered text-sm w-full outline-none focus:outline-none"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-base font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered text-sm w-full outline-none focus:outline-none"
                        />
                    </div>
                    <p className="text-[#1a0909] my-5 text-center text-xs font-semibold">
                        Already have an account?{" "}
                        <Link to="/signin">
                            <span className="text-[#74382c]">Sign in</span>
                        </Link>
                    </p>
                    <div className="my-10">
                    <button className="bg-[#D2B48C] w-full font-display text-[#331A15] p-2 border-2 border-[#331A15] rounded-md text-lg font-medium">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SignUp

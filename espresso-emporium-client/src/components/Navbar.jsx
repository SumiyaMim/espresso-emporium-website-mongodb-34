/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import logo1 from '../assets/logo1.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();
    signOutUser(); 
    navigate('/signin'); 
  };

  return (
    <div className='px-8 md:px-12 lg:px-16 bg-[#331A15] flex justify-between items-center py-3'>
      <div className='flex items-center gap-3'>
        <img src={logo1} alt="" className='w-9'/>
        <h2 className='font-display text-white font-medium text-3xl'>Espresso Emporium</h2>
      </div>
      { user ?     
      <button onClick={handleSignOut} className='font-display text-white font-medium text-xl'>Sign out</button>
      :       
      <Link to="/signin">
          <button className='font-display text-white font-medium text-xl'>Sign in</button>
      </Link>
      }
    </div>
  )
}

export default Navbar

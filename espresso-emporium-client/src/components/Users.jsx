/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiArrowLeft } from 'react-icons/fi';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = id => {
    fetch(`https://espresso-emporium-server-b8qbbbg9g-sumiya-islams-projects.vercel.app/user/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0) {
        console.log('deleted successfully');
        // remove the user from the UI
        const remainingUsers = users.filter(user => user._id !== id);
        setUsers(remainingUsers);
      }
    });
  }
  

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-8 md:p-12 lg:p-20 mx-auto">
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
        <h2 className="text-center mb-10 font-bold text-2xl font-display">Total User: {loadedUsers.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Created At</th>
                <th>Last Logged In</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th>1</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td>
                    <button
                      onClick={() => handleUserDelete(user._id)}
                      className="btn text-base"
                    >
                      <RiDeleteBin6Line></RiDeleteBin6Line>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Users;

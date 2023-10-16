import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import SignUp from './components/Signup.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    loader: () => fetch('https://espresso-emporium-server-r94cyccfq-sumiya-islams-projects.vercel.app/coffee')
  },
  {
    path: "/coffee/:id",
    element: <ViewCoffee></ViewCoffee>,
    loader: () => fetch('https://espresso-emporium-server-r94cyccfq-sumiya-islams-projects.vercel.app/coffee')
  },
  {
    path: "/addCoffee", 
    element: <AddCoffee></AddCoffee>
  }, 
  {
    path: '/updateCoffee/:id', 
    element: <UpdateCoffee></UpdateCoffee>, 
    loader: ({params}) => fetch(`https://espresso-emporium-server-r94cyccfq-sumiya-islams-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/signup", 
    element: <SignUp></SignUp>
  }, 
  {
    path: "/signin", 
    element: <SignIn></SignIn>
  },
  {
    path: "/users", 
    element: <Users></Users>,
    loader: () => fetch('https://espresso-emporium-server-r94cyccfq-sumiya-islams-projects.vercel.app/user')
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

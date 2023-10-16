import { AbortedDeferredError, Link, useLoaderData } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import CoffeeCard from './components/CoffeeCard';
import add from './assets/add.png'
import { useState } from 'react';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Instagram from './components/Instagram';
import About from './components/About';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <div className='px-8 md:px-12 lg:px-16 py-20'>
        <p className='text-center mb-1 text-sm'>--- Sip & Savor ---</p>
        <h1 className='text-2xl text-center text-[#331A15] drop-shadow-md mb-4 font-semibold font-display'>Our Popular Products</h1>
        <Link to='/addCoffee'>
          <div className='flex items-center mx-auto gap-2 mb-8 px-4 py-1 w-fit bg-[#E3B577] rounded-md border-2 border-[#331A15]'>
            <h2 className='font-display text-white font-medium text-base drop-shadow-md'>Add Coffee</h2>
            <img src={add} alt="" className='w-4'/>
          </div>
        </Link>
        <div className='grid md:grid-cols-2 gap-10'>
          {
              coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
              ></CoffeeCard>)
            }
        </div>
      </div>
      <Instagram></Instagram>
      <Footer></Footer>
    </div>
  )
}

export default App

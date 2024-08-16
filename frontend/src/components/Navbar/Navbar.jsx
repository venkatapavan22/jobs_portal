import React from 'react'
import img from '../../assets/briefcase.png'
import { Link } from 'react-router-dom'
import CustomButtons from './CustomButtons'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 mx-5 cursor-pointer'>
      <div className='flex items-center'>
        <img src={img} alt="logo" className='w-10 h-10' />
        <h1 className='text-[25px] p-2 font-semibold'> Jobify</h1>
      </div>
      <ul className='flex text-[20px] justify-between gap-5 font-semibold'>
        <Link to='/'>Home</Link>
        <li>Jobs</li>
        <li>Feautures</li>
      </ul>
      <CustomButtons/>
    </div> 
  )
}

export default Navbar

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate= useNavigate()
  return (
    <div className='text-center m-3'>
      <h1 className='text-[50px] font-semibold p-3'>Connect with top companies looking for talent like you.</h1>
       <p className='text-[25px] font-normal p-3'>quick guide to get you started on your job search journey</p>
       <div className='my-5'>
        <button className='bg-black text-white  p-4 w-40 rounded-full' onClick={()=> navigate('/jobs')}  >View Jobs</button>
       </div>
    </div>
  )
}

export default Home

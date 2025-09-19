import React from 'react'
import Navbar from '../components/navbar';
import ReportStatus from '../components/ReportStatus';

const Report = () => {
  return (
    <>
      <div className='flex'>
        <Navbar/>
<<<<<<< HEAD
        <div className=' w-[100px] h-[100vh]'></div>
        <div className=' bg-gray-100 h-max w-[100vw] mx-30'>
=======
        <div className=' w-[100px] h-[100vh] hidden md:block'></div>
        <div className=' bg-gray-100 h-max w-[100vw] mx-3'>
>>>>>>> 50b826c060e9cfa42c0f137689689c9c58a70495
        <ReportStatus/>
        </div>
      </div>
    </>
  )
}

export default Report

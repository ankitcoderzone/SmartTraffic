import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import TrafficUpdate from '../components/Dashboard/TrafficUpdate.jsx';

function Dashboard(){
    return (
        <>
            <div className='md:flex'>
                <Navbar/>
<<<<<<< HEAD
                <div className='w-[100px] h-[100vh]'></div>
                <div className='h-max w-[100vw] mx-30'>
=======
                <div className='w-[100vw] h-[10vh] md:w-[100px] md:h-[100vh]'></div>
                <div className='h-max w-[100vw]'>
>>>>>>> 50b826c060e9cfa42c0f137689689c9c58a70495
                    <TrafficUpdate/>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard;
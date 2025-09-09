import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import TrafficUpdate from '../components/TrafficUpdate.jsx';

function Dashboard(){
    return (
        <>
            <div className='flex'>
                <Navbar/>
                <div className='w-[100px] h-[100vh]'></div>
                <div className=' bg-blue-100 h-max w-[90vw]'>
                    <TrafficUpdate/>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard;
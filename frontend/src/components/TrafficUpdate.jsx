import React from 'react'
import CircularProgress from "../charts/progress";


const TrafficUpdate = () => {

const quant = [
    { name: "Average Speed", value: 30 , color: "#f4716aff",unit:"km/h"},
    { name: "Avg. Waiting Time", value: 10 ,color: "#56caeaff",unit:"min"},
    { name: "Avg. Turn around Time", value: 12 ,color:"#4CAF50" ,unit:"min"},
  ];
  return (
    <div className='flex'>
      <div>
        <div className="flex overflow-x-auto gap-5 h-[35vh] w-[40vw] m-8 p-6 custom-scrollbar">
        {quant.map((item) => (
            <div
            key={item.name}
            className="shadow-xl rounded-md p-6 pb-4 gap-4 bg-white min-w-[250px]"
            >
                <div className='flex'>
                    <div>
                        <h2 className="font-semibold text-[#1D3557] font-bold">{item.name}</h2>
                        <span className="text-sm text-gray-500 font-medium">{item.value} {item.unit}</span>
                    </div>
                    <div>
                        <CircularProgress value={item.value} color={item.color}/>       {/* Circular Progress */}
                    </div>
                </div>
                <div className="mt-5">
                    <div className="w-[90%] bg-gray-200 rounded-full h-2">
                    <div
                        className="h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ 
                        width: `${item.value}%`, 
                        backgroundColor: item.color,
                        boxShadow: `0 0 10px ${item.color}40`
                        }}
                    />  {/* Linear Progress */}
                    </div>
                </div>
            </div>
        ))}
        </div>
        <div>Traffic Report</div>
      </div>
      <div> Accident Report</div>
    </div>
  )
}

export default TrafficUpdate

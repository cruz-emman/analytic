import React from 'react'
import { BarGraphChart, PieGraphChart } from '../components'
import { piChart,usage,BarData } from '../dataSample'
piChart
const Home = () => {
  return (
    <div className='p-4 over w-full h-full '>
        <div className='flex flex-col items-center gap-5 justify-center  p-4'>
          <p className='text-2xl font-semibold text-gray-400'>Main Dashboard</p>
          <div className='flex w-full h-full flex-row items-center justify-evenly '>

            <div className='flex flex-col items-center gap-5 w-[600px] h-80 border-2 shadow-md rounded-lg px-4 py-2  bg-purple-200 '>
              <p>Demograhpic Students</p>
              <div className='h-full w-full'>
                <PieGraphChart data={piChart} />
              </div>
            </div>

            <div className='flex flex-col items-center gap-5 w-[600px] h-80 border-2 shadow-md rounded-lg px-4 py-2'>
              <p>Usage of Teacher</p>
              <div className='h-full w-full'>
                <BarGraphChart data={BarData} />
              </div>
            </div>
          </div>

          <div className='flex w-full flex-row items-center justify-evenly '>
            <div className='flex flex-col items-center gap-5 w-[600px] h-80 border-2 shadow-md rounded-lg px-4 py-2'>
              <p>Interaction</p>
              <div className='h-full w-full'>
                <BarGraphChart data={BarData} />
              </div>
            </div>
            
            <div className='flex flex-col items-center gap-5 w-[600px] h-80 border-2 shadow-md rounded-lg px-4 py-2'>
              <p>Enrollment</p>
              <div className='h-full w-full'>
                <BarGraphChart data={BarData} />
              </div>
            </div>
          </div>

          <div className='flex w-full flex-row items-center justify-evenly '>
            <div className='flex flex-col items-center gap-5 w-[600px] h-80 border-2 shadow-md rounded-lg px-4 py-2'>
              <p>Gadget</p>
              <div className='h-full w-full'>
                <PieGraphChart data={piChart} />
              </div>
            </div>

            <div className='flex flex-col items-center gap-5 w-[600px] h-80 border-2 shadow-md rounded-lg px-4 py-2'>
              <p>Gadget</p>
              <div className='h-full w-full'>
                <PieGraphChart data={piChart} />
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Home
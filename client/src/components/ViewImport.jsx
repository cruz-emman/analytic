import React from 'react'

const ViewImport = () => {
  return (
    <div className='w-full  flex items-center justify-start py-2 px-4'>
    <div className='flex w-full flex-col px-4 py-8 gap-2 border-2'>
        <p className='text-3xl text-gray-400 font-bold mb-2'>View Information</p>
            <button className='px-4 py-2 border-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white' 
            type="submit" value="Upload a file">View</button>
    </div>
   
</div>
    )
}

export default ViewImport
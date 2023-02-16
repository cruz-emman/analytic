import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { BarGraphChart, PieGraphChart } from '../components'
import {piChart, usage} from '../dataSample.jsx'
const ActivityOfStudents  = () => {
  return (
    <div className='w-full h-full p-4'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className='flex flex-col h-[400px]  w-full border-2  p-4 items-center  justify-center'>
              <p className='text-3xl font-bold text-gray-400 text-center pb-10'>Activity Of Students</p>
              <PieGraphChart data={piChart} />
          </div>

          <div className='w-full h-full '>
            <TableContainer component={Paper}>
              <Table>
                <TableHead >

                  {piChart.map((item) => (
                    <TableCell key={item.key} style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>{item.name}</TableCell>
                  ))}
                  
                </TableHead>
                <TableBody>
                {piChart.map((item) => (
                    <TableCell key={item.key}>{item.value}</TableCell>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
    </div>
  )
}

export default ActivityOfStudents 
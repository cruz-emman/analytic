import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { PieGraphChart } from '../components'
import { piChart } from '../dataSample'

const Demographic = () => {

  return (
    <div className='w-full h-full p-4'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className='h-96 w-full border-2  p-4 items-center justify-center'>
              <p className='text-3xl font-bold text-gray-400 text-center '>Demographic Profile Of The Students</p>
              <PieGraphChart data={piChart} />
          </div>

          <div className='w-full h-full'>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>College</TableCell>
                    <TableCell>1st Year</TableCell>
                    <TableCell>2nd Year</TableCell>
                    <TableCell>3rd Year</TableCell>
                    <TableCell>4th Year</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>68%</TableCell>
                    <TableCell>75%</TableCell>
                    <TableCell>14%</TableCell>
                    <TableCell>41%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
    </div>
  )
}

export default Demographic
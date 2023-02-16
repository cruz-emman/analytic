import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { BarGraphChart, PieGraphChart } from '../../components'
import {GadgetPieChart, usage} from '../../dataSample.jsx'
const Gadget  = () => {
  return (
    <div className='w-full h-full p-4'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className='flex flex-col h-[600px] w-full border-2  p-4 items-center  justify-center'>
              <p className='text-3xl font-bold text-gray-400 text-center pb-10'>Gadget</p>
              <PieGraphChart data={GadgetPieChart} />
          </div>

          <div className='w-full h-full '>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                <TableRow>
                  {GadgetPieChart.map((item) => (
                      <TableCell style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>{item.name}</TableCell>
                  ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                  {GadgetPieChart.map((item) => (
                      <TableCell style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>{item.value}</TableCell>
                  ))}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
    </div>
  )
}

export default Gadget 
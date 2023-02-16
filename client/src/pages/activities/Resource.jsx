import React, {useEffect, useState} from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import BarGraphUsageTeachers from '../../components/BarGraphUsageTeachers'
import { UsageOfTLC } from '../../dataSample'
import axios from 'axios'
const Resource = () => {

    const [data, setData] = useState([])
    const [cases, setCases] = useState([])
    const [cbma, setCbma] = useState([])
    const [chtm, setChtm] = useState([])
    const [ceis, setCeis] = useState([])
    const [cmt, setCmt] = useState([])
    const [jhs, setJhs] = useState([])
    const [slcn, setSlcn] = useState([])
    const [cahs, setCahs] = useState([])

    
    useEffect(() =>{
      const getAssign = async () =>{
       try {
        const getcase = await axios.get('http://localhost:5000/api/v1/case/get_resource') 
        const getcbma = await axios.get('http://localhost:5000/api/v1/cbma/get_resource') 
        const getchtm = await axios.get('http://localhost:5000/api/v1/chtm/get_resource') 
        const getceis = await axios.get('http://localhost:5000/api/v1/ceis/get_resource') 
        const getcmt = await axios.get('http://localhost:5000/api/v1/cmt/get_resource') 
        const getjhs = await axios.get('http://localhost:5000/api/v1/jhs/get_resource') 
        const getslcn = await axios.get('http://localhost:5000/api/v1/slcn/get_resource') 
        const getcahs = await axios.get('http://localhost:5000/api/v1/cahs/get_choice') 

       
        const CombinedValue = [
          {
            name: 'CASES',
            value: getcase.data[0]
          },
          {
            name: 'CBMA',
            value: getcbma.data[0]
          },
          {
            name: 'CHTM',
            value: getchtm.data[0]
          },
          {
            name: 'CEIS',
            value: getceis.data[0]
          },
          {
            name: 'CMT',
            value: getcmt.data[0]
          },
          {
            name: 'JHS',
            value: getjhs.data[0]
          },
          {
            name: 'SLCN',
            value: getslcn.data[0]
          },
          {
            name: 'CAHS',
            value: getcahs.data[0]
          }
        ];

        setData(CombinedValue)
        console.log(CombinedValue)
        
       } catch (error) {
        console.log(error)
       }

      }
      getAssign()
    },[setCases,setCbma,setChtm ,setCeis,setCmt,setJhs,setSlcn])

  return (
    <div className='w-full h-full p-4'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className='flex flex-col h-[600px] w-full border-2  p-4 items-center  justify-center'>
              <p className='text-3xl font-bold text-gray-400 text-center pb-10'>Usage TLC Teachers  (Resource)</p>
              <BarGraphUsageTeachers data={data} />
          </div>

          <div className='w-full h-full '>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                  {data.map((item) => (
                      <TableCell key={item.name} style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>{item.name}</TableCell>
                  ))}
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                  {data.map((item) => (
                      <TableCell key={item.name}>{item.value}</TableCell>
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

export default Resource
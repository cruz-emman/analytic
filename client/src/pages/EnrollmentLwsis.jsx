import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { BarGraphChart } from '../components'
import {Enrollment, usage} from '../dataSample.jsx'

const EnrollmentLwsis  = () => {
  const [data, setData] = useState([])
  const [cases, setCases] = useState([])
  const [cbma, setCbma] = useState([])
  const [chtm, setChtm] = useState([])
  const [ceis, setCeis] = useState([])
  const [cmt, setCmt] = useState([])
  const [jhs, setJhs] = useState([])
  const [slcn, setSlcn] = useState([])
  const [cahs, setCahs] = useState([])
  const [notEnrolled, setnotEnrolled] = useState([])
  const [getFullEnrolled, setGetEnrolled] = useState()


  console.log(data)
  useEffect(() =>{
    const getAssign = async () =>{
     try {

      const getcase = await axios.get('http://localhost:5000/api/v1/students/get_total_CASE') 
      const getcbma = await axios.get('http://localhost:5000/api/v1/students/get_total_CBMA') 
      const getchtm = await axios.get('http://localhost:5000/api/v1/students/get_total_CHTM') 
      const getceis = await axios.get('http://localhost:5000/api/v1/students/get_total_CEIS') 
      const getcmt = await axios.get('http://localhost:5000/api/v1/students/get_total_CMT') 
      const getjhs = await axios.get('http://localhost:5000/api/v1/students/get_total_JHS') 
      const getslcn = await axios.get('http://localhost:5000/api/v1/students/get_total_SLCN') 
      const getcahs = await axios.get('http://localhost:5000/api/v1/students/get_total_CAHS') 
      const getnotenrolled = await axios.get('http://localhost:5000/api/v1/students/get_total_NULL') 
      
      setnotEnrolled(getnotenrolled.data)
     
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
        },
        {
          name: 'NOT ENROLLED',
          value: getnotenrolled.data[0]
        }
      ];

      
      const jhs_getAllData = ([getcase.data[0], getcbma.data[0], getchtm.data[0], 
        getceis.data[0], getcmt.data[0], getjhs.data[0], getslcn.data[0], getcahs.data[0]])

  
      const jhs_RESULT = jhs_getAllData.reduce((total, currentValue) => total + currentValue, 0);

      setGetEnrolled(jhs_RESULT)


      
      setData(CombinedValue)
      
     } catch (error) {
      console.log(error)
     }

    }
    getAssign()
  },[setCases,setCbma,setChtm ,setCeis,setCmt,setJhs,setSlcn,setCahs,setnotEnrolled ])


  return (
    <div className='w-full h-full p-4'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className='flex flex-col h-[600px] w-full border-2  p-4 items-center justify-center'>
              <p className='text-3xl font-bold text-gray-400 text-center pb-10'>Enrollement Lwsis</p>
              <BarGraphChart data={data} />
          </div>
          <div className='flex items-row w-full justify-evenly'>
            <div className='flex items-center justify-center gap-2'>
              <p className='text-3xl font-semibold text-gray-400'>Enrolled:</p>
              <p className='text-3xl font-semibold text-green-600'>{getFullEnrolled}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <p className='text-3xl font-semibold text-gray-400'>Not Enrolled:</p>
              <p className='text-3xl font-semibold text-red-400'>{notEnrolled}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EnrollmentLwsis 
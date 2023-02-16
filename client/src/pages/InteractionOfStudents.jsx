import React,{useState, useEffect} from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { BarGraphChart } from '../components'
import axios from 'axios'
import BarGraphUsageStudents from '../components/BarGraphUsageStudents'
import { UsageOfTLC } from '../dataSample'
const InteractionOfStudents  = () => {


  const [data, setData] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() =>{
    const getSemesters = async () =>{
      try {
        const res = await axios.get('http://localhost:5000/api/v1/getAllCoursesCounts')
        console.log(res.data)
        setData(res.data)
        setLoading(false)
      } catch (error) {
        
      }
    }
    getSemesters()
  },[])

  return (
    <div className='w-full h-full p-4'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className='flex flex-col h-[600px] w-full border-2  p-4 items-center  justify-center'>
              <p className='text-3xl font-bold text-gray-400 text-center pb-10'>Interaction Of Students</p>
              <BarGraphUsageStudents data={UsageOfTLC} />
          </div>

          <div className='w-full h-full '>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                  {UsageOfTLC.map((item) => (
                      <TableCell key={item.name} style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>{item.name}</TableCell>
                  ))}
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                  {UsageOfTLC.map((item) => (
                      <TableCell key={item.name}>{item.students}</TableCell>
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

export default InteractionOfStudents 
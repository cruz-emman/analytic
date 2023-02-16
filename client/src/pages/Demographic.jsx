import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { PieGraphChart } from '../components'
import { piChart } from '../dataSample'
import axios from 'axios'
const Demographic = () => {

  const [data, setGetData] = useState([])
  const [getFirstYear, setGetFirstYear] = useState([])
  const [getSecondYear, setGetSecondYear] = useState([])
  const [getThirdYear, setGetThirdYear] = useState([])
  const [getFourthYear, setGetFourthYear] = useState([])
  const [getPreviousYear, setGetPreviousYear] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    const getUsers = async () =>{

      try {
        const getFirst = await axios.get('http://localhost:5000/api/v1/getFirstYear')
        setGetFirstYear(getFirst.data)
        
        const getSecond = await axios.get('http://localhost:5000/api/v1/getSecondYear')
        setGetSecondYear(getSecond.data)
  
        const getThird = await axios.get('http://localhost:5000/api/v1/getThirdYear')
        setGetThirdYear(getThird.data)
  
        const getFourth = await axios.get('http://localhost:5000/api/v1/getFourthYear')
        setGetFourthYear(getFourth.data)
  
        const getPrevious = await axios.get('http://localhost:5000/api/v1/getPreviousYear')
        setGetPreviousYear(getPrevious.data)
  
        
      const combinedData = [
        ...getFirst.data,
        ...getSecond.data,
        ...getThird.data,
        ...getFourth.data,
        ...getPrevious.data
      ];
  
      
      const dataWithId = combinedData.map((value, index) => ({
        id: index + 1,
        value,
      }));
        setGetData(dataWithId);
        setLoading(false)
      } catch (error) {
        console.log(error)
      }

    }
    getUsers()
  },[setGetFirstYear, setGetSecondYear, setGetThirdYear, setGetFourthYear , setGetPreviousYear])


  return (
    <div className='w-full h-full p-4'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className='h-96 w-full border-2  p-4 items-center justify-center'>
              <p className='text-3xl font-bold text-gray-400 text-center '>Demographic Profile Of The Students</p>
              <PieGraphChart data={data} />
          </div>

          <div className='w-full h-full'>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>1st Year</TableCell>
                    <TableCell style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>2nd Year</TableCell>
                    <TableCell style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>3rd Year</TableCell>
                    <TableCell style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>4th Year</TableCell>
                    <TableCell style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>Previous Year</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{getFirstYear}</TableCell>
                    <TableCell>{getSecondYear}</TableCell>
                    <TableCell>{getThirdYear}</TableCell>
                    <TableCell>{getFourthYear}</TableCell>
                    <TableCell>{getPreviousYear}</TableCell>
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
import React, {useState, useEffect} from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import BarGraphUsageTeachers from '../components/BarGraphUsageTeachers'
import { UsageOfTLC } from '../dataSample'
import axios from 'axios'
const UsageTLCTeachers = () => {
  const [data1, setData1] = useState([])
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

      //CASE USAGE!
      const getcase1 = await axios.get('http://localhost:5000/api/v1/case/get_assign')
      const getcase2 = await axios.get('http://localhost:5000/api/v1/case/get_book')
      const getcase3 = await axios.get('http://localhost:5000/api/v1/case/get_chat')
      const getcase4 = await axios.get('http://localhost:5000/api/v1/case/get_choice')
      const getcase5 = await axios.get('http://localhost:5000/api/v1/case/get_forum')
      const getcase6 = await axios.get('http://localhost:5000/api/v1/case/get_label')
      const getcase7 = await axios.get('http://localhost:5000/api/v1/case/get_page')
      const getcase8 = await axios.get('http://localhost:5000/api/v1/case/get_resource')
      const getcase9 = await axios.get('http://localhost:5000/api/v1/case/get_url')

      const case_getAllData = ([getcase1.data[0], getcase2.data[0], getcase3.data[0], 
        getcase4.data[0], getcase5.data[0], getcase6.data[0], getcase7.data[0], getcase8.data[0], getcase9.data[0]])
  
      const case_RESULT = case_getAllData.reduce((total, currentValue) => total + currentValue, 0);

      //CBMA USAGE!
      const getcbma1 = await axios.get('http://localhost:5000/api/v1/cbma/get_assign')
      const getcbma2 = await axios.get('http://localhost:5000/api/v1/cbma/get_book')
      const getcbma3 = await axios.get('http://localhost:5000/api/v1/cbma/get_chat')
      const getcbma4 = await axios.get('http://localhost:5000/api/v1/cbma/get_choice')
      const getcbma5 = await axios.get('http://localhost:5000/api/v1/cbma/get_forum')
      const getcbma6 = await axios.get('http://localhost:5000/api/v1/cbma/get_label')
      const getcbma7 = await axios.get('http://localhost:5000/api/v1/cbma/get_page')
      const getcbma8 = await axios.get('http://localhost:5000/api/v1/cbma/get_resource')
      const getcbma9 = await axios.get('http://localhost:5000/api/v1/cbma/get_url')

      const cbma_getAllData = ([getcbma1.data[0], getcbma2.data[0], getcbma3.data[0], 
        getcbma4.data[0], getcbma5.data[0], getcbma6.data[0], getcbma7.data[0], getcbma8.data[0], getcbma9.data[0]])
  
      const cbma_RESULT = cbma_getAllData.reduce((total, currentValue) => total + currentValue, 0);


      //CHTM USAGE!
      const getchtm1 = await axios.get('http://localhost:5000/api/v1/chtm/get_assign')
      const getchtm2 = await axios.get('http://localhost:5000/api/v1/chtm/get_book')
      const getchtm3 = await axios.get('http://localhost:5000/api/v1/chtm/get_chat')
      const getchtm4 = await axios.get('http://localhost:5000/api/v1/chtm/get_choice')
      const getchtm5 = await axios.get('http://localhost:5000/api/v1/chtm/get_forum')
      const getchtm6 = await axios.get('http://localhost:5000/api/v1/chtm/get_label')
      const getchtm7 = await axios.get('http://localhost:5000/api/v1/chtm/get_page')
      const getchtm8 = await axios.get('http://localhost:5000/api/v1/chtm/get_resource')
      const getchtm9 = await axios.get('http://localhost:5000/api/v1/chtm/get_url')

      const chtm_getAllData = ([getchtm1.data[0], getchtm2.data[0], getchtm3.data[0], 
        getchtm4.data[0], getchtm5.data[0], getchtm6.data[0], getchtm7.data[0], getchtm8.data[0], getchtm9.data[0]])
  
      const chtm_RESULT = chtm_getAllData.reduce((total, currentValue) => total + currentValue, 0);


      //CEIS USAGE!
      const getceis1 = await axios.get('http://localhost:5000/api/v1/ceis/get_assign')
      const getceis2 = await axios.get('http://localhost:5000/api/v1/ceis/get_book')
      const getceis3 = await axios.get('http://localhost:5000/api/v1/ceis/get_chat')
      const getceis4 = await axios.get('http://localhost:5000/api/v1/ceis/get_choice')
      const getceis5 = await axios.get('http://localhost:5000/api/v1/ceis/get_forum')
      const getceis6 = await axios.get('http://localhost:5000/api/v1/ceis/get_label')
      const getceis7 = await axios.get('http://localhost:5000/api/v1/ceis/get_page')
      const getceis8 = await axios.get('http://localhost:5000/api/v1/ceis/get_resource')
      const getceis9 = await axios.get('http://localhost:5000/api/v1/ceis/get_url')

      const ceis_getAllData = ([getceis1.data[0], getceis2.data[0], getceis3.data[0], 
        getceis4.data[0], getceis5.data[0], getceis6.data[0], getceis7.data[0], getceis8.data[0], getceis9.data[0]])
  
      const ceis_RESULT = ceis_getAllData.reduce((total, currentValue) => total + currentValue, 0);


      //CMT USAGE!
      const getcmt1 = await axios.get('http://localhost:5000/api/v1/cmt/get_assign')
      const getcmt2 = await axios.get('http://localhost:5000/api/v1/cmt/get_book')
      const getcmt3 = await axios.get('http://localhost:5000/api/v1/cmt/get_chat')
      const getcmt4 = await axios.get('http://localhost:5000/api/v1/cmt/get_choice')
      const getcmt5 = await axios.get('http://localhost:5000/api/v1/cmt/get_forum')
      const getcmt6 = await axios.get('http://localhost:5000/api/v1/cmt/get_label')
      const getcmt7 = await axios.get('http://localhost:5000/api/v1/cmt/get_page')
      const getcmt8 = await axios.get('http://localhost:5000/api/v1/cmt/get_resource')
      const getcmt9 = await axios.get('http://localhost:5000/api/v1/cmt/get_url')

      const cmt_getAllData = ([getcmt1.data[0], getcmt2.data[0], getcmt3.data[0], 
        getcmt4.data[0], getcmt5.data[0], getcmt6.data[0], getcmt7.data[0], getcmt8.data[0], getcmt9.data[0]])
  
      const cmt_RESULT = cmt_getAllData.reduce((total, currentValue) => total + currentValue, 0);

      
      //JHS USAGE!
      const getjhs1 = await axios.get('http://localhost:5000/api/v1/jhs/get_assign')
      const getjhs2 = await axios.get('http://localhost:5000/api/v1/jhs/get_book')
      const getjhs3 = await axios.get('http://localhost:5000/api/v1/jhs/get_chat')
      const getjhs4 = await axios.get('http://localhost:5000/api/v1/jhs/get_choice')
      const getjhs5 = await axios.get('http://localhost:5000/api/v1/jhs/get_forum')
      const getjhs6 = await axios.get('http://localhost:5000/api/v1/jhs/get_label')
      const getjhs7 = await axios.get('http://localhost:5000/api/v1/jhs/get_page')
      const getjhs8 = await axios.get('http://localhost:5000/api/v1/jhs/get_resource')
      const getjhs9 = await axios.get('http://localhost:5000/api/v1/jhs/get_url')

      const jhs_getAllData = ([getjhs1.data[0], getjhs2.data[0], getjhs3.data[0], 
        getjhs4.data[0], getjhs5.data[0], getjhs6.data[0], getjhs7.data[0], getjhs8.data[0], getjhs9.data[0]])
  
      const jhs_RESULT = jhs_getAllData.reduce((total, currentValue) => total + currentValue, 0);


      //CMT USAGE!
      const getslcn1 = await axios.get('http://localhost:5000/api/v1/slcn/get_assign')
      const getslcn2 = await axios.get('http://localhost:5000/api/v1/slcn/get_book')
      const getslcn3 = await axios.get('http://localhost:5000/api/v1/slcn/get_chat')
      const getslcn4 = await axios.get('http://localhost:5000/api/v1/slcn/get_choice')
      const getslcn5 = await axios.get('http://localhost:5000/api/v1/slcn/get_forum')
      const getslcn6 = await axios.get('http://localhost:5000/api/v1/slcn/get_label')
      const getslcn7 = await axios.get('http://localhost:5000/api/v1/slcn/get_page')
      const getslcn8 = await axios.get('http://localhost:5000/api/v1/slcn/get_resource')
      const getslcn9 = await axios.get('http://localhost:5000/api/v1/slcn/get_url')

      const slcn_getAllData = ([getslcn1.data[0], getslcn2.data[0], getslcn3.data[0], 
        getslcn4.data[0], getslcn5.data[0], getslcn6.data[0], getslcn7.data[0], getslcn8.data[0], getslcn9.data[0]])
  
      const slcn_RESULT = slcn_getAllData.reduce((total, currentValue) => total + currentValue, 0);


      //cahs USAGE!
      const getcahs1 = await axios.get('http://localhost:5000/api/v1/cahs/get_assign')
      const getcahs2 = await axios.get('http://localhost:5000/api/v1/cahs/get_book')
      const getcahs3 = await axios.get('http://localhost:5000/api/v1/cahs/get_chat')
      const getcahs4 = await axios.get('http://localhost:5000/api/v1/cahs/get_choice')
      const getcahs5 = await axios.get('http://localhost:5000/api/v1/cahs/get_forum')
      const getcahs6 = await axios.get('http://localhost:5000/api/v1/cahs/get_label')
      const getcahs7 = await axios.get('http://localhost:5000/api/v1/cahs/get_page')
      const getcahs8 = await axios.get('http://localhost:5000/api/v1/cahs/get_resource')
      const getcahs9 = await axios.get('http://localhost:5000/api/v1/cahs/get_url')

      const cahs_getAllData = ([getcahs1.data[0], getcahs2.data[0], getcahs3.data[0], 
        getcahs4.data[0], getcahs5.data[0], getcahs6.data[0], getcahs7.data[0], getcahs8.data[0], getcahs9.data[0]])
  
      const cahs_RESULT = cahs_getAllData.reduce((total, currentValue) => total + currentValue, 0);

      const CombinedValue = [
        {
          name: 'CASES',
          value: case_RESULT
        },
        {
          name: 'CBMA',
          value: cbma_RESULT
        },
        {
          name: 'CHTM',
          value: chtm_RESULT
        },
        {
          name: 'CEIS',
          value: ceis_RESULT
        },
        {
          name: 'CMT',
          value: cmt_RESULT
        },
        {
          name: 'JHS',
          value: jhs_RESULT
        },
        {
          name: 'SLCN',
          value: slcn_RESULT
        },
        {
          name: 'CAHS',
          value: cahs_RESULT
        }
      ];

      

      setData1(CombinedValue)
      
    } catch (error) {
      console.log(error)
    }

    }
    getAssign()
  },[setCases,setCbma,setChtm ,setCeis,setCmt,setJhs,setSlcn,setData1])
  
  return (
    <div className='w-full h-full p-4'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className='flex flex-col h-[600px] w-full border-2  p-4 items-center  justify-center'>
              <p className='text-3xl font-bold text-gray-400 text-center pb-10'>Usage Of TLC Teachers</p>
              <BarGraphUsageTeachers data={data1} />
          </div>

          <div className='w-full h-full '>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                  {data1.map((item) => (
                      <TableCell key={item.name} style={{fontWeight:700, fontSize: '16px', color: 'gray'}}>{item.name}</TableCell>
                  ))}
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                  {data1.map((item) => (
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

export default UsageTLCTeachers
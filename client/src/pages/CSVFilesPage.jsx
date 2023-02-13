import React, {useEffect, useState} from 'react'
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';

import axios from 'axios'
import { toast } from 'react-toastify'

const CSVFilesPage = () => {

    const [loading,setLoading] = useState(true)
    const [data, setData] = useState([])


    //Adding CSV

    const [csvFile, setCsvFile] = useState()
    const [buttonLoading, setButtonLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        setButtonLoading(true);
        formData.append('file', csvFile);
        try {
            await axios.post('http://localhost:5000/api/v1/upload',formData)
            toast.success("CSV Upload Success!")
            setButtonLoading(false);

        } catch (error) {
            console.log(error)
            toast.error("CSV file already existing!")
            setButtonLoading(false);

        }
    }

    const handleDelete = async (e) =>{
        console.log(e)
        try {
            await axios.get("http://localhost:5000/api/v1/singleTable",e)
        } catch (error) {
            
        }
    }

    useEffect(() =>{
        const getAllExistingTables = async () =>{
            try {
                const res = await axios.get('http://localhost:5000/api/v1/getAllTables')
                setData(res.data)
                setCsvFile(null)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getAllExistingTables()
    },[setData])


  return (
    <div className='w-full h-full p-4'>
        <div className='flex flex-col gap-5 items-center justify-center '>
            <p className='text-3xl font-bold text-gray-400 py-5'>List Of Uploaded CSV Files</p>
            <div className='w-full h-full flex items-center justify-between p-4'>
                <form className='flex w-full justify-evenly' action="" onSubmit={handleSubmit} encType='multipart/form-data'>
                <input className='px-4 py-2 border-2 rounded-lg w-4/12' type="file" onChange={(e) => setCsvFile(e.target.files[0])}  name="myFile" />
                <LoadingButton 
                    loading={buttonLoading}
                    variant="outlined" 
                    color="success" 
                    type="submit" 
                    value="Upload a file">Upload CSV</LoadingButton>
            </form>
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell  style={{fontWeight: 'bold', fontSize: '12px', color: "gray"}} >#</TableCell>
                            <TableCell  style={{fontWeight: 'bold', fontSize: '12px', color: "gray"}} align='right'> Name</TableCell>
                            <TableCell  style={{fontWeight: 'bold', fontSize: '12px', color: "gray"}} align='right'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell align='right' style={{fontWeight:700}}>{item.name}.csv</TableCell>
                            <TableCell align='right'>
                                <div className='flex flex-row justify-end gap-5 items-center'>
                                    <Button variant='contained'>Update</Button>
                                    <Button onClick={(e) => handleDelete(item.id)} color="error" variant='contained'>Delete</Button>
                                </div>
                                
                            </TableCell>
                        </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
  )
}

export default CSVFilesPage
import React, {useEffect, useState} from 'react'
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import LoadingButton from '@mui/lab/LoadingButton';
import {useNavigate} from 'react-router-dom'

import axios from 'axios'
import { toast } from 'react-toastify'

const CSVFilesPage = () => {

    const navigate = useNavigate()
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
            navigate(0)

        } catch (error) {
            console.log(error)
            toast.error("CSV file already existing!")
            setButtonLoading(false);
        }
    }

    useEffect(() =>{
        const getAllExistingTables = async () =>{
            try {
                const res = await axios.get('http://localhost:5000/api/v1/getAllTables')
                console.log(res.data)
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
            
            
            <div className='flex flex-col gap-2 items-center justify-center w-full'>
            <p className='text-3xl font-semibold text-gray-900'>CSV files in Database</p>
            <p className='text-lg font-semibold text-red-600'>please check before database </p>
            </div>

            <div className='h-[600px] w-full p-4'>
                <DataGrid
                    className='p-4 rounded-lg shadow-2xl'
                    {...data}
                    rows={loading ? [] : data}
                    getRowId={(row) => row.id}
                    columns={[
                        {field: 'id', headerName: "#"},
                        {field: 'name', headerName: "CSV File", width: 600}
                    ]}
                    pageSize={9}
                    rowsPerPageOptions={[5]}
                    components={{ Toolbar: GridToolbar }}
                    componentsProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                    }}
                />
            </div>
            
          
        </div>
    </div>
  )
}

export default CSVFilesPage
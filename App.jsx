import React, {useState} from 'react'
import axios from 'axios'
const App = () => {

    const [data, setData] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', data);
        try {
            await axios.post('http://localhost:3000/upload',formData)
            console.log("Successfully uploaded")
        } catch (error) {
            console.log("Error", {message:error})
        }
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} encType='multipart/form-data'>
            <input type="file" onChange={(e) => setData(e.target.files[0])}  name="myFile" />
            <input type="submit" value="Upload a file"/>
        </form>
    </div>
  )
}

export default App
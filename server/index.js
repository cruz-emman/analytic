import express from 'express';
import cors from 'cors';
import fs from 'fs';
import multer from 'multer'
import csvRoute from './routes/csv.js'

const PORT = 5000

const app = express();


app.use(cors());
app.use(express.json());



app.get('/', (req, res) =>{
    res.send("Hellop")
})

app.use('/api/v1', csvRoute)



app.listen(PORT, () =>{
    console.log(`listening on port: http://localhost:${PORT}`)
})
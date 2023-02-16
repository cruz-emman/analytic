import express from 'express';
import cors from 'cors';
import fs from 'fs';
import multer from 'multer'
import csvRoute from './routes/csv.js'
import caseRoute from './routes/case.js'
import ceisRoute from './routes/ceis.js'
import chtmRoute from './routes/chtm.js'
import cbmaRoute from './routes/cbma.js'
import jhsRoute from './routes/jhs.js'
import slcnRoute from './routes/slcn.js'
import cmtRoute from './routes/cmt.js'
import cahsRoute from './routes/cahs.js'
import studentRoute from './routes/students.js'

const PORT = 5000

const app = express();


app.use(cors());
app.use(express.json());



app.get('/', (req, res) =>{
    res.send("Hellop")
})

app.use('/api/v1', csvRoute)
app.use('/api/v1/case',caseRoute) 
app.use('/api/v1/chtm',chtmRoute) 
app.use('/api/v1/ceis',ceisRoute) 
app.use('/api/v1/cbma',cbmaRoute) 
app.use('/api/v1/jhs',jhsRoute) 
app.use('/api/v1/slcn',slcnRoute) 
app.use('/api/v1/cmt',cmtRoute) 
app.use('/api/v1/cahs',cahsRoute) 
app.use('/api/v1/students',studentRoute)



app.listen(PORT, () =>{
    console.log(`listening on port: http://localhost:${PORT}`)
})
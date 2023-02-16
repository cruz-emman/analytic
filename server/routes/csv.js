import express from 'express';
import {addCsv, getData} from '../controllers/upload.js'
import multer from 'multer';

import { getAllCoursesCounts, getAllPhonesUsage } from '../controllers/excel.js';
import { DeleteExistingTable, GetAllExistingTables, GetSingleTable } from '../controllers/tables.js';
import { getFirstYearStudents, getFourthYearStudents, getPreviousYearStudents, getSecondYearStudents, getThirdYearStudents } from '../controllers/demographicStudents.js';

const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './upload');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), addCsv)
router.get('/getData',getAllPhonesUsage )


//GET ALL TABLES
router.get('/getAllTables', GetAllExistingTables)

//GET SINGLE TABLES
router.get('/singleTable/:id', GetSingleTable)

//DELETE SINGLE TABLE
router.delete('/deleteTable/:id ', DeleteExistingTable)

//CONST GET BY YEAR
router.get('/getFirstYear', getFirstYearStudents)
router.get('/getSecondYear', getSecondYearStudents)
router.get('/getThirdYear', getThirdYearStudents)
router.get('/getFourthYear', getFourthYearStudents)
router.get('/getPreviousYear', getPreviousYearStudents)

//GET COURSES
router.get('/getAllCoursesCounts', getAllCoursesCounts)

export default router;

import express from 'express';
import {addCsv, getData} from '../controllers/upload.js'
import multer from 'multer';
import { getAllPhonesUsage } from '../controllers/excel.js';
import { DeleteExistingTable, GetAllExistingTables, GetSingleTable } from '../controllers/tables.js';

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

export default router;

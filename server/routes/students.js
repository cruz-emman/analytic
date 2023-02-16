import express from 'express';
import { CAHS, CASE, CBMA, CEIS, CHTM, JHS, NOT_ENROLLED, SLCN } from '../controllers/students.js';
const router = express.Router()

router.get('/get_total_CASE', CASE)
router.get('/get_total_CAHS', CAHS)
router.get('/get_total_CBMA', CBMA)
router.get('/get_total_CEIS', CEIS)
router.get('/get_total_CHTM', CHTM)
router.get('/get_total_CMT', CHTM)
router.get('/get_total_JHS', JHS)
router.get('/get_total_SLCN', SLCN)
router.get('/get_total_NULL', NOT_ENROLLED)

export default router;

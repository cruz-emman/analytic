import { connection } from "../db/db.js";


export const CASE = async (req,res) =>{

    const q = "SELECT COUNT(*) FROM mdl_enrolled WHERE course = 'CASE'"
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
    
}
export const CAHS = async (req,res) =>{

    const q = "SELECT COUNT(*) FROM mdl_enrolled WHERE course = 'CAHS'"
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
    
}
export const CBMA = async (req,res) =>{

    const q = "SELECT COUNT(*) FROM mdl_enrolled WHERE course = 'CBMA'"
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
    
}
export const CEIS = async (req,res) =>{

    const q = "SELECT COUNT(*) FROM mdl_enrolled WHERE course = 'CEIS'"
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
    
}
export const CHTM = async (req,res) =>{

    const q = "SELECT COUNT(*) FROM mdl_enrolled WHERE course = 'CHTM'"
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
    
}
export const JHS = async (req,res) =>{

    const q = "SELECT COUNT(*) FROM mdl_enrolled WHERE course = 'THS'"
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
    
}

export const SLCN = async (req,res) =>{

    const q = "SELECT COUNT(*) FROM mdl_enrolled WHERE course = 'SLCN'"
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }  
}

export const NOT_ENROLLED = async (req,res) =>{

    const q = "SELECT COUNT(*) FROM mdl_enrolled WHERE course IS NULL OR course = ''"
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }  
}
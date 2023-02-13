import { connection } from "../db/db.js";


export const GetAllExistingTables = async (req,res) =>{
    const q = "SHOW TABLES"

    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row, index) => {
            return {
              id: index + 1,
              name: Object.values(row)[0],
            }});
        
        res.status(200).json(tables)
    } catch (error) {
        console.log(tables)
    }
}

export const DeleteExistingTable = async (req, res) =>{
    const tableId = parseInt(req.params.id)
    const q = "SHOW TABLES"

    try {
        const [rows, fields]  = await connection.execute(q)
        const tables = rows.map((row, index) => {
            return {
                id: index + 1,
                name: Object.values(row)[0],
            }});
        const getSingleTable = tables.find((t) => t.id === tableId)
        const tableQuery  = `DROP TABLE ${getSingleTable.name}`
        const [tableData] = await connection.execute(tableQuery)
        res.status(200).json(tableData)

    } catch (error) {
        console.log(error)
    }
}



export const GetSingleTable = async (req,res) =>{
    const tableId = parseInt(req.params.id)
    const q = "SHOW TABLES"

    try {
        const [rows, fields]  = await connection.execute(q)
        const tables = rows.map((row, index) => {
            return {
              id: index + 1,
              name: Object.values(row)[0],
            }});
        const getSingleTable = tables.find((t) => t.id === tableId)
        const tableQuery  = `SELECT * FROM ${getSingleTable.name}`


        const [tableData] = await connection.execute(tableQuery)
        res.status(200).json(tableData)
    } catch (error) {
        console.log(error)
    }
}
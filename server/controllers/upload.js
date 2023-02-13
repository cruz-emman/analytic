import {connection} from '../db/db.js'
import mysql from 'mysql2/promise'
import fs from 'fs'
import csv from 'csv-parser'
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './upload');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

export const addCsv = (upload.single("file"), async (req,res) =>{
    const file = req.file

    try {
        if(!file){
            res.status(400).json("File not uploaded")
            return;
        }

        const rows = [];
        fs.createReadStream(file.path)
            .pipe(csv())
            .on("data", data =>{
                rows.push(data)
            })
            .on("end", async () =>{
                //Connect to the database
                const con = await connection
                const columns = Object.keys(rows[0]).map(column => `\`${column}\` VARCHAR(255)`)
                //Grab the data, and then seperate it with coma for extensions, example user imported a file name named  "user.csv". the tableName will split between the "." and grab the first name
                const tableName = `${file.originalname.split('.')[0]}`
                const createTable = `CREATE TABLE \`${tableName}\` (${columns.join(",")}) `
                await con.query(createTable)
                //Insert the data into table

                const insertDataSql = `INSERT INTO \`${tableName}\` (${Object.keys(rows[0]).map(column => `\`${column}\``).join(", ")}) VALUES ?`;
                const data = rows.map(row => Object.values(row))
                await con.query(insertDataSql, [data]);
                res.send(`Table "${tableName}" created and data inserted successfully.`);

            })

    } catch (error) {
        console.log("Error", error.response.status, error.response.data);
    }
})

export const getData = async (req,res) =>{
    res.send("Hello")
}
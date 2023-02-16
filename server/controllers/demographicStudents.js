import { connection } from "../db/db.js";

export const getFirstYearStudents = async (req,res) =>{
    const q = 
        `
        SELECT COUNT(*) FROM (
        SELECT id, username, firstname, lastname, email 
        FROM mdl_user 
        WHERE username REGEXP '^2022[0-9]+'
        ) AS count_query`

    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

export const getSecondYearStudents = async (req,res) =>{
    const q = 
        `
        SELECT COUNT(*) FROM (
        SELECT id, username, firstname, lastname, email 
        FROM mdl_user 
        WHERE username REGEXP '^2021[0-9]+'
        ) AS count_query`

    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

export const getThirdYearStudents = async (req,res) =>{
    const q = 
        `
        SELECT COUNT(*) FROM (
        SELECT id, username, firstname, lastname, email 
        FROM mdl_user 
        WHERE username REGEXP '^2020[0-9]+'
        ) AS count_query`

    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

export const getFourthYearStudents = async (req,res) =>{
    const q = 
        `
        SELECT COUNT(*) FROM (
        SELECT id, username, firstname, lastname, email 
        FROM mdl_user 
        WHERE username REGEXP '^2019[0-9]+'
        ) AS count_query`

    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}


export const getPreviousYearStudents = async (req,res) =>{
    const q = 
        `
        SELECT COUNT(*) FROM (
        SELECT id, username, firstname, lastname, email 
        FROM mdl_user 
        WHERE username NOT REGEXP '^(2019|2020|2021|2022)[0-9]+'
        ) AS count_query`

    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

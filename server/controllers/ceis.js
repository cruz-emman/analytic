import { connection } from "../db/db.js";


export const get_assign = async (req,res) =>{
    const q = `SELECT COUNT (*)
    FROM mdl_combine_courseandcategory_assign
    WHERE course_category_name LIKE '%CEIS%'`

    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }

}
export const get_book = async (req,res) =>{
    const q = `SELECT COUNT (*)
    FROM mdl_combine_courseandcategory_book
    WHERE course_category_name LIKE '%CEIS%'`
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

export const get_chat = async (req,res) =>{
    const q = `SELECT COUNT (*)
    FROM mdl_combine_courseandcategory_chat
    WHERE course_category_name LIKE '%CASE%'`
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

export const get_choice = async (req,res) =>{
    const q = `SELECT COUNT (*)
    FROM mdl_combine_courseandcategory_choice
    WHERE course_category_name LIKE '%CEIS%'`
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

export const get_forum = async (req,res) =>{
    const q = `SELECT COUNT (*)
    FROM mdl_combine_courseandcategory_forum
    WHERE course_category_name LIKE '%CEIS%'`
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

export const get_label = async (req,res) =>{
    const q = `SELECT COUNT (*)
    FROM mdl_combine_courseandcategory_label
    WHERE course_category_name LIKE '%CEIS%'`
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}


export const get_page = async (req,res) =>{
    const q = `SELECT COUNT (*)
    FROM mdl_combine_courseandcategory_page
    WHERE course_category_name LIKE '%CEIS%'`
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

export const get_resource = async (req,res) =>{
    const q = `SELECT COUNT (*)
    FROM mdl_combine_courseandcategory_resource
    WHERE course_category_name LIKE '%CEIS%'`
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

export const get_url = async (req,res) =>{
    const q = `SELECT COUNT (*)
    FROM mdl_combine_courseandcategory_url
    WHERE course_category_name LIKE '%CEIS%'`
    try {
        const [rows] = await connection.execute(q)
        const tables = rows.map((row) => Object.values(row)[0])
        res.status(200).json(tables)
    } catch (error) {
        console.log(error)
    }
}

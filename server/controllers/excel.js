import {connection} from '../db/db.js'

export const getAllPhonesUsage = async (req,res) =>{

    const q = "SELECT COUNT(*) FROM mdl_user_devices";

    try {
        const [rows] = await connection.query(q);
        return res.status(200).json(rows[0]);
    } catch (err) {
        return res.status(500).json(err);
    }
  
}
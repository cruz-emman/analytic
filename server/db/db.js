import mysql from 'mysql2/promise'

export const connection = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "e-learningdb",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
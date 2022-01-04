import mysql from 'mysql'

export const mysqlConnection = mysql.createConnection(process.env.DATABASE_URL!)

// connection.connect()
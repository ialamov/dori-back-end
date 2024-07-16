import mysql from 'mysql2'
import * as dotenv from 'dotenv'

dotenv.config()

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  port: Number(process.env.MYSQL_PORT)
})
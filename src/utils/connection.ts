import mysql from 'mysql2'
import * as dotenv from 'dotenv'
import Logging from './logging.js';
import { DataSource } from 'typeorm';

dotenv.config()

const __dirname = process.cwd()

const AppDataConnection = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  // database: process.env.MYSQL_DATABASE,

  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
})

export default AppDataConnection


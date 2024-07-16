import app from "./app.js"
import AppDataConnection from "./utils/connection.js"
import * as dotenv from 'dotenv'

dotenv.config()

const port = 8300

AppDataConnection.initialize().then(() => {
  app.listen(port, () => {
    console.log('The server is running on port 3000')
  })
})






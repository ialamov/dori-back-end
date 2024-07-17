import "reflect-metadata"
import app from "./app.js"
import AppDataConnection from "./utils/connection.js"
import * as dotenv from 'dotenv'
import Logging from "./utils/logging.js"

dotenv.config()

const port = 8300

AppDataConnection.initialize().then(() => {
  Logging.info('DB connected successfully!');
})
.then(() => {
  app.listen(port, () => {
    Logging.info(`The server is running on port ${port}`)
  })
})
.catch(err => {
  Logging.error('Error: ');
  Logging.error(err);
})






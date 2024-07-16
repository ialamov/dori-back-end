import express from 'express'

const app = express()

app.get('/', () => {
  console.log('Hello word')
})

export default app
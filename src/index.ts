import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import router from './routes'
import dbConnect from './db'
const PORT = (process.env.PORT != null) || 3000
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

dbConnect()
  .then(() => {
    console.log('Connection ready')
  }).catch((error) => {
    console.error('Error al conectar a la base de datos:', error)
  })

app.listen(PORT, () => { console.log(`Listening port ${PORT}`) })

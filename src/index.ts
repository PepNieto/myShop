import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import router from './routes'
import dbConnect from './db'
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

dbConnect().then(() => { console.log('connexio preparada') })
app.listen(PORT, () => { console.log(`Listening port ${PORT}`) })

// const express = require('express')
// const app = express();
// require('./db')
// app.use(require('./routes/index.routes'))
// app.listen(3000)

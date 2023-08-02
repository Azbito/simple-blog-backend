require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000 || process.env.PORT
const routes = require('./routes/main')
const connectDB = require('./config/db')

connectDB()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

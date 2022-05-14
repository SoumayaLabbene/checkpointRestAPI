const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv').config({ path: './config/.env' })
const router = require('./routes/user')
const app = express()

const port = 5005
app.listen(port, (err) =>
  err ? console.log('Error', err) : console.log(`Running on port ${port}`),
)

//Connection to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to the database')
  } catch (err) {
    console.log('Error', err)
  }
}
connectDB()

app.use(express.json())
app.use('/users', router)

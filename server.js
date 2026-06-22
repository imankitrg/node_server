const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const bookroutes = require('./routes/bookRoutes')

const app = express()

const PORT = 3000

app.use(express.json())

connectDB()

app.use('/api', bookroutes)

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log("Server is running ")
})
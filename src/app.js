const express = require('express')
const cors = require('cors')
const bookroutes = require('./routes/bookRoutes')
const userroutes = require('./routes/userRoutes')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', bookroutes)
app.use('/api', userroutes)

module.exports = app
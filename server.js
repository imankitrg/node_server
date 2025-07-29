// const express =require('express');
// const mongoose =require('mongoose')

// const app=express();

// const port=3000;

// app.get('/',(req,res) => {

//     res.send("hello from node js ");

// });

// app.listen(port,()=>{
//     console.log("server is running ")
// })

// server.js
const express = require('express');
const connectDB = require('./config/db'); // 👈 Importing DB connection
const bookroute = require('./routes/bookRoutes')

const app = express();
const PORT = 3000;

// Middleware (optional)
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api', bookroute)

// Routes
app.get('/', (req, res) => {
res.send('🚀 Node.js server with MongoDB is running!');
});

// Start server
app.listen(PORT, () => {
console.log("chal raha ");
});

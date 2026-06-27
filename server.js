
const connectDB = require('./src/config/db')
const app = require('./src/app')

const PORT = 8080


connectDB()


app.listen(PORT, () => {
    console.log("Server is running ")
})
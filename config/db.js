// const mongoose =require('mongoose');

// const mongouri ='mongodb://localhost:27017/mydatabase';

// mongoose.connect(mongouri,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
// }); 
// then(() => console.log('✅ MongoDB connected'))
// .catch(err => console.error('❌ MongoDB connection error:', err));

// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
try {
    const conn = await mongoose.connect('mongodb://localhost:27017/mydatabase');
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
} catch (err) {
    console.error('❌ MongoDB Connection Failed:', err.message);
    process.exit(1); // exit process with failure
}
};

module.exports = connectDB;

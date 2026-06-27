
const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
    title: {
        type: String,
        required: true  // 👈 'require' nahi, 'required' hota hai
    },
    auther: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publishedYear: {
        type: String,
        required: true
    },
    reviews: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
},
    {
        timeStamps: true, strict: true


    });

module.exports = mongoose.model('book', bookschema);




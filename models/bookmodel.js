// const mongoose =require('mongoose')

// const bookschema = new mongoose.Schema({

//     title: {
//         type:String,
//         require:true
//     },
//     auther :{
//         type: String,
//         require:true
//     }

// });

// module.exports = mongoose.model('book',bookschema,)

// const bookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   author: {
//     type: String,
//     required: true
//   }
// });


const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
    title: {
        type: String,
        required: true  // 👈 'require' nahi, 'required' hota hai
    },
    auther: {
        type: String,
        required: true
    }
}, {
    strict: true  // 👈 Yeh line ensure karegi ke undefined fields DB mein na jayein
});

module.exports = mongoose.model('book', bookschema);


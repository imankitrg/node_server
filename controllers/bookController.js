const book = require('../models/bookmodel');
//get book

const getallbooks = async(req,res) =>{
    const books = await book.find();
    res.json(books);
};

//post book

const createbook =async (req,res) =>{
    const newbook = new book (req.body);
    const savedbook = await newbook.save();
    res.status(201).json(savedbook);
};

// update book 

const updatebook = async (req, res) => {
    const { id } = req.params;
    const updatedBook = await book.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedBook);
};

// delete book 

const deletebook = async (req, res) => {
    const { id } = req.params;
    await book.findByIdAndDelete(id);
    res.json({ message: "Book deleted successfully" });
};

module.exports = {
    getallbooks,
    createbook,
    updatebook,
    deletebook,
};
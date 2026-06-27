const book = require('../models/bookmodel');
//get book

const getallbooks = async (req, res) => {
    try {
        const books = await book.find();
        res.json({
            success: true,
            message: "Books fetched successfully",
            books
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to get all books",
            error: err.message
        });
    }
};

//post book

const createbook = async (req, res) => {
    try {
        const newbook = new book(req.body);
        const savedbook = await newbook.save();
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            savedbook
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to create book",
            error: err.message
        });
    }
}
// update book 

const updatebook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await book.findByIdAndUpdate(id, req.body, { new: true });
        res.json({
            success: true,
            message: "Book updated successfully",
            updatedBook
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to update book",
            error: err.message
        });
    }
};

// delete book 

const deletebook = async (req, res) => {
    try {
        const { id } = req.params;
        await book.findByIdAndDelete(id);
        res.json({
            success: true,
            message: "Book deleted successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to delete book",
            error: err.message
        });
    }
};

module.exports = {
    getallbooks,
    createbook,
    updatebook,
    deletebook,
};
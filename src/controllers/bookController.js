const book = require('../models/bookmodel');
const { getAllBook } = require('../services/book.service');
//get book

const getallbooks = async (req, res) => {
    try {

        const result = await getAllBook(req.query);

        res.status(200).json({
            success: true,
            message: "Books fetched successfully",
            data: result.books,
            pagination: result.pagination,
        });

        console.log(req.query);
        console.log(result);



    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
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
// post multiple book

const createbooks = async (req, res) => {
    try {

        const savedbook = await book.insertMany(req.body)
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: savedbook
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
    createbooks,
    updatebook,
    deletebook,
};
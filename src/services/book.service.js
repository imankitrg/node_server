const Book = require("../models/bookmodel");

const getAllBook = async (query) => {
    const {
        page = 1,
        limit = 10,
        search = "",
        genre,
        auther,
        rating,
        price,
        publishedYear,
        sort = "title"
    } = query;

    const filter = {};

    // Search (title, author, genre)
    if (search) {
        filter.$or = [
            { title: { $regex: search, $options: "i" } },
            { auther: { $regex: search, $options: "i" } },
            { genre: { $regex: search, $options: "i" } },
            { publishedYear: { $regex: search, $options: "i" } },
            { rating: { $regex: search, $options: "i" } },
            { price: { $regex: search, $options: "i" } },
        ];
    }

    // Filter
    if (genre) {
        filter.genre = genre;
    }

    if (auther) {
        filter.auther = auther;
    }

    if (rating) {
        filter.rating = rating;
    }

    if (price) {
        filter.price = price;
    }
    if (publishedYear) {
        filter.publishedYear = publishedYear;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const totalBooks = await Book.countDocuments(filter);

    const sorting = {};

    if (sort === "title") {
        sorting.title = 1;
    }
    else if (sort === "auther") {
        sorting.auther = 1;
    }
    else if (sort === "publishedYear") {
        sorting.publishedYear = 1;
    }
    else if (sort === "genre") {
        sorting.genre = 1;
    }
    else if (sort === "rating") {
        sorting.rating = 1;
    }
    else if (sort === "price") {
        sorting.price = 1;
    }
    const books = await Book.find(filter)
        .sort(sorting)
        .skip(skip)
        .limit(Number(limit));

    return {
        books,
        pagination: {
            totalBooks,
            currentPage: Number(page),
            totalPages: Math.ceil(totalBooks / Number(limit)),
            limit: Number(limit),
        },
    };
};

module.exports = {
    getAllBook,
};
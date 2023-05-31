const express = require("express");
const bookService = require("../services/book");
const router = express.Router();
const { authIsAdmin } = require("../middleware/authentication-jwt");

router.post("/", authIsAdmin, async(req, res) => {
    const bookId = req.params.bookId;
    try {
        const { isbn, titulo, autor, year, libraryId } = req.body; 
        const newBook = await bookService.createBook({
            isbn, titulo, autor, year, libraryId,
        });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

router.get("/:bookId", async(req, res) => {
    const bookId = req.params.bookId;
    try{
        const book = await bookService.getBook(bookId);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/", async(req, res) => {
    try {
        const books = await bookService.getBooks();
        res.status(200).json(books)
    } catch ( error ) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:bookId", authIsAdmin, async(req, res) => {
    const {  isbn, titulo, autor, year, libraryId, isDeleted } = req.body;
    const bookId = req.params.bookId;
    try {
        const newBook = await bookService.updateBook(bookId, {
            isbn, titulo,autor, year, libraryId,isDeleted,
        });
        res.status(200).json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete("/:bookId", authIsAdmin, async(req, res) => {
    const bookId = req.params.bookId;
    try{
        const book = await bookService.deleteBook(bookId);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
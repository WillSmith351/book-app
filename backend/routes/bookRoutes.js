const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

router.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.post("/books", async (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
  });
  await newBook.save();
  res.json(newBook);
});

router.delete("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  res.json(book);
});

module.exports = router;

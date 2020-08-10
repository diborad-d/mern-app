const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  likes: { type: Number, required: true, default: 0 },
  isLiked: { type: Boolean, required: true, default: false},
  synopsis: { type: String },
  img: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

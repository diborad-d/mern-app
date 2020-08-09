var express = require("express");
var bookController = require("./../controllers/booksController");
var router = express.Router();

router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;

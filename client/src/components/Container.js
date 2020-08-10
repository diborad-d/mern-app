import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import API from "../utils/API";
import BookCard from "./Card";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    var response = await API.getBooks();
    this.setState({ books: response.data });
  };

  removeBook = async id => {
    var response = await API.deleteBook(id);
    await this.getBooks();
  };

  render() {
    const content = this.state.books.map((book, i) => (
      <div>
        <BookCard book={book} removeBook={this.removeBook} />
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{content}</div>
      </div>
    );
  }
}

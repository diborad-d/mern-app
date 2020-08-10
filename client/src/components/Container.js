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
    this.GetBooks();
  }

  GetBooks() {
    API.getBooks().then(response => this.setState({ books: response.data }));
  }

  render() {
    const content = this.state.books.map((book, i) => (
      <div>
        <BookCard book={book} />
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ content }</div>
      </div>
    );
  }
}
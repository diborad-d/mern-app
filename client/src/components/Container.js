import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import API from "../utils/API";

const handleShowBooks = () => {
  API.getBooks().then(response => console.log(response.data[0]));
};

class Container extends Component {
  render() {
    return (
      <div>
        <button onClick={handleShowBooks}>Show Books</button>
      </div>
    );
  }
}
export default Container;

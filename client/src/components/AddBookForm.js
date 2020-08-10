import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import TextArea from "@material-ui/core/TextArea"
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch"
    },
    float: "right",
    display: "flex",
    flexDirection: "column"
  }
}));

export default function FakeAddBookForm(props) {
  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var object = {};
    formData.forEach(function(value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    props.addBook(object);
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField name="img" type="text" label="Image Url" variant="outlined" />
      <TextField name="title" label="Title" variant="outlined" />
      <TextField name="author" label="Author" variant="outlined" />
      <TextField name="synopsis" label="Synopsis" variant="outlined" />
      <Button type="submit" value="submit" variant="contained" color="primary">
        Add Book
      </Button>
    </form>
  );
}

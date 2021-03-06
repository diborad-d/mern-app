import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import PropTypes from "prop-types";
import { Card, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: "lightGray",
    margin: "20px 0 20px 30%"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function ComplexGrid(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={props.book.img} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography onClick={() => props.likeBook(props.book)}  style={{ cursor: "pointer" }}>
                    <i class="far fa-heart"></i>
                    {props.book.likes} Likes
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    {props.book.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {props.book.author}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {props.book.synopsis}
                  </Typography>
                </Grid>
                <Grid item>
                <Button variant="body2" style={{ cursor: "pointer", color: "primary", hover: "primary" }} onClick={() => props.navigate(props.book)}>
                    {props.navText}
                  </Button>
                  <Button variant="body2" style={{ cursor: "pointer", color: "primary", hover: "primary" }} onClick={() => props.removeBook(props.book._id)}>
                    Remove From List
                  </Button>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">${props.book.price}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </a>
    </div>
  );
}

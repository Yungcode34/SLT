import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './style/Homepage.css';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function AutoGrid(props) {
  const { classes } = props;

        return(

<div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
        <div class="box1">

          <h1 class="tag">hello</h1>

        </div>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
        );
      
  };
  AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(AutoGrid);
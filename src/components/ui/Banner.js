import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import BannerHamburger from './BannerHamburger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    display: "flex",
    flex: 1
  },
  storeName: {
    color: "black",
    marginTop: "16px",
    display: "inline-block"
  },
  menuButton: {
    marginRight: "30px", 
    textDecoration: "none"
  },
  menuButtons: {
    marginRight: "30px",
    textDecoration: "none"
  },
  appbar: {
    padding: "0 60px",
    [theme.breakpoints.down('md')]: {
      padding: "0 10px"
    }
  }
});

class Banner extends Component {
  render() {
    const { classes, quantity, config } = this.props;
    const number = quantity ? ` (${quantity})` : "";

    const productLink = null;

    let menu;
    if (isWidthDown('sm', this.props.width)) {
      menu = <BannerHamburger productLink={productLink} number={number} />
    } else {
      menu = (<span className={classes.buttons}>
          { productLink }
          <Link to={`/cart`} className={classes.menuButton} style={{ marginRight: 0 }}>
            <Typography variant="button" gutterBottom>Cart{number}</Typography>
          </Link>
        </span>
      )
    }

    return (
      <div className={classes.root} >
        <AppBar position="static" color="secondary" className={classes.appbar}>
          <Toolbar>
            <Link to={`/homepage`} className={classes.menuButton}>
              <div className="logo" />
              <h3 className={classes.storeName}>{config.store_name}</h3>
            </Link>
            { menu }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};
export default withWidth()(withStyles(styles)(Banner));
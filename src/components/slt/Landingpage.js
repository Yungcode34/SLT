import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './style/Landingpage.css';
class Landingpage extends Component {
    render() {
        return(
            <div class='background'>
                <h1>Landingpage</h1>
                </div>
        );
      }
  };

export default withRouter(Landingpage);
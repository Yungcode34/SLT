import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Text } from 'gestalt';
import "gestalt/dist/gestalt.css";
import css from "./index.css"

import App from './components/App';
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Landingpage from "./components/landingpage";
import 'typeface-roboto';
import Icon from '@material-ui/core/Icon';


import registerServiceWorker from './registerServiceWorker';


    const Root = () => (
        <Router>
            <React.Fragment>
                <Navbar />
            <Switch>
                <Route component={App} exact path="/"/>
                <Route component={Signin} path="/signin"/>
                <Route component={Signup} path="/signup"/>
                <Route component={Checkout} path="/checkout"/>
                <Route component={Landingpage} path="/landingpage"/>
            </Switch>
            </React.Fragment>
        </Router>
    )


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot){
    module.hot.accept();
}
import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from './../containers/Home';
import Sigin from "./../containers/Sigin";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/sigin" component={Sigin} />
            </div>
        );
    }
}

export default Routes;

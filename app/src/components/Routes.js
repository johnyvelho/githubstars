import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from './../containers/Home';
import Sigin from "./../containers/Sigin";
import RepositoresListPage from "./../containers/RepositoresListPage";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/sigin" component={Sigin} />
                <Route path="/:search" component={RepositoresListPage} />
            </div>
        );
    }
}

export default Routes;

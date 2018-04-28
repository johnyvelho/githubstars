import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import { ApolloProvider } from "react-apollo";

import store from './../store';
import Routes from './../components/Routes';
import {client} from "./../util/ApolloClient"

import 'tachyons/css/tachyons.min.css';
import 'element-theme-default';
import './../assets/css/style.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Router>
                    <div id="app">
                        <Routes/>
                    </div>
                </Router>
            </ApolloProvider>
        </Provider>
    );
  }
}

export default App;

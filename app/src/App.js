import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import { ApolloProvider } from "react-apollo";
import {client} from "./util/ApolloClient"

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Routes/>
                </div>
            </Router>
        </ApolloProvider>
    );
  }
}

export default App;

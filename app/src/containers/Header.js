import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { compose, graphql } from 'react-apollo'
import search from './../hocs/Search';
import { withRouter } from 'react-router';
import { redirectToLoginIfNotAuthenticated } from './../util/Auth';
import { viewer } from "../graphql/queries/viewer";

import logo from './../assets/images/logo.svg';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        redirectToLoginIfNotAuthenticated();
    }

    componentDidMount() {

    }

    render() {
        const { fetchViewer } = this.props;

        return (
            <div id="header" className="flex flex-wrap items-center">
                <h1 id="logo" className="w-20">
                    <span className="sr-only">GithubStars</span>
                    <Link to="/"><img src={logo} alt=""/></Link>
                </h1>
                <div id="search" className="w-70">
                    <input type="text" className="w-100" placeholder="github username..." value={this.props.inputSearch}
                           onChange={this.props.onChangeInput}
                           onKeyPress={this.props.onKeyPress}
                    />
                    <button className="button-search" onClick={this.props.onClickSearch}>Search</button>
                </div>
                <div id="user" className="w-10 tr">
                    {! fetchViewer.loading &&
                        <img src={fetchViewer.viewer.avatarUrl} className="br-100" width="64" height="64" alt=""/>
                    }
                </div>
            </div>
        );
    }
}

export default compose(
    withRouter,
    search,
    graphql(viewer, {
        name: 'fetchViewer'
    })
)(Home);

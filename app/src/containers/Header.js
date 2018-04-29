import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { compose, graphql } from 'react-apollo'
import { redirectToLoginIfNotAuthenticated } from './../util/Auth';
import { viewer } from "../graphql/queries/viewer";
import ProgressiveImage from "react-progressive-image-loading";

import logo from './../assets/images/logo.svg';
import userPlaceholder from './../assets/images/user.svg';

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
                    <input type="text" className="w-100" placeholder="github username..."/>
                    <button className="button-search">Search</button>
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
    graphql(viewer, {
        name: 'fetchViewer'
    })
)(Home);

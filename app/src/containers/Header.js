import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { compose, graphql } from 'react-apollo'
import search from './../hocs/Search';
import { withRouter } from 'react-router';
import { redirectToLoginIfNotAuthenticated } from './../util/Auth';
import { getUserData } from './../util/Auth'
import {DesktopTablet, Mobile} from './../components/MediaQuery';

import logo from './../assets/images/logo.svg';


class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        redirectToLoginIfNotAuthenticated();
    }

    componentDidMount() {
        this.user = getUserData();
    }

    render() {
        return (
            <div id="header" className="flex flex-wrap items-center ph3 ph0-ns">
                <div className="w-100 w-20-ns flex justify-between items-center mb3 mb0-ns">
                    <h1 id="logo" className="w-70 dib">
                        <span className="sr-only">GithubStars</span>
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </h1>
                    <Mobile>
                        <div className="user w-30 dib tr">
                            {this.user &&
                            <img src={this.user.avatarUrl} className="br-100" width="64" height="64" alt=""/>
                            }
                        </div>
                    </Mobile>
                </div>
                <div id="search" className="w-100 w-70-ns">
                    <input type="text" className="w-100" placeholder="github username..." value={this.props.inputSearch}
                           onChange={this.props.onChangeInput}
                           onKeyPress={this.props.onKeyPress}
                    />
                    <button className="button-search" onClick={this.props.onClickSearch}>Search</button>
                </div>
                <DesktopTablet>
                    <div className="user w-10-ns w-30 tr">
                        {this.user &&
                            <img src={this.user.avatarUrl} className="br-100" width="64" height="64" alt=""/>
                        }
                    </div>
                </DesktopTablet>
            </div>
        );
    }
}

export default compose(
    withRouter,
    search
)(Home);

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import queryString from 'query-string';
import { setUserToken } from './../util/Auth';
import * as Api from './../util/Api';

import logo from './../assets/images/logo.svg';
import { Loading } from 'element-react';

class Sigin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tokenSetted: false
        }
    }

    componentDidMount() {
        if (this.props.location && this.props.location.search) {
            let queryParsed = queryString.parse(this.props.location.search);
            if (queryParsed.code) {
                Api.getAccessToken(queryParsed.code).then(
                    (response) => {
                        setUserToken(response.data.access_token);
                        this.props.history.push('/');
                    }
                );
            }
        }
    }

    render() {
        return (
            <div className="vh-100 dt w-100">
                <div className="dtc v-mid tc">
                    <h1 id="logo" className="mb5">
                        <span className="sr-only">GithubStars</span>
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </h1>
                    <Loading text="Loading..." loading={true}/>
                </div>
            </div>
        );
    }
}

export default Sigin;

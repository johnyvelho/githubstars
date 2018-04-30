import React, {Component} from 'react';
import {Link} from "react-router-dom";
import queryString from 'query-string';
import {setUserToken, setUserData} from './../util/Auth';
import * as Api from './../util/Api';
import {client} from './../util/ApolloClient';
import {viewer} from "../graphql/queries/viewer";

import logo from './../assets/images/logo.svg';
import {Loading} from 'element-react';


class Sigin extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.location && this.props.location.search) {
            let queryParsed = queryString.parse(this.props.location.search);
            if (queryParsed.code) {
                Api.getAccessToken(queryParsed.code).then(
                    (response) => {
                        setUserToken(response.data.access_token);

                        client.query({
                            query: viewer,
                            variables: {
                                repositoriesFirst: 100,
                            }
                        }).then((response) => {
                            const data = response.data.viewer;
                            const newData = {};

                            Object.keys(data).map(function(key, index) {
                                if (key !== 'starredRepositories') {
                                    newData[key] = data[key];
                                }
                            });

                            newData.starredRepositoriesId = data.starredRepositories.edges.map((item, key) => {
                                return item.node.id;
                            });

                            setUserData(newData);

                            this.props.history.push('/');
                        });
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

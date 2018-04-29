import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { redirectToLoginIfNotAuthenticated } from './../util/Auth';
import { Loading } from 'element-react';

import Header from './Header';
import UserCard from "../components/UserCard";
import RepositorieList from "../components/RepositorieList";
import {getStarredRepositoresUserBySearch} from "../graphql/queries/getStarredRepositoriesUserBySearch";
import NotFound from "../components/NotFound";

class RepositoresListPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const { fetchStarredRepositories } = this.props;

        return (
            <div className="main-content center">
                <Header/>
                {!fetchStarredRepositories.loading && fetchStarredRepositories.search.edges.length > 0 &&
                    <div className="flex flex-wrap">
                        <div className="w-20">
                            <UserCard data={{
                                avatarUrl: fetchStarredRepositories.search.edges[0].node.avatarUrl,
                                name: fetchStarredRepositories.search.edges[0].node.name,
                                login: fetchStarredRepositories.search.edges[0].node.login,
                                bio: fetchStarredRepositories.search.edges[0].node.bio,
                                location: fetchStarredRepositories.search.edges[0].node.location,
                                websiteUrl: fetchStarredRepositories.search.edges[0].node.websiteUrl,
                                organizations: fetchStarredRepositories.search.edges[0].node.organizations,
                            }}/>
                        </div>
                        <div className="w-80">
                            <RepositorieList data={fetchStarredRepositories.search.edges[0].node.starredRepositories.nodes}/>
                        </div>
                    </div>
                }

                {!fetchStarredRepositories.loading && fetchStarredRepositories.search.edges.length === 0 &&
                    <NotFound/>
                }

                {fetchStarredRepositories.loading &&
                    <Loading text="Loading..." loading={true}/>
                }
            </div>
        );
    }
}

export default compose(
    graphql(getStarredRepositoresUserBySearch, {
        name: 'fetchStarredRepositories',
        options: (props) => {
            return {
                variables: {
                    query: props.match.params.search,
                    qty: 15
                }
            }
        }
    })
)(RepositoresListPage);

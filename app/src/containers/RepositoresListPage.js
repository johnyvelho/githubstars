import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { redirectToLoginIfNotAuthenticated } from './../util/Auth';
import { Loading } from 'element-react';

import Header from './../components/Header';
import UserCard from "../components/UserCard";
import RepositorieList from "../components/RepositorieList";
import {getStarredRepositoresUserBySearch} from "../graphql/queries/getStarredRepositoriesUserBySearch";
import NotFound from "../components/NotFound";
import InfiniteScroll from 'react-infinite-scroller';
import {isAuthenticated, login_url} from "../util/Auth";


class RepositoresListPage extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        this.paginationRepositorisList = null;
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.search !== nextProps.match.params.search) {
            this.setState({hasMorePagination: true});
            this.paginationRepositorisList = null;
        }
    }


    handleInfiniteLoad() {
        this.props.fetchStarredRepositories.fetchMore({
            variables: {
                afterStarrableRepositories: this.props.fetchStarredRepositories.search.edges[0].node.starredRepositories.pageInfo.endCursor
            },
            updateQuery: (previousResult, { fetchMoreResult, queryVariables }) => {
                let result = Object.assign({}, previousResult, fetchMoreResult);
                console.log('previous -> ', previousResult);
                console.log('next -> ', fetchMoreResult);

                this.paginationRepositorisList = !this.paginationRepositorisList
                    ? previousResult.search.edges[0].node.starredRepositories.edges
                    : this.paginationRepositorisList;

                result.search.edges[0].node.starredRepositories.edges = [...this.paginationRepositorisList, ...fetchMoreResult.search.edges[0].node.starredRepositories.edges];
                this.paginationRepositorisList = result.search.edges[0].node.starredRepositories.edges;

                return result;
            },
        });
    }

    render() {
        const { fetchStarredRepositories } = this.props;

        return (
            <div className="main-content center ph0 ph3-ns">
                <Header/>

                {!fetchStarredRepositories.loading && fetchStarredRepositories.search.edges.length > 0 &&
                    <div className="flex-ns flex-wrap">
                        <div className="w-100 w-30-m w-20-ns mb4 mb0-ns">
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
                        <div className="w-100 w-70-m w-80-ns">
                            <div className="box-content-list">
                                {fetchStarredRepositories.search.edges[0].node.starredRepositories.edges.length > 0 ?
                                    <InfiniteScroll
                                        pageStart={0}
                                        loadMore={this.handleInfiniteLoad.bind(this)}
                                        hasMore={fetchStarredRepositories.search.edges[0].node.starredRepositories.pageInfo.hasNextPage}
                                        loader={<Loading/>}
                                    >
                                        <RepositorieList data={fetchStarredRepositories.search.edges[0].node.starredRepositories.edges}/>
                                    </InfiniteScroll>
                                :
                                    <NotFound message="This user has not starrable repositories" />
                                }
                            </div>
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
                    query: props.match.params.search
                }
            }
        }
    })
)(RepositoresListPage);

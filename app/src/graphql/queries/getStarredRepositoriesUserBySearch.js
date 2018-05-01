import gql from "graphql-tag";

export const getStarredRepositoresUserBySearch = gql`
    query($query: String!, $firstStarrableRepositories: Int = 7, $afterStarrableRepositories: String) {
        search(type:USER, query:$query, first:1) {
            codeCount

            edges {
                node {
                    ... on User {
                        id
                        databaseId
                        avatarUrl
                        name
                        login
                        bio
                        location
                        websiteUrl
                        organizations(first: 3) {
                            edges {
                                node {
                                    login
                                    url
                                }
                            }
                        }


                        starredRepositories(first: $firstStarrableRepositories, after: $afterStarrableRepositories) {
                            edges {
                                cursor
                                node {
                                    id
                                    databaseId
                                    name
                                    nameWithOwner
                                    description
                                    url
                                    stargazers{
                                        totalCount
                                    }
                                }
                            }
                            pageInfo {
                                endCursor
                                startCursor
                                hasNextPage
                                hasPreviousPage
                            }
                        }
                    }
                }
            }

        }
    }
`;
import gql from "graphql-tag";

export const getStarredRepositoresUserBySearch = gql`
    query($query: String!, $qty: Int!) {
        search(type:USER, query:$query, first:1) {
            codeCount

            edges {
                node {
                    ... on User {
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


                        starredRepositories(first: 100) {
                            nodes {
                                name
                                nameWithOwner
                                description
                                url
                                stargazers{
                                    totalCount
                                }
                            }
                        }
                    }
                }
            }

            nodes {
                ... on User {
                    avatarUrl
                    name
                    login
                    bio
                    location
                    organizations(first: 3) {
                        edges {
                            node {
                                login
                            }
                        }
                    }
                    
                    starredRepositories(first: $qty) {
                        nodes {
                            name
                            nameWithOwner
                            description
                            url
                            stargazers{
                                totalCount
                            }
                        }
                    }
                }
            }
        }
    }
`;
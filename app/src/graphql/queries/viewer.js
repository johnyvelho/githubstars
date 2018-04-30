import gql from "graphql-tag";

export const viewer = gql`
    query($repositoriesFirst: Int = 100, $repositoriesAfter: String) {
        viewer {
            id
            avatarUrl
            email
            login
            name

            starredRepositories(first: $repositoriesFirst, after: $repositoriesAfter) {
                totalCount
                edges {
                    node {
                        id
                        databaseId
                    }
                }
            }
        }
    }
`;
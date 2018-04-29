import gql from "graphql-tag";

export const viewer = gql`
    query {
        viewer {
            id
            avatarUrl
            email,
            login,
            name
        }
    }
`;
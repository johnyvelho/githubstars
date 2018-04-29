import gql from "graphql-tag";

export const removeStar = gql`
    mutation($starrableId: ID!) {
        removeStar(input:{starrableId:$starrableId}) {
            starrable {
                id
            }
        }
    }
`;
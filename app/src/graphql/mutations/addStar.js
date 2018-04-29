import gql from "graphql-tag";

export const addStar = gql`
    mutation($starrableId: ID!) {
        addStar(input:{starrableId:$starrableId}) {
            starrable {
                id
            }
        }
    }
`;
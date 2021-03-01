import { gql } from "apollo-boost";

export const USER_LOGIN = gql`
  mutation($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

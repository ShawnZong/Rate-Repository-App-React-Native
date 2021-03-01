import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      pageInfo {
        hasNextPage
        totalCount
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  {
    authorizedUser {
      id
      username
    }
  }
`;
// other queries...

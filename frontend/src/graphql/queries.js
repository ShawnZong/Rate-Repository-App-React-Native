import { gql } from "apollo-boost";

export const GET_ALL_REVIEWS_IN_ONE_REPOSITORY = gql`
  query review($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_ONE_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      ownerAvatarUrl
      description
      language
      ratingAverage
      forksCount
      reviewCount
      stargazersCount
    }
  }
`;

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
          url
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

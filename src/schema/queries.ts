import { gql } from '@apollo/client';

export const LINK_FEED = gql`
  query LinkFeed {
    linkFeed {
      id
      description
      url
      postedBy {
        id
        name
      }
      comments {
        id
        body
        postedBy {
          id
          name
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      name
      email
      links {
        id
        url
        description
      }
      comments {
        id
        body
      }
    }
  }
`;

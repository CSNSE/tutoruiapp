/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTutoringEvent = /* GraphQL */ `
  query GetTutoringEvent($id: ID!) {
    getTutoringEvent(id: $id) {
      id
      studentName
      date
      conceptsCovered
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTutoringEvents = /* GraphQL */ `
  query ListTutoringEvents(
    $filter: ModelTutoringEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTutoringEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentName
        date
        conceptsCovered
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

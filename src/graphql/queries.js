/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
      id
      TutorDay {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTutor = /* GraphQL */ `
  query GetTutor($id: ID!) {
    getTutor(id: $id) {
      id
      Event {
        nextToken
        __typename
      }
      Email
      Name
      TutorDay {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTutors = /* GraphQL */ `
  query ListTutors(
    $filter: ModelTutorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTutors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Email
        Name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTutoringEvent = /* GraphQL */ `
  query GetTutoringEvent($id: ID!) {
    getTutoringEvent(id: $id) {
      id
      studentName
      date
      conceptsCovered
      image
      tutorID
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
        tutorID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tutoringEventsByTutorID = /* GraphQL */ `
  query TutoringEventsByTutorID(
    $tutorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTutoringEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tutoringEventsByTutorID(
      tutorID: $tutorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentName
        date
        conceptsCovered
        image
        tutorID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTutorDay = /* GraphQL */ `
  query GetTutorDay($id: ID!) {
    getTutorDay(id: $id) {
      id
      dayId
      tutorId
      day {
        id
        createdAt
        updatedAt
        __typename
      }
      tutor {
        id
        Email
        Name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTutorDays = /* GraphQL */ `
  query ListTutorDays(
    $filter: ModelTutorDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTutorDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dayId
        tutorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tutorDaysByDayId = /* GraphQL */ `
  query TutorDaysByDayId(
    $dayId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTutorDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tutorDaysByDayId(
      dayId: $dayId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dayId
        tutorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tutorDaysByTutorId = /* GraphQL */ `
  query TutorDaysByTutorId(
    $tutorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTutorDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tutorDaysByTutorId(
      tutorId: $tutorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dayId
        tutorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

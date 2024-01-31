/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
    onCreateDay(filter: $filter) {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
    onUpdateDay(filter: $filter) {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
    onDeleteDay(filter: $filter) {
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
export const onCreateTutor = /* GraphQL */ `
  subscription OnCreateTutor($filter: ModelSubscriptionTutorFilterInput) {
    onCreateTutor(filter: $filter) {
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
export const onUpdateTutor = /* GraphQL */ `
  subscription OnUpdateTutor($filter: ModelSubscriptionTutorFilterInput) {
    onUpdateTutor(filter: $filter) {
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
export const onDeleteTutor = /* GraphQL */ `
  subscription OnDeleteTutor($filter: ModelSubscriptionTutorFilterInput) {
    onDeleteTutor(filter: $filter) {
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
export const onCreateTutoringEvent = /* GraphQL */ `
  subscription OnCreateTutoringEvent(
    $filter: ModelSubscriptionTutoringEventFilterInput
  ) {
    onCreateTutoringEvent(filter: $filter) {
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
export const onUpdateTutoringEvent = /* GraphQL */ `
  subscription OnUpdateTutoringEvent(
    $filter: ModelSubscriptionTutoringEventFilterInput
  ) {
    onUpdateTutoringEvent(filter: $filter) {
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
export const onDeleteTutoringEvent = /* GraphQL */ `
  subscription OnDeleteTutoringEvent(
    $filter: ModelSubscriptionTutoringEventFilterInput
  ) {
    onDeleteTutoringEvent(filter: $filter) {
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
export const onCreateTutorDay = /* GraphQL */ `
  subscription OnCreateTutorDay($filter: ModelSubscriptionTutorDayFilterInput) {
    onCreateTutorDay(filter: $filter) {
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
export const onUpdateTutorDay = /* GraphQL */ `
  subscription OnUpdateTutorDay($filter: ModelSubscriptionTutorDayFilterInput) {
    onUpdateTutorDay(filter: $filter) {
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
export const onDeleteTutorDay = /* GraphQL */ `
  subscription OnDeleteTutorDay($filter: ModelSubscriptionTutorDayFilterInput) {
    onDeleteTutorDay(filter: $filter) {
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

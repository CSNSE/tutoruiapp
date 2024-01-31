/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
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
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
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
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
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
export const createTutor = /* GraphQL */ `
  mutation CreateTutor(
    $input: CreateTutorInput!
    $condition: ModelTutorConditionInput
  ) {
    createTutor(input: $input, condition: $condition) {
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
export const updateTutor = /* GraphQL */ `
  mutation UpdateTutor(
    $input: UpdateTutorInput!
    $condition: ModelTutorConditionInput
  ) {
    updateTutor(input: $input, condition: $condition) {
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
export const deleteTutor = /* GraphQL */ `
  mutation DeleteTutor(
    $input: DeleteTutorInput!
    $condition: ModelTutorConditionInput
  ) {
    deleteTutor(input: $input, condition: $condition) {
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
export const createTutoringEvent = /* GraphQL */ `
  mutation CreateTutoringEvent(
    $input: CreateTutoringEventInput!
    $condition: ModelTutoringEventConditionInput
  ) {
    createTutoringEvent(input: $input, condition: $condition) {
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
export const updateTutoringEvent = /* GraphQL */ `
  mutation UpdateTutoringEvent(
    $input: UpdateTutoringEventInput!
    $condition: ModelTutoringEventConditionInput
  ) {
    updateTutoringEvent(input: $input, condition: $condition) {
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
export const deleteTutoringEvent = /* GraphQL */ `
  mutation DeleteTutoringEvent(
    $input: DeleteTutoringEventInput!
    $condition: ModelTutoringEventConditionInput
  ) {
    deleteTutoringEvent(input: $input, condition: $condition) {
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
export const createTutorDay = /* GraphQL */ `
  mutation CreateTutorDay(
    $input: CreateTutorDayInput!
    $condition: ModelTutorDayConditionInput
  ) {
    createTutorDay(input: $input, condition: $condition) {
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
export const updateTutorDay = /* GraphQL */ `
  mutation UpdateTutorDay(
    $input: UpdateTutorDayInput!
    $condition: ModelTutorDayConditionInput
  ) {
    updateTutorDay(input: $input, condition: $condition) {
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
export const deleteTutorDay = /* GraphQL */ `
  mutation DeleteTutorDay(
    $input: DeleteTutorDayInput!
    $condition: ModelTutorDayConditionInput
  ) {
    deleteTutorDay(input: $input, condition: $condition) {
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

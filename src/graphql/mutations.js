/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
      __typename
    }
  }
`;

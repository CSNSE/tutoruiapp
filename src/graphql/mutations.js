/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;

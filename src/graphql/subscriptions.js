/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;

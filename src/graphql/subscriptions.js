/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSurvey = /* GraphQL */ `
  subscription OnCreateSurvey($filter: ModelSubscriptionSurveyFilterInput) {
    onCreateSurvey(filter: $filter) {
      id
      name
      description
      author
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSurvey = /* GraphQL */ `
  subscription OnUpdateSurvey($filter: ModelSubscriptionSurveyFilterInput) {
    onUpdateSurvey(filter: $filter) {
      id
      name
      description
      author
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSurvey = /* GraphQL */ `
  subscription OnDeleteSurvey($filter: ModelSubscriptionSurveyFilterInput) {
    onDeleteSurvey(filter: $filter) {
      id
      name
      description
      author
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSurveyResponse = /* GraphQL */ `
  subscription OnCreateSurveyResponse(
    $filter: ModelSubscriptionSurveyResponseFilterInput
  ) {
    onCreateSurveyResponse(filter: $filter) {
      id
      author
      parentsurvey
      questions
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSurveyResponse = /* GraphQL */ `
  subscription OnUpdateSurveyResponse(
    $filter: ModelSubscriptionSurveyResponseFilterInput
  ) {
    onUpdateSurveyResponse(filter: $filter) {
      id
      author
      parentsurvey
      questions
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSurveyResponse = /* GraphQL */ `
  subscription OnDeleteSurveyResponse(
    $filter: ModelSubscriptionSurveyResponseFilterInput
  ) {
    onDeleteSurveyResponse(filter: $filter) {
      id
      author
      parentsurvey
      questions
      createdAt
      updatedAt
      __typename
    }
  }
`;

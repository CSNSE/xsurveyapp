/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey(
    $input: CreateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    createSurvey(input: $input, condition: $condition) {
      id
      author
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey(
    $input: UpdateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    updateSurvey(input: $input, condition: $condition) {
      id
      author
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey(
    $input: DeleteSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    deleteSurvey(input: $input, condition: $condition) {
      id
      author
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSurveyResponse = /* GraphQL */ `
  mutation CreateSurveyResponse(
    $input: CreateSurveyResponseInput!
    $condition: ModelSurveyResponseConditionInput
  ) {
    createSurveyResponse(input: $input, condition: $condition) {
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
export const updateSurveyResponse = /* GraphQL */ `
  mutation UpdateSurveyResponse(
    $input: UpdateSurveyResponseInput!
    $condition: ModelSurveyResponseConditionInput
  ) {
    updateSurveyResponse(input: $input, condition: $condition) {
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
export const deleteSurveyResponse = /* GraphQL */ `
  mutation DeleteSurveyResponse(
    $input: DeleteSurveyResponseInput!
    $condition: ModelSurveyResponseConditionInput
  ) {
    deleteSurveyResponse(input: $input, condition: $condition) {
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

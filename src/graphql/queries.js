/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSurvey = /* GraphQL */ `
  query GetSurvey($id: ID!) {
    getSurvey(id: $id) {
      id
      name
      description
      questions
      author
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSurveys = /* GraphQL */ `
  query ListSurveys(
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        questions
        author
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
export const getSurveyResponse = /* GraphQL */ `
  query GetSurveyResponse($id: ID!) {
    getSurveyResponse(id: $id) {
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
export const listSurveyResponses = /* GraphQL */ `
  query ListSurveyResponses(
    $filter: ModelSurveyResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveyResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        parentsurvey
        questions
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

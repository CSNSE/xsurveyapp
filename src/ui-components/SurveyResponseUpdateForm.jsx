/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSurveyResponse } from "../graphql/queries";
import { updateSurveyResponse } from "../graphql/mutations";
const client = generateClient();
export default function SurveyResponseUpdateForm(props) {
  const {
    id: idProp,
    surveyResponse: surveyResponseModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    author: "",
    parentsurvey: "",
    questions: "",
  };
  const [author, setAuthor] = React.useState(initialValues.author);
  const [parentsurvey, setParentsurvey] = React.useState(
    initialValues.parentsurvey
  );
  const [questions, setQuestions] = React.useState(initialValues.questions);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = surveyResponseRecord
      ? { ...initialValues, ...surveyResponseRecord }
      : initialValues;
    setAuthor(cleanValues.author);
    setParentsurvey(cleanValues.parentsurvey);
    setQuestions(cleanValues.questions);
    setErrors({});
  };
  const [surveyResponseRecord, setSurveyResponseRecord] = React.useState(
    surveyResponseModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSurveyResponse.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSurveyResponse
        : surveyResponseModelProp;
      setSurveyResponseRecord(record);
    };
    queryData();
  }, [idProp, surveyResponseModelProp]);
  React.useEffect(resetStateValues, [surveyResponseRecord]);
  const validations = {
    author: [{ type: "Required" }],
    parentsurvey: [{ type: "Required" }],
    questions: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          author,
          parentsurvey,
          questions: questions ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateSurveyResponse.replaceAll("__typename", ""),
            variables: {
              input: {
                id: surveyResponseRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SurveyResponseUpdateForm")}
      {...rest}
    >
      <TextField
        label="Author"
        isRequired={true}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              author: value,
              parentsurvey,
              questions,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
      ></TextField>
      <TextField
        label="Parentsurvey"
        isRequired={true}
        isReadOnly={false}
        value={parentsurvey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              author,
              parentsurvey: value,
              questions,
            };
            const result = onChange(modelFields);
            value = result?.parentsurvey ?? value;
          }
          if (errors.parentsurvey?.hasError) {
            runValidationTasks("parentsurvey", value);
          }
          setParentsurvey(value);
        }}
        onBlur={() => runValidationTasks("parentsurvey", parentsurvey)}
        errorMessage={errors.parentsurvey?.errorMessage}
        hasError={errors.parentsurvey?.hasError}
        {...getOverrideProps(overrides, "parentsurvey")}
      ></TextField>
      <TextField
        label="Questions"
        isRequired={false}
        isReadOnly={false}
        value={questions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              author,
              parentsurvey,
              questions: value,
            };
            const result = onChange(modelFields);
            value = result?.questions ?? value;
          }
          if (errors.questions?.hasError) {
            runValidationTasks("questions", value);
          }
          setQuestions(value);
        }}
        onBlur={() => runValidationTasks("questions", questions)}
        errorMessage={errors.questions?.errorMessage}
        hasError={errors.questions?.hasError}
        {...getOverrideProps(overrides, "questions")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || surveyResponseModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || surveyResponseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

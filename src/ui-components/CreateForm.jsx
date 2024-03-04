/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth, useNavigateAction } from "./utils";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createSurvey } from "../graphql/mutations";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function CreateForm(props) {
  const { CreatedSurvey, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [titleChangeValue, setTitleChangeValue] = useState("");
  const [descriptionChangeValue, setDescriptionChangeValue] = useState("");
  const submitButtonOnClick = async () => {
    await client.graphql({
      query: createSurvey.replaceAll("__typename", ""),
      variables: {
        input: {
          author: authAttributes["email"],
          name: titleChangeValue,
          description: descriptionChangeValue,
        },
      },
    });
  };
  const cancelButtonOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <View
      width="320px"
      height="395px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateForm")}
      {...rest}
    >
      <View
        width="320px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        border="2px SOLID rgba(4,125,149,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(188,236,245,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="32px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="288px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="15px"
        left="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Survey"
        {...getOverrideProps(overrides, "Create Survey")}
      ></Text>
      <Button
        width="114px"
        height="unset"
        position="absolute"
        border="2px SOLID rgba(0,85,102,1)"
        padding="6px 14px 6px 14px"
        top="336px"
        left="190px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Submit"
        onClick={() => {
          submitButtonOnClick();
        }}
        {...getOverrideProps(overrides, "Submit Button")}
      ></Button>
      <Button
        width="114px"
        height="unset"
        position="absolute"
        border="2px SOLID rgba(0,85,102,1)"
        padding="6px 14px 6px 14px"
        top="336px"
        left="16px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Cancel"
        onClick={() => {
          cancelButtonOnClick();
        }}
        {...getOverrideProps(overrides, "Cancel Button")}
      ></Button>
      <TextField
        width="300px"
        height="unset"
        label="Title"
        placeholder="Survey Title"
        position="absolute"
        top="63px"
        left="10px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={titleChangeValue}
        onChange={(event) => {
          setTitleChangeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TitleChange")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Description"
        placeholder="Survey Description"
        position="absolute"
        top="151px"
        left="10px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={descriptionChangeValue}
        onChange={(event) => {
          setDescriptionChangeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "DescriptionChange")}
      ></TextField>
    </View>
  );
}
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { deleteSurvey } from "../graphql/mutations";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function SurveyCard(props) {
  const { survey, overrides, ...rest } = props;
  const takeButtonOnClick = useNavigateAction({
    type: "url",
    url: `${"/take/"}${survey?.id}`,
  });
  const deleteButtonOnClick = async () => {
    await client.graphql({
      query: deleteSurvey.replaceAll("__typename", ""),
      variables: {
        input: {
          id: survey?.id,
        },
      },
    });
  };
  const deleteButtonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  const editButtonOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit/"}${survey?.id}`,
  });
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
      {...getOverrideProps(overrides, "SurveyCard")}
      {...rest}
    >
      <Image
        width="320px"
        height="220px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={survey?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="5px"
        direction="column"
        width="320px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="221px"
        left="0px"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="2px 0px 2px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={survey?.name}
            {...getOverrideProps(overrides, "Title")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={survey?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="200"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={survey?.author}
          {...getOverrideProps(overrides, "Author")}
        ></Text>
      </Flex>
      <Button
        width="240px"
        height="unset"
        position="absolute"
        top="341px"
        left="40px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Take Survey"
        onClick={() => {
          takeButtonOnClick();
        }}
        {...getOverrideProps(overrides, "Take Button")}
      ></Button>
      <Button
        width="64px"
        height="29px"
        position="absolute"
        top="8px"
        left="8px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Delete"
        onClick={() => {
          deleteButtonOnClick();
        }}
        onMouseUp={() => {
          deleteButtonOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Delete Button")}
      ></Button>
      <Button
        width="64px"
        height="29px"
        position="absolute"
        top="8px"
        left="248px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Edit"
        onClick={() => {
          editButtonOnClick();
        }}
        {...getOverrideProps(overrides, "Edit Button")}
      ></Button>
    </View>
  );
}

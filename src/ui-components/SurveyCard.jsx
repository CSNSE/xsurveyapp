/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function SurveyCard(props) {
  const { survey, overrides, ...rest } = props;
  return (
    <Flex
      gap="1px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 8px 0px"
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
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="5px"
        direction="column"
        width="320px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
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
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Take Survey"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}

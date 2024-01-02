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
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
const client = generateClient();
export default function SurveyCard(props) {
  const { survey, overrides, ...rest } = props;
  const editOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit/"}${survey?.id}`,
  });
  const deleteOnClick = async () => {
    await client.graphql({
      query: deleteSurvey.replaceAll("__typename", ""),
      variables: {
        input: {
          id: survey?.id,
        },
      },
    });
  };
  const deleteOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: `${"/take/"}${survey?.id}`,
  });
  return (
    <Flex
      gap="1px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
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
        shrink="0"
        position="relative"
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
        shrink="0"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Image
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="s3://iconsbucket163253-staging.s3.amazonaws.com/public/pencil.png?AWSAccessKeyId=ASIAUGRFWSJRV3WLWCRG&Expires=1704205744&Signature=UsAyilGcFAAWtzq4s%2BMaXfjvT3E%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDh0i%2BYydFsSHBpNXvL9Cb5NQqnAtFumbRwUjDoYw7JsQIhAKDCw3%2B%2FziTzkpr2Z8OAcqXL%2FvQsxp4lijkUXRB2Ycf8KsQECEcQABoMMjg4OTE1NjI0NTQ3Igyv%2FvhUU4yNjDp5npMqoQQDxNlgEearKnZflSMsoh3c%2FJZ0T5rXy9UL%2FRX6FDlCXYLosB7ysxIoxTGQPQ4gaQO0I0HlsczZexOa5czamXX0VAJsaKYM1P0NWI3Efj6dq48vQbWuVuruIUT1R%2Fx3ohBaXW%2FclYcjII9ifvhNM0GEBqu8VngEMWs5PrqXt5GW%2F156nWvlXkgT9eBonSE%2BxQ%2By0NUT6HLXeVgTdO1vStOaadDecqHWkS5yvJUETziYKOM5Ac4eRKrO5SJVRdnU%2BvxLRcY9t%2FfDy1KDT37I%2FdNcQqeAPKxHkjtC2KBqXBm%2FmLu8YS1TKsXO7IhvNCosner56trP%2FevlyD9D8I6q2TYlxo4u1gFPq53I79rLQtFqknUEL5NcPCI2Lh%2BOA%2B5Fk3fB6a93aXZQDAQDRse9hPJMhU8GDrebTCz%2BAEFdtMZSWio0FELL%2BnQBn6w2Nq%2FHc6OyIF1oYHyRbwovUdRlennV6j2dNin6j6SFKVxk%2BGcRdA9Od7sTnmDjKBOm1sfel5W1ozlrnX2H35jfdY0sIyYwoDNk%2BaeoUVvZjWL4D5Lq84Uagb4ISD8nS%2B%2BafH9xCt%2B%2B6cqU2Q8%2FKvd7PYjvYfgF%2FGa5aS0GfvBWd4ze9oqGkdqyCxaOaX7fVZyIHZ2btkbxlVYJKYdw2y5FLQKklDl8QQLZ2%2Five6h1V86n%2Bp1fZXdQWM5nkOWoZGgue%2BzT9NbwAt2LvzxwD%2FFAWS%2FlmNS1IDDlrtCsBjqEApMBYOr3YYx%2BQ2DaDxN29xqp8vY%2FvKz4C%2FStp1ArbmFDHBU%2BReqy0nS6Ohhowhv6KHvVcsc2a%2FNHdoo0uDb3OLIPsel%2B1RftSPFeR7XPEhe0dBJZ%2FeG0PQv5MpMlrH%2Bbs%2FjJBF4teOXowkAiUMOad0RKxJbcXtMv3wY0IYeiYGSQD6GUuNEprhqbRvrYXO7XVzrbpXTB%2FcjgITat94iqTCaJnj3wh3MqymK8TWhi6Y05%2BmIiKASiNJGFcyPEwBtJqqGYQ%2Fl2e6YEiabTZfEd4VpKN3%2FCZTkc2qZveeFxizUYcNcsq3TlUcnUhu%2BSen3AiDeT4%2Ba59g1H4rOOFRqQ5Roew%2Fql"
          onClick={() => {
            editOnClick();
          }}
          {...getOverrideProps(overrides, "edit")}
        ></Image>
        <Image
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="s3://iconsbucket163253-staging.s3.amazonaws.com/public/trashcan.png?AWSAccessKeyId=ASIAUGRFWSJRV3WLWCRG&Expires=1704205711&Signature=yqtbUK%2FthaTWQGeU8BHe4PQ5w8g%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDh0i%2BYydFsSHBpNXvL9Cb5NQqnAtFumbRwUjDoYw7JsQIhAKDCw3%2B%2FziTzkpr2Z8OAcqXL%2FvQsxp4lijkUXRB2Ycf8KsQECEcQABoMMjg4OTE1NjI0NTQ3Igyv%2FvhUU4yNjDp5npMqoQQDxNlgEearKnZflSMsoh3c%2FJZ0T5rXy9UL%2FRX6FDlCXYLosB7ysxIoxTGQPQ4gaQO0I0HlsczZexOa5czamXX0VAJsaKYM1P0NWI3Efj6dq48vQbWuVuruIUT1R%2Fx3ohBaXW%2FclYcjII9ifvhNM0GEBqu8VngEMWs5PrqXt5GW%2F156nWvlXkgT9eBonSE%2BxQ%2By0NUT6HLXeVgTdO1vStOaadDecqHWkS5yvJUETziYKOM5Ac4eRKrO5SJVRdnU%2BvxLRcY9t%2FfDy1KDT37I%2FdNcQqeAPKxHkjtC2KBqXBm%2FmLu8YS1TKsXO7IhvNCosner56trP%2FevlyD9D8I6q2TYlxo4u1gFPq53I79rLQtFqknUEL5NcPCI2Lh%2BOA%2B5Fk3fB6a93aXZQDAQDRse9hPJMhU8GDrebTCz%2BAEFdtMZSWio0FELL%2BnQBn6w2Nq%2FHc6OyIF1oYHyRbwovUdRlennV6j2dNin6j6SFKVxk%2BGcRdA9Od7sTnmDjKBOm1sfel5W1ozlrnX2H35jfdY0sIyYwoDNk%2BaeoUVvZjWL4D5Lq84Uagb4ISD8nS%2B%2BafH9xCt%2B%2B6cqU2Q8%2FKvd7PYjvYfgF%2FGa5aS0GfvBWd4ze9oqGkdqyCxaOaX7fVZyIHZ2btkbxlVYJKYdw2y5FLQKklDl8QQLZ2%2Five6h1V86n%2Bp1fZXdQWM5nkOWoZGgue%2BzT9NbwAt2LvzxwD%2FFAWS%2FlmNS1IDDlrtCsBjqEApMBYOr3YYx%2BQ2DaDxN29xqp8vY%2FvKz4C%2FStp1ArbmFDHBU%2BReqy0nS6Ohhowhv6KHvVcsc2a%2FNHdoo0uDb3OLIPsel%2B1RftSPFeR7XPEhe0dBJZ%2FeG0PQv5MpMlrH%2Bbs%2FjJBF4teOXowkAiUMOad0RKxJbcXtMv3wY0IYeiYGSQD6GUuNEprhqbRvrYXO7XVzrbpXTB%2FcjgITat94iqTCaJnj3wh3MqymK8TWhi6Y05%2BmIiKASiNJGFcyPEwBtJqqGYQ%2Fl2e6YEiabTZfEd4VpKN3%2FCZTkc2qZveeFxizUYcNcsq3TlUcnUhu%2BSen3AiDeT4%2Ba59g1H4rOOFRqQ5Roew%2Fql"
          onClick={() => {
            deleteOnClick();
          }}
          onMouseUp={() => {
            deleteOnMouseUp();
          }}
          {...getOverrideProps(overrides, "delete")}
        ></Image>
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
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { deleteTutoringEvent } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Text, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function DisplayTutoringEvent(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const deleteOnClick = async () => {
    await client.graphql({
      query: deleteTutoringEvent.replaceAll("__typename", ""),
      variables: {
        input: {
          id: tutoringEvent?.id,
        },
      },
    });
  };
  const deleteOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  const updateOnClick = useNavigateAction({ type: "url", url: "/update" });
  return (
    <View
      width="725px"
      height="254px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DisplayTutoringEvent")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="25px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="240px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="56px"
        left="119px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tutoringEvent?.studentName}
        {...getOverrideProps(overrides, "Student Name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="240px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="56px"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Name:"
        {...getOverrideProps(overrides, "Name:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="240px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="121px"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Date:"
        {...getOverrideProps(overrides, "Date:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="240px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="175px"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Concepts Covered:"
        {...getOverrideProps(overrides, "Concepts Covered:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="25px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="240px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="121px"
        left="119px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tutoringEvent?.date}
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="25px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="316px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="175px"
        left="226px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tutoringEvent?.conceptsCovered}
        {...getOverrideProps(overrides, "Concepts Covered")}
      ></Text>
      <Button
        width="77px"
        height="32px"
        position="absolute"
        top="183px"
        left="617px"
        backgroundColor="rgba(13,26,38,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Delete"
        onClick={() => {
          deleteOnClick();
        }}
        onMouseUp={() => {
          deleteOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Delete")}
      ></Button>
      <Button
        width="77px"
        height="32px"
        position="absolute"
        top="36px"
        left="617px"
        backgroundColor="rgba(13,26,38,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Update"
        onClick={() => {
          updateOnClick();
        }}
        {...getOverrideProps(overrides, "Update")}
      ></Button>
    </View>
  );
}

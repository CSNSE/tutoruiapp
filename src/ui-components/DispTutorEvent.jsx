/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { deleteTutoringEvent } from "../graphql/mutations";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function DispTutorEvent(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const deleteOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  const deleteOnMouseDown = async () => {
    await client.graphql({
      query: deleteTutoringEvent.replaceAll("__typename", ""),
      variables: {
        input: {
          id: tutoringEvent?.id,
        },
      },
    });
  };
  const updateOnClick = useNavigateAction({
    type: "url",
    url: `${"/update/"}${tutoringEvent?.id}`,
  });
  return (
    <View
      width="717px"
      height="176px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DispTutorEvent")}
      {...rest}
    >
      <Button
        width="77px"
        height="32px"
        position="absolute"
        top="110px"
        left="608px"
        backgroundColor="rgba(13,26,38,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Delete"
        onMouseUp={() => {
          deleteOnMouseUp();
        }}
        onMouseDown={() => {
          deleteOnMouseDown();
        }}
        {...getOverrideProps(overrides, "Delete")}
      ></Button>
      <Button
        width="77px"
        height="32px"
        position="absolute"
        top="23px"
        left="608px"
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
        top="31px"
        left="207px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tutoringEvent?.studentName}
        {...getOverrideProps(overrides, "Student Name")}
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
        top="76px"
        left="206px"
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
        top="118px"
        left="207px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tutoringEvent?.conceptsCovered}
        {...getOverrideProps(overrides, "Concepts Covered")}
      ></Text>
      <Image
        width="164px"
        height="176px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={tutoringEvent?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}

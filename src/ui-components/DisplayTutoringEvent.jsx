/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function DisplayTutoringEvent(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="214px"
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
        fontSize="16px"
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
        top="52px"
        left="44px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tutoringEvent?.studentName}
        {...getOverrideProps(overrides, "Student Name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
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
        top="95px"
        left="44px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tutoringEvent?.date}
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
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
        top="138px"
        left="44px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tutoringEvent?.conceptsCovered}
        {...getOverrideProps(overrides, "Concepts Covered")}
      ></Text>
    </View>
  );
}

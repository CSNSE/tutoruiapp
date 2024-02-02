/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function DispTDays(props) {
  const { day, overrides, ...rest } = props;
  return (
    <View
      width="713px"
      height="176px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DispTDays")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="35px"
        left="52px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={day?.Date}
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="102px"
        left="52px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={day?.Time}
        {...getOverrideProps(overrides, "Time")}
      ></Text>
    </View>
  );
}

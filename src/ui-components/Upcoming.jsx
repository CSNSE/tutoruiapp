/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Upcoming(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="713px"
      height="109px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Upcoming")}
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
        width="274px"
        height="36px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="36px"
        left="217px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Upcoming Events"
        {...getOverrideProps(overrides, "Upcoming Events")}
      ></Text>
    </View>
  );
}

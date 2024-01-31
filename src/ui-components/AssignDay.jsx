/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
export default function AssignDay(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="713px"
      height="444px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AssignDay")}
      {...rest}
    >
      <TextField
        width="597px"
        height="unset"
        placeholder="Tutor Email "
        position="absolute"
        top="52px"
        left="57px"
        label=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField4416737")}
      ></TextField>
      <TextField
        width="597px"
        height="unset"
        placeholder="Time: Morning/Break/Flex/Afterschool, etc. "
        position="absolute"
        top="232px"
        left="57px"
        label=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField4416746")}
      ></TextField>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="258px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="188px"
        left="57px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Date"
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="367px"
        left="311px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}

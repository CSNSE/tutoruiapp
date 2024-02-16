/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createTutoringEvent } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Icon, Text, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function CustomCreate(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const [
    textFieldFourFiveFiveTwoEightFiveEightTwoValue,
    setTextFieldFourFiveFiveTwoEightFiveEightTwoValue,
  ] = useState("");
  const [
    textFieldFourFiveFiveTwoEightSixZeroSevenValue,
    setTextFieldFourFiveFiveTwoEightSixZeroSevenValue,
  ] = useState("");
  const [
    textFieldFourFiveFiveTwoEightSixOneFiveValue,
    setTextFieldFourFiveFiveTwoEightSixOneFiveValue,
  ] = useState("");
  const [
    textFieldFourFiveFiveTwoEightSixTwoTwoValue,
    setTextFieldFourFiveFiveTwoEightSixTwoTwoValue,
  ] = useState("");
  const buttonFourFiveFiveTwoEightFiveSevenTwoOnMouseDown = async () => {
    await client.graphql({
      query: createTutoringEvent.replaceAll("__typename", ""),
      variables: {
        input: {
          studentName: textFieldFourFiveFiveTwoEightFiveEightTwoValue,
          date: textFieldFourFiveFiveTwoEightSixZeroSevenValue,
          conceptsCovered: textFieldFourFiveFiveTwoEightSixOneFiveValue,
          image: textFieldFourFiveFiveTwoEightSixTwoTwoValue,
        },
      },
    });
  };
  const buttonFourFiveFiveTwoEightFiveSevenTwoOnMouseUp = useNavigateAction({
    type: "url",
    url: "/",
  });
  const buttonFourFiveFiveTwoEightFiveSevenSixOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <View
      width="518px"
      height="433px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CustomCreate")}
      {...rest}
    >
      <Icon
        width="426px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 426.00000512599763, height: 1 }}
        paths={[
          {
            d: "M-0.000155335 1.5L426 1.5L426 -1.5L-0.000155335 -1.5L-0.000155335 1.5Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 0px - 83.5px)"
        left="8.88%"
        right="8.88%"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Icon
        width="426px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 426.00000512599763, height: 1 }}
        paths={[
          {
            d: "M-0.000155335 1.5L426 1.5L426 -1.5L-0.000155335 -1.5L-0.000155335 1.5Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 0px - 19.5px)"
        left="8.88%"
        right="8.88%"
        {...getOverrideProps(overrides, "Line 2")}
      ></Icon>
      <Icon
        width="426px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 426.00000512599763, height: 1 }}
        paths={[
          {
            d: "M-0.000155335 1.5L426 1.5L426 -1.5L-0.000155335 -1.5L-0.000155335 1.5Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 0px - -60.5px)"
        left="8.88%"
        right="8.88%"
        {...getOverrideProps(overrides, "Line 3")}
      ></Icon>
      <Icon
        width="426px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 426.00000512599763, height: 1 }}
        paths={[
          {
            d: "M-0.000155335 1.5L426 1.5L426 -1.5L-0.000155335 -1.5L-0.000155335 1.5Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 0px - -140.5px)"
        left="8.88%"
        right="8.88%"
        {...getOverrideProps(overrides, "Line 4")}
      ></Icon>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="380px"
        left="336px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit"
        onMouseDown={() => {
          buttonFourFiveFiveTwoEightFiveSevenTwoOnMouseDown();
        }}
        onMouseUp={() => {
          buttonFourFiveFiveTwoEightFiveSevenTwoOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Button45528572")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="380px"
        left="92px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Cancel"
        onClick={() => {
          buttonFourFiveFiveTwoEightFiveSevenSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button45528576")}
      ></Button>
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
        width="332px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25px"
        left="93px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Event Create Form"
        {...getOverrideProps(overrides, "Event Create Form")}
      ></Text>
      <TextField
        width="426px"
        height="unset"
        label="Student Tutored"
        placeholder="Student Name"
        position="absolute"
        top="93px"
        left="46px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        value={textFieldFourFiveFiveTwoEightFiveEightTwoValue}
        onChange={(event) => {
          setTextFieldFourFiveFiveTwoEightFiveEightTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField45528582")}
      ></TextField>
      <TextField
        width="426px"
        height="unset"
        label="Student Tutored"
        placeholder="Date: (YYYY-MM-DD)"
        position="absolute"
        top="157px"
        left="46px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        value={textFieldFourFiveFiveTwoEightSixZeroSevenValue}
        onChange={(event) => {
          setTextFieldFourFiveFiveTwoEightSixZeroSevenValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField45528607")}
      ></TextField>
      <TextField
        width="426px"
        height="unset"
        label="Student Tutored"
        placeholder="Concepts Covered"
        position="absolute"
        top="237px"
        left="46px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        value={textFieldFourFiveFiveTwoEightSixOneFiveValue}
        onChange={(event) => {
          setTextFieldFourFiveFiveTwoEightSixOneFiveValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField45528615")}
      ></TextField>
      <TextField
        width="426px"
        height="unset"
        label="Student Tutored"
        placeholder="Images"
        position="absolute"
        top="317px"
        left="46px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        value={textFieldFourFiveFiveTwoEightSixTwoTwoValue}
        onChange={(event) => {
          setTextFieldFourFiveFiveTwoEightSixTwoTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField45528622")}
      ></TextField>
    </View>
  );
}

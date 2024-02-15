/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTutoringEvent } from "../graphql/mutations";
import { Button, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function CreateEvent(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldFourTwoFiveEightSevenNineNineValue,
    setTextFieldFourTwoFiveEightSevenNineNineValue,
  ] = useState("");
  const [
    textFieldFourTwoFiveEightEightZeroZeroValue,
    setTextFieldFourTwoFiveEightEightZeroZeroValue,
  ] = useState("");
  const [
    textFieldFourTwoFiveEightEightZeroOneValue,
    setTextFieldFourTwoFiveEightEightZeroOneValue,
  ] = useState("");
  const [
    textFieldFourTwoFiveEightEightTwoOneValue,
    setTextFieldFourTwoFiveEightEightTwoOneValue,
  ] = useState("");
  const gobackOnClick = useNavigateAction({ type: "url", url: "/" });
  const makeOnClick = async () => {
    await client.graphql({
      query: createTutoringEvent.replaceAll("__typename", ""),
      variables: {
        input: {
          studentName: textFieldFourTwoFiveEightSevenNineNineValue,
          date: textFieldFourTwoFiveEightEightZeroZeroValue,
          conceptsCovered: textFieldFourTwoFiveEightEightZeroOneValue,
          image: textFieldFourTwoFiveEightEightTwoOneValue,
        },
      },
    });
  };
  const makeOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  return (
    <View
      width="730px"
      height="403px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateEvent")}
      {...rest}
    >
      <TextField
        width="426px"
        height="unset"
        label="Student Tutored"
        placeholder="Christian Diaz"
        position="absolute"
        top="48px"
        left="39px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourTwoFiveEightSevenNineNineValue}
        onChange={(event) => {
          setTextFieldFourTwoFiveEightSevenNineNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4258799")}
      ></TextField>
      <TextField
        width="426px"
        height="unset"
        label="Date"
        placeholder="YYYY-MM-DD"
        position="absolute"
        top="127px"
        left="39px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourTwoFiveEightEightZeroZeroValue}
        onChange={(event) => {
          setTextFieldFourTwoFiveEightEightZeroZeroValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4258800")}
      ></TextField>
      <TextField
        width="426px"
        height="unset"
        label="Concepts Covered"
        position="absolute"
        top="204px"
        left="39px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourTwoFiveEightEightZeroOneValue}
        onChange={(event) => {
          setTextFieldFourTwoFiveEightEightZeroOneValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4258801")}
      ></TextField>
      <TextField
        width="426px"
        height="unset"
        label="Image"
        position="absolute"
        top="283px"
        left="39px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourTwoFiveEightEightTwoOneValue}
        onChange={(event) => {
          setTextFieldFourTwoFiveEightEightTwoOneValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField4258821")}
      ></TextField>
      <Button
        width="31px"
        height="32px"
        position="absolute"
        top="48px"
        left="633px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="X"
        onClick={() => {
          gobackOnClick();
        }}
        {...getOverrideProps(overrides, "goback")}
      ></Button>
      <Button
        width="31px"
        height="32px"
        position="absolute"
        top="335px"
        left="627px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="+"
        onClick={() => {
          makeOnClick();
        }}
        onMouseUp={() => {
          makeOnMouseUp();
        }}
        {...getOverrideProps(overrides, "make")}
      ></Button>
    </View>
  );
}

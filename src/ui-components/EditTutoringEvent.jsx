/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { updateTutoringEvent } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function EditTutoringEvent(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const [
    textFieldFourTwoFourZeroTwoSevenSixOneValue,
    setTextFieldFourTwoFourZeroTwoSevenSixOneValue,
  ] = useState("");
  const [
    textFieldFourTwoFourZeroTwoSevenSixTwoValue,
    setTextFieldFourTwoFourZeroTwoSevenSixTwoValue,
  ] = useState("");
  const [
    textFieldFourTwoFourZeroTwoSevenSixThreeValue,
    setTextFieldFourTwoFourZeroTwoSevenSixThreeValue,
  ] = useState("");
  const makeOnClick = async () => {
    await client.graphql({
      query: updateTutoringEvent.replaceAll("__typename", ""),
      variables: {
        input: {
          studentName: textFieldFourTwoFourZeroTwoSevenSixOneValue,
          date: textFieldFourTwoFourZeroTwoSevenSixTwoValue,
          conceptsCovered: textFieldFourTwoFourZeroTwoSevenSixThreeValue,
          id: te?.id,
        },
        id: te?.id,
        model: TutoringEvent,
        schema: schema,
      },
      
    });

  };
  const makeOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  const gobackOnClick = useNavigateAction({ type: "url", url: "/" });
  useEffect(() => {
    if (
      textFieldFourTwoFourZeroTwoSevenSixOneValue === "" &&
      tutoringEvent !== undefined &&
      tutoringEvent?.studentName !== undefined
    )
      setTextFieldFourTwoFourZeroTwoSevenSixOneValue(
        tutoringEvent?.studentName
      );
  }, [tutoringEvent]);
  useEffect(() => {
    if (
      textFieldFourTwoFourZeroTwoSevenSixTwoValue === "" &&
      tutoringEvent !== undefined &&
      tutoringEvent?.date !== undefined
    )
      setTextFieldFourTwoFourZeroTwoSevenSixTwoValue(tutoringEvent?.date);
  }, [tutoringEvent]);
  useEffect(() => {
    if (
      textFieldFourTwoFourZeroTwoSevenSixThreeValue === "" &&
      tutoringEvent !== undefined &&
      tutoringEvent?.conceptsCovered !== undefined
    )
      setTextFieldFourTwoFourZeroTwoSevenSixThreeValue(
        tutoringEvent?.conceptsCovered
      );
  }, [tutoringEvent]);
  return (
    <View
      width="725px"
      height="296px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EditTutoringEvent")}
      {...rest}
    >
      <View
        width="564px"
        height="230px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="44px"
        left="32px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 438")}
      >
        <TextField
          width="426px"
          height="unset"
          label="Student Tutored"
          placeholder="Christian Diaz"
          position="absolute"
          top="0px"
          left="0px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourTwoFourZeroTwoSevenSixOneValue}
          onChange={(event) => {
            setTextFieldFourTwoFourZeroTwoSevenSixOneValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField42402761")}
        ></TextField>
        <TextField
          width="426px"
          height="unset"
          label="Date"
          placeholder="12/25/23 @ Flex"
          position="absolute"
          top="79px"
          left="0px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourTwoFourZeroTwoSevenSixTwoValue}
          onChange={(event) => {
            setTextFieldFourTwoFourZeroTwoSevenSixTwoValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField42402762")}
        ></TextField>
        <TextField
          width="426px"
          height="unset"
          label="Concepts Covered"
          position="absolute"
          top="156px"
          left="0px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldFourTwoFourZeroTwoSevenSixThreeValue}
          onChange={(event) => {
            setTextFieldFourTwoFourZeroTwoSevenSixThreeValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField42402763")}
        ></TextField>
      </View>
      <Button
        width="64px"
        height="32px"
        position="absolute"
        top="242px"
        left="624px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Save"
        onClick={() => {
          makeOnClick();
        }}
        onMouseUp={() => {
          makeOnMouseUp();
        }}
        {...getOverrideProps(overrides, "make")}
      ></Button>
      <Button
        width="31px"
        height="32px"
        position="absolute"
        top="26px"
        left="657px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="X"
        onClick={() => {
          gobackOnClick();
        }}
        {...getOverrideProps(overrides, "goback")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="265px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18px"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tutoringEvent?.id}
        {...getOverrideProps(overrides, "Event ID")}
      ></Text>
    </View>
  );
}

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
import { Button, SelectField, TextField, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
const client = generateClient();
export default function CreateTutoringEvent(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const [
    textFieldFourOneSixZeroTwoFiveEightFourValue,
    setTextFieldFourOneSixZeroTwoFiveEightFourValue,
  ] = useState("");
  const [
    textFieldFourOneNineTwoOneTwoFiveFourValue,
    setTextFieldFourOneNineTwoOneTwoFiveFourValue,
  ] = useState("");
  const [
    textFieldFourOneSixZeroTwoFourSevenSixValue,
    setTextFieldFourOneSixZeroTwoFourSevenSixValue,
  ] = useState("");
  const buttonFourOneSixZeroTwoFiveNineOneOnClick = async () => {
    await client.graphql({
      query: createTutoringEvent.replaceAll("__typename", ""),
      variables: {
        input: {
          conceptsCovered: textFieldFourOneSixZeroTwoFiveEightFourValue,
          month: "date",
          date: textFieldFourOneNineTwoOneTwoFiveFourValue,
          studentName: textFieldFourOneSixZeroTwoFourSevenSixValue,
        },
      },
    });
  };
  const buttonFourOneNineTwoOneTwoSixTwoOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <View
      width="430px"
      height="296px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CreateTutoringEvent")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="430px"
        height="296px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <View
          width="430px"
          height="296px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "CreateTutoringEvent41602464")}
        >
          <View
            width="378px"
            height="230px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="38px"
            left="23px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 438")}
          >
            <TextField
              width="300px"
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
              value={textFieldFourOneSixZeroTwoFourSevenSixValue}
              onChange={(event) => {
                setTextFieldFourOneSixZeroTwoFourSevenSixValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField41602476")}
            ></TextField>
            <TextField
              width="300px"
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
              value={textFieldFourOneNineTwoOneTwoFiveFourValue}
              onChange={(event) => {
                setTextFieldFourOneNineTwoOneTwoFiveFourValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField41921254")}
            ></TextField>
            <TextField
              width="300px"
              height="unset"
              label="Concepts Covered"
              placeholder="Arrays and while loops"
              position="absolute"
              top="156px"
              left="0px"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldFourOneSixZeroTwoFiveEightFourValue}
              onChange={(event) => {
                setTextFieldFourOneSixZeroTwoFiveEightFourValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField41602584")}
            ></TextField>
            <SelectField
              width="95px"
              height="unset"
              placeholder="10"
              position="absolute"
              top="76px"
              left="110px"
              label=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              date={tutoringEvent?.date}
              {...getOverrideProps(overrides, "SelectField")}
            ></SelectField>
            <Button
              width="31px"
              height="32px"
              position="absolute"
              top="198px"
              left="347px"
              size="default"
              isDisabled={false}
              variation="primary"
              children="+"
              onClick={() => {
                buttonFourOneSixZeroTwoFiveNineOneOnClick();
              }}
              {...getOverrideProps(overrides, "Button41602591")}
            ></Button>
          </View>
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="14px"
            left="380px"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Button
            width="31px"
            height="32px"
            position="absolute"
            top="10px"
            left="370px"
            size="default"
            isDisabled={false}
            variation="primary"
            children="X"
            onClick={() => {
              buttonFourOneNineTwoOneTwoSixTwoOnClick();
            }}
            {...getOverrideProps(overrides, "Button41921262")}
          ></Button>
        </View>
      </View>
    </View>
  );
}

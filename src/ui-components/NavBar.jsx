/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth, useNavigateAction } from "./utils";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const buttonFourOneSixZeroTwoSixThreeTwoOnClick = useNavigateAction({
    type: "url",
    url: "/new",
  });
  const buttonFourOneFiveSevenTwoFourFiveSixOnClick = useNavigateAction({
    type: "url",
    url: "/new",
  });
  const buttonFourOneSixZeroTwoSixThreeSevenOnClick = useNavigateAction({
    type: "url",
    url: "/new",
  });
  return (
    <View
      width="430px"
      height="76px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="85px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="27px"
        left="-5px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={authAttributes["email"]}
        {...getOverrideProps(overrides, "Name:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="187px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="27px"
        left="164px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tutoring Hours Logged:&#xA;"
        {...getOverrideProps(overrides, "Tutoring Hours Logged:")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="-94.5px"
        left="643px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="+"
        onClick={() => {
          buttonFourOneSixZeroTwoSixThreeTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Button41602632")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="18px"
        left="637px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="+"
        onClick={() => {
          buttonFourOneFiveSevenTwoFourFiveSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button41572456")}
      ></Button>
      <Button
        width="31px"
        height="32px"
        position="absolute"
        top="22px"
        left="378px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="+"
        onClick={() => {
          buttonFourOneSixZeroTwoSixThreeSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button41602637")}
      ></Button>
    </View>
  );
}

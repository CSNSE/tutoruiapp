/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuth,
  useAuthSignOutAction,
  useNavigateAction,
} from "./utils";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const createOnClick = useNavigateAction({ type: "url", url: "/new" });
  const buttonOnClick = useAuthSignOutAction({ global: false });
  return (
    <View
      width="725px"
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
        top="24px"
        left="185px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={authAttributes["email"]}
        {...getOverrideProps(overrides, "name")}
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
        width="85px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="24px"
        left="555px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="#"
        {...getOverrideProps(overrides, "#")}
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
        top="24px"
        left="391px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tutoring Hours Logged:&#xA;"
        {...getOverrideProps(overrides, "Tutoring Hours Logged:")}
      ></Text>
      <Button
        width="31px"
        height="32px"
        position="absolute"
        top="19px"
        left="680px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="+"
        onClick={() => {
          createOnClick();
        }}
        {...getOverrideProps(overrides, "Create")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="23px"
        left="18px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Sign Out"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}

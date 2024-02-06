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
      width="2014px"
      height="289px"
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
        fontSize="40px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="60px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="111px"
        height="35px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="121px"
        left="327px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={authAttributes["name"]}
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="60px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="85px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="134px"
        left="1635px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="#"
        {...getOverrideProps(overrides, "#")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="45px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="409px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="134px"
        left="1212px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tutoring Hours Logged:&#xA;"
        {...getOverrideProps(overrides, "Tutoring Hours Logged:")}
      ></Text>
      <Button
        width="126px"
        height="128px"
        position="absolute"
        top="81px"
        left="1806px"
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
        width="186px"
        height="92px"
        position="absolute"
        top="98px"
        left="42px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Sign Out"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="50px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="75px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="513px"
        height="105px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="76px"
        left="581px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="CS Honors Society Tutoring Log"
        {...getOverrideProps(overrides, "CS Honors Society Tutoring Log")}
      ></Text>
    </View>
  );
}

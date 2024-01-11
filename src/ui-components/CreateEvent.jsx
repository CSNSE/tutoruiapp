/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function CreateEvent(props) {
  const { overrides, ...rest } = props;
  const gobackOnClick = useNavigateAction({ type: "url", url: "/" });
  const makeOnClick = useNavigateAction({ type: "url", url: "/" });
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
        {...getOverrideProps(overrides, "TextField4258799")}
      ></TextField>
      <TextField
        width="426px"
        height="unset"
        label="Date"
        placeholder="12/25/23 @ Flex"
        position="absolute"
        top="127px"
        left="39px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
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
        {...getOverrideProps(overrides, "make")}
      ></Button>
    </View>
  );
}

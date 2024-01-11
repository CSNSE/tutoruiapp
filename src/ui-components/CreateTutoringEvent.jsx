/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "./utils";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function CreateTutoringEvent(props) {
  const { tutoringEvent, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        TextField41602476: {},
        TextField41921254: {},
        TextField41602584: {},
        "Frame 438": {},
        goback: {},
        CreateTutoringEvent41602464: {},
        "Group 2": {},
        CreateTutoringEvent: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const gobackOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <View
      width="725px"
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
        width="725px"
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
          width="725px"
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
            width="526px"
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
              {...getOverrideProps(overrides, "TextField41602476")}
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
              {...getOverrideProps(overrides, "TextField41921254")}
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
              {...getOverrideProps(overrides, "TextField41602584")}
            ></TextField>
          </View>
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
        </View>
      </View>
    </View>
  );
}

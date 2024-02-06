/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SizedDispEvent(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <View
      width="725px"
      height="331px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SizedDispEvent")}
      {...rest}
    >
      <Icon
        width="35px"
        height="35px"
        viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
        paths={[
          {
            d: "M35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="51px"
        left="28px"
        {...getOverrideProps(overrides, "Ellipse 2")}
      ></Icon>
      <Icon
        width="35px"
        height="35px"
        viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
        paths={[
          {
            d: "M35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="148px"
        left="28px"
        {...getOverrideProps(overrides, "Ellipse 3")}
      ></Icon>
      <Icon
        width="35px"
        height="35px"
        viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
        paths={[
          {
            d: "M35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="245px"
        left="28px"
        {...getOverrideProps(overrides, "Ellipse 4")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="360px"
        height="26.5px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="64px"
        left="99px"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <Icon
          width="359.67px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 359.6720061497672, height: 1 }}
          paths={[
            {
              d: "M-0.00013115 1.5L359.672 1.5L359.672 -1.5L-0.00013115 -1.5L-0.00013115 1.5Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 0px - -13.25px)"
          left="0%"
          right="0.09%"
          {...getOverrideProps(overrides, "Line 144721307")}
        ></Icon>
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
          width="119px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tutor Name:"
          {...getOverrideProps(overrides, "Tutor Name:44721306")}
        ></Text>
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
          width="241px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="119px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={authAttributes["name"]}
          {...getOverrideProps(overrides, "Tutor Name:44731384")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="374px"
        height="142px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="118px"
        left="99px"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <Icon
          width="359.67px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 359.6720061497672, height: 1 }}
          paths={[
            {
              d: "M0 1.5L359.672 1.5L359.672 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 0px - 44px)"
          left="0%"
          right="3.83%"
          {...getOverrideProps(overrides, "Line 144721323")}
        ></Icon>
        <Icon
          width="359.67px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 359.6720061497672, height: 1 }}
          paths={[
            {
              d: "M0 1.5L359.672 1.5L359.672 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 0px - -14px)"
          left="0%"
          right="3.83%"
          {...getOverrideProps(overrides, "Line 2")}
        ></Icon>
        <Icon
          width="359.67px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 359.6720061497672, height: 1 }}
          paths={[
            {
              d: "M0 1.5L359.672 1.5L359.672 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 0px - -71px)"
          left="0%"
          right="3.83%"
          {...getOverrideProps(overrides, "Line 3")}
        ></Icon>
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
          width="153px"
          height="27px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Student Name:"
          {...getOverrideProps(overrides, "Student Name:44721315")}
        ></Text>
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
          width="231px"
          height="27px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="143px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={tutoringEvent?.studentName}
          {...getOverrideProps(overrides, "Student Name:44731385")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="54px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="177px"
        left="99px"
        {...getOverrideProps(overrides, "Group 5")}
      >
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
          width="54px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Date:"
          {...getOverrideProps(overrides, "Date:44721318")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="283px"
        height="23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="177px"
        left="153px"
        {...getOverrideProps(overrides, "Group 7")}
      >
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
          width="283px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={tutoringEvent?.date}
          {...getOverrideProps(overrides, "Date:44731389")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="183px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="231px"
        left="99px"
        {...getOverrideProps(overrides, "Group 6")}
      >
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
          width="183px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Concepts Covered:"
          {...getOverrideProps(overrides, "Concepts Covered:44721321")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="182px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="231px"
        left="282px"
        {...getOverrideProps(overrides, "Group 8")}
      >
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
          width="182px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={tutoringEvent?.conceptsCovered}
          {...getOverrideProps(overrides, "Concepts Covered:44731391")}
        ></Text>
      </View>
      <Image
        width="220px"
        height="261px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="35px"
        left="484px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}

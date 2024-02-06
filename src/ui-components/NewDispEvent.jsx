/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "./utils";
import { Divider, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function NewDispEvent(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <View
      width="2014px"
      height="777px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NewDispEvent")}
      {...rest}
    >
      <View
        width="2014px"
        height="777px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 443")}
      >
        <Icon
          width="91px"
          height="91px"
          viewBox={{ minX: 0, minY: 0, width: 91, height: 91 }}
          paths={[
            {
              d: "M91 45.5C91 70.629 70.629 91 45.5 91C20.371 91 0 70.629 0 45.5C0 20.371 20.371 0 45.5 0C70.629 0 91 20.371 91 45.5Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="150px"
          left="58px"
          {...getOverrideProps(overrides, "Ellipse 2")}
        ></Icon>
        <Icon
          width="91px"
          height="91px"
          viewBox={{ minX: 0, minY: 0, width: 91, height: 91 }}
          paths={[
            {
              d: "M91 45.5C91 70.629 70.629 91 45.5 91C20.371 91 0 70.629 0 45.5C0 20.371 20.371 0 45.5 0C70.629 0 91 20.371 91 45.5Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="343px"
          left="58px"
          {...getOverrideProps(overrides, "Ellipse 3")}
        ></Icon>
        <Icon
          width="91px"
          height="91px"
          viewBox={{ minX: 0, minY: 0, width: 91, height: 91 }}
          paths={[
            {
              d: "M91 45.5C91 70.629 70.629 91 45.5 91C20.371 91 0 70.629 0 45.5C0 20.371 20.371 0 45.5 0C70.629 0 91 20.371 91 45.5Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="536px"
          left="58px"
          {...getOverrideProps(overrides, "Ellipse 4")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="50px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="75px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="319px"
          height="56px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="94px"
          left="249px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tutor Name:"
          {...getOverrideProps(overrides, "Tutor Name:")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="50px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="75px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="360px"
          height="56px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="248px"
          left="249px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Student Name:"
          {...getOverrideProps(overrides, "Student Name:")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="50px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="75px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="137px"
          height="56px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="406px"
          left="249px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Date:"
          {...getOverrideProps(overrides, "Date:")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="50px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="75px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="467px"
          height="56px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="571px"
          left="241px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Concepts Covered:"
          {...getOverrideProps(overrides, "Concepts Covered:")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="60px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="858px"
          height="58px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="105px"
          left="575px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={authAttributes["name"]}
          {...getOverrideProps(overrides, "Name44651260")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="60px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="858px"
          height="58px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="259px"
          left="618px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={tutoringEvent?.studentName}
          {...getOverrideProps(overrides, "Name44651285")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="60px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="858px"
          height="58px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="582px"
          left="704px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={tutoringEvent?.conceptsCovered}
          {...getOverrideProps(overrides, "CC")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="60px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="858px"
          height="58px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="417px"
          left="386px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={tutoringEvent?.date}
          {...getOverrideProps(overrides, "Date")}
        ></Text>
        <Image
          width="587px"
          height="588px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="94px"
          left="1336px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Divider
          width="964px"
          position="absolute"
          top="163px"
          left="249px"
          size="large"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider44651273")}
        ></Divider>
        <Divider
          width="964px"
          position="absolute"
          top="316px"
          left="241px"
          size="large"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider44701297")}
        ></Divider>
        <Divider
          width="964px"
          position="absolute"
          top="471px"
          left="241px"
          size="large"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider44701299")}
        ></Divider>
        <Icon
          width="622.07px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 622.074951171875, height: 1 }}
          paths={[
            {
              d: "M0 0L622.075 0L622.075 -3L0 -3L0 0Z",
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
          top="calc(50% - 0px - -251.5px)"
          left="7.72%"
          right="61.39%"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
      </View>
    </View>
  );
}

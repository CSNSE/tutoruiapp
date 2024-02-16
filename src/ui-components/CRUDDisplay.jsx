/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { deleteTutoringEvent } from "../graphql/mutations";
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import Iconedit from "./Iconedit";
import Delete from "./Delete";
const client = generateClient();
export default function CRUDDisplay(props) {
  const { tutoringEvent, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const buttonFourFiveZeroTwoEightFiveOneSevenOnClick = useNavigateAction({
    type: "url",
    url: `${"/update/"}${tutoringEvent?.id}`,
  });
  const buttonFourFiveZeroTwoEightFiveThreeOneOnMouseDown = async () => {
    await client.graphql({
      query: deleteTutoringEvent.replaceAll("__typename", ""),
      variables: {
        input: {
          id: tutoringEvent?.id,
        },
      },
    });
  };
  const buttonFourFiveZeroTwoEightFiveThreeOneOnMouseUp = useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <View
      width="756px"
      height="331px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CRUDDisplay")}
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
        left="29px"
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
        left="29px"
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
        left="29px"
        {...getOverrideProps(overrides, "Ellipse 4")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="379.28px"
        height="26.5px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="64px"
        left="100px"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <Icon
          width="375.05px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 375.0510945885708, height: 1 }}
          paths={[
            {
              d: "M-0.000136758 1.5L375.051 1.5L375.051 -1.5L-0.000136758 -1.5L-0.000136758 1.5Z",
              stroke: "rgba(0,0,0,1)",
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
          left="1.12%"
          right="0%"
          {...getOverrideProps(overrides, "Line 144868405")}
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
          {...getOverrideProps(overrides, "Tutor Name:44868406")}
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
          {...getOverrideProps(overrides, "Tutor Name:44868407")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="379.28px"
        height="142px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="118px"
        left="100px"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <Icon
          width="375.05px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 375.0510945885708, height: 1 }}
          paths={[
            {
              d: "M0 1.5L375.051 1.5L375.051 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(0,0,0,1)",
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
          left="1.12%"
          right="0%"
          {...getOverrideProps(overrides, "Line 144868409")}
        ></Icon>
        <Icon
          width="375.05px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 375.0510945885708, height: 1 }}
          paths={[
            {
              d: "M0 1.5L375.051 1.5L375.051 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(0,0,0,1)",
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
          left="1.12%"
          right="0%"
          {...getOverrideProps(overrides, "Line 2")}
        ></Icon>
        <Icon
          width="375.05px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 375.0510945885708, height: 1 }}
          paths={[
            {
              d: "M0 1.5L375.051 1.5L375.051 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(0,0,0,1)",
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
          left="1.12%"
          right="0%"
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
          {...getOverrideProps(overrides, "Student Name:44868412")}
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
          {...getOverrideProps(overrides, "Student Name:44868413")}
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
        left="100px"
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
          {...getOverrideProps(overrides, "Date:44868415")}
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
        left="154px"
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
          {...getOverrideProps(overrides, "Date:44868417")}
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
        left="105px"
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
          {...getOverrideProps(overrides, "Concepts Covered:44868419")}
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
        left="288px"
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
          {...getOverrideProps(overrides, "Concepts Covered:44868421")}
        ></Text>
      </View>
      <Image
        width="178px"
        height="261px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="35px"
        left="541px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={tutoringEvent?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="40px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="287px"
        left="153px"
        {...getOverrideProps(overrides, "Group 9")}
      >
        <Iconedit
          width="30px"
          height="28px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="8px"
          left="5px"
          border="1px SOLID rgba(4,125,149,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Icon/edit")}
        ></Iconedit>
        <Button
          width="42px"
          height="43px"
          position="absolute"
          top="-1px"
          left="-1px"
          size="default"
          isDisabled={false}
          variation="default"
          children=""
          onClick={() => {
            buttonFourFiveZeroTwoEightFiveOneSevenOnClick();
          }}
          {...getOverrideProps(overrides, "Button45028517")}
        ></Button>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="40px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="287px"
        left="388px"
        {...getOverrideProps(overrides, "Group 10")}
      >
        <Delete
          width="24.5px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="7px"
          left="8px"
          border="1px SOLID rgba(4,125,149,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "delete")}
        ></Delete>
        <Button
          width="42px"
          height="43px"
          position="absolute"
          top="-1px"
          left="-1px"
          size="default"
          isDisabled={false}
          variation="default"
          children=""
          onMouseDown={() => {
            buttonFourFiveZeroTwoEightFiveThreeOneOnMouseDown();
          }}
          onMouseUp={() => {
            buttonFourFiveZeroTwoEightFiveThreeOneOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button45028531")}
        ></Button>
      </View>
    </View>
  );
}

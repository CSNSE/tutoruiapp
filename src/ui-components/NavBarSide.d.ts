/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoWithTextProps } from "./LogoWithText";
import { MyIconProps } from "./MyIcon";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarSideOverridesProps = {
    NavBarSide?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32141172119"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32141172120"?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: LogoWithTextProps;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon41172124?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172125?: MyIconProps;
    label41172126?: PrimitiveOverrideProps<TextProps>;
    Section41172127?: PrimitiveOverrideProps<FlexProps>;
    label41172128?: PrimitiveOverrideProps<TextProps>;
    link41172129?: PrimitiveOverrideProps<FlexProps>;
    icon41172130?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172131?: MyIconProps;
    label41172132?: PrimitiveOverrideProps<TextProps>;
    link41172133?: PrimitiveOverrideProps<FlexProps>;
    icon41172134?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172135?: MyIconProps;
    label41172136?: PrimitiveOverrideProps<TextProps>;
    link41172137?: PrimitiveOverrideProps<FlexProps>;
    icon41172138?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172139?: MyIconProps;
    label41172140?: PrimitiveOverrideProps<TextProps>;
    Section41172141?: PrimitiveOverrideProps<FlexProps>;
    label41172142?: PrimitiveOverrideProps<TextProps>;
    link41172143?: PrimitiveOverrideProps<FlexProps>;
    icon41172144?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172145?: MyIconProps;
    label41172146?: PrimitiveOverrideProps<TextProps>;
    link41172147?: PrimitiveOverrideProps<FlexProps>;
    icon41172148?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172149?: MyIconProps;
    label41172150?: PrimitiveOverrideProps<TextProps>;
    link41172151?: PrimitiveOverrideProps<FlexProps>;
    icon41172152?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172153?: MyIconProps;
    label41172154?: PrimitiveOverrideProps<TextProps>;
    "Frame 32141172155"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1163"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32141172159"?: PrimitiveOverrideProps<FlexProps>;
    "Wesley Peck"?: PrimitiveOverrideProps<TextProps>;
    MyIcon41172161?: MyIconProps;
} & EscapeHatchProps;
export declare type NavBarSideProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarSideOverridesProps | undefined | null;
}>;
export default function NavBarSide(props: NavBarSideProps): React.ReactElement;

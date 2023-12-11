/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type Features2x2OverridesProps = {
    Features2x2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13641171704"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13641171705"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37441171706"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43041171707"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171708?: MyIconProps;
    "Feature A"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.41171710"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37341171711"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43041171712"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171713?: MyIconProps;
    "Feature B"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.41171715"?: PrimitiveOverrideProps<TextProps>;
    "Frame 393"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37441171717"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43041171718"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171719?: MyIconProps;
    "Feature C"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.41171721"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37341171722"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43041171723"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171724?: MyIconProps;
    "Feature D"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.41171726"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Features2x2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Features2x2OverridesProps | undefined | null;
}>;
export default function Features2x2(props: Features2x2Props): React.ReactElement;

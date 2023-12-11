/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type CommentCardOverridesProps = {
    CommentCard?: PrimitiveOverrideProps<FlexProps>;
    Liked?: PrimitiveOverrideProps<FlexProps>;
    "User Liked"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171900?: MyIconProps;
    "Danny liked this"?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame41171904?: PrimitiveOverrideProps<FlexProps>;
    Frame41171905?: PrimitiveOverrideProps<FlexProps>;
    Frame41171906?: PrimitiveOverrideProps<FlexProps>;
    Scott?: PrimitiveOverrideProps<TextProps>;
    Frame41171908?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171909?: MyIconProps;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"?: PrimitiveOverrideProps<TextProps>;
    Share41171911?: PrimitiveOverrideProps<FlexProps>;
    Share41171912?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171913?: MyIconProps;
    "9941171914"?: PrimitiveOverrideProps<TextProps>;
    Repost?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171916?: MyIconProps;
    "9941171917"?: PrimitiveOverrideProps<TextProps>;
    Like?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171919?: MyIconProps;
    "9941171920"?: PrimitiveOverrideProps<TextProps>;
    MyIcon41171921?: MyIconProps;
} & EscapeHatchProps;
export declare type CommentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CommentCardOverridesProps | undefined | null;
}>;
export default function CommentCard(props: CommentCardProps): React.ReactElement;

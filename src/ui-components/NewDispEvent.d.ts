/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NewDispEventOverridesProps = {
    NewDispEvent?: PrimitiveOverrideProps<ViewProps>;
    "Frame 443"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
    "Tutor Name:"?: PrimitiveOverrideProps<TextProps>;
    "Student Name:"?: PrimitiveOverrideProps<TextProps>;
    "Date:"?: PrimitiveOverrideProps<TextProps>;
    "Concepts Covered:"?: PrimitiveOverrideProps<TextProps>;
    Name44651260?: PrimitiveOverrideProps<TextProps>;
    Name44651285?: PrimitiveOverrideProps<TextProps>;
    CC?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Divider44651273?: PrimitiveOverrideProps<DividerProps>;
    Divider44701297?: PrimitiveOverrideProps<DividerProps>;
    Divider44701299?: PrimitiveOverrideProps<DividerProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NewDispEventProps = React.PropsWithChildren<Partial<ViewProps> & {
    tutoringEvent?: any;
} & {
    overrides?: NewDispEventOverridesProps | undefined | null;
}>;
export default function NewDispEvent(props: NewDispEventProps): React.ReactElement;

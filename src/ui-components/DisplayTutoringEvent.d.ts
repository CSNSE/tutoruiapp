/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type DisplayTutoringEventOverridesProps = {
    DisplayTutoringEvent?: PrimitiveOverrideProps<ViewProps>;
    "Student Name"?: PrimitiveOverrideProps<TextProps>;
    "Name:"?: PrimitiveOverrideProps<TextProps>;
    "Date:"?: PrimitiveOverrideProps<TextProps>;
    "Concepts Covered:"?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    "Concepts Covered"?: PrimitiveOverrideProps<TextProps>;
    Delete?: PrimitiveOverrideProps<ButtonProps>;
    Update?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DisplayTutoringEventProps = React.PropsWithChildren<Partial<ViewProps> & {
    tutoringEvent?: any;
} & {
    overrides?: DisplayTutoringEventOverridesProps | undefined | null;
}>;
export default function DisplayTutoringEvent(props: DisplayTutoringEventProps): React.ReactElement;

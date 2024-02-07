/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconeditProps } from "./Iconedit";
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
export declare type DisplayBookEventOverridesProps = {
    DisplayBookEvent?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Line 144721307"?: PrimitiveOverrideProps<IconProps>;
    "Tutor Name:44721306"?: PrimitiveOverrideProps<TextProps>;
    "Tutor Name:44731384"?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Line 144721323"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Student Name:44721315"?: PrimitiveOverrideProps<TextProps>;
    "Student Name:44731385"?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Date:44721318"?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    "Date:44731389"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Concepts Covered:44721321"?: PrimitiveOverrideProps<TextProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    "Concepts Covered:44731391"?: PrimitiveOverrideProps<TextProps>;
    image44848328?: PrimitiveOverrideProps<ImageProps>;
    "Frame 2"?: PrimitiveOverrideProps<ViewProps>;
    image44721322?: PrimitiveOverrideProps<ImageProps>;
    Edit?: PrimitiveOverrideProps<ButtonProps>;
    Trash?: PrimitiveOverrideProps<ButtonProps>;
    "Icon/edit44848132"?: IconeditProps;
    "Icon/edit44848376"?: IconeditProps;
} & EscapeHatchProps;
export declare type DisplayBookEventProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DisplayBookEventOverridesProps | undefined | null;
}>;
export default function DisplayBookEvent(props: DisplayBookEventProps): React.ReactElement;

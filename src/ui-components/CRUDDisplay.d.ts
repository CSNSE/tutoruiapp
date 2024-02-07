/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconeditProps } from "./Iconedit";
import { DeleteProps } from "./Delete";
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
export declare type CRUDDisplayOverridesProps = {
    CRUDDisplay?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Line 144868405"?: PrimitiveOverrideProps<IconProps>;
    "Tutor Name:44868406"?: PrimitiveOverrideProps<TextProps>;
    "Tutor Name:44868407"?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Line 144868409"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Student Name:44868412"?: PrimitiveOverrideProps<TextProps>;
    "Student Name:44868413"?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Date:44868415"?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    "Date:44868417"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Concepts Covered:44868419"?: PrimitiveOverrideProps<TextProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    "Concepts Covered:44868421"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Edit?: PrimitiveOverrideProps<ViewProps>;
    Button44868423?: PrimitiveOverrideProps<ButtonProps>;
    "Icon/edit"?: IconeditProps;
    Delete?: PrimitiveOverrideProps<ViewProps>;
    Button44868447?: PrimitiveOverrideProps<ButtonProps>;
    delete?: DeleteProps;
} & EscapeHatchProps;
export declare type CRUDDisplayProps = React.PropsWithChildren<Partial<ViewProps> & {
    tutoringEvent?: any;
} & {
    overrides?: CRUDDisplayOverridesProps | undefined | null;
}>;
export default function CRUDDisplay(props: CRUDDisplayProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CustomCreateOverridesProps = {
    CustomCreate?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    Button45528572?: PrimitiveOverrideProps<ButtonProps>;
    Button45528576?: PrimitiveOverrideProps<ButtonProps>;
    "Event Create Form"?: PrimitiveOverrideProps<TextProps>;
    TextField45528582?: PrimitiveOverrideProps<TextFieldProps>;
    TextField45528607?: PrimitiveOverrideProps<TextFieldProps>;
    TextField45528615?: PrimitiveOverrideProps<TextFieldProps>;
    TextField45528622?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomCreateProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CustomCreateOverridesProps | undefined | null;
}>;
export default function CustomCreate(props: CustomCreateProps): React.ReactElement;

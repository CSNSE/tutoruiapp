/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EditTutoringEventOverridesProps = {
    EditTutoringEvent?: PrimitiveOverrideProps<ViewProps>;
    "Frame 438"?: PrimitiveOverrideProps<ViewProps>;
    TextField42402761?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42402762?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42402763?: PrimitiveOverrideProps<TextFieldProps>;
    make?: PrimitiveOverrideProps<ButtonProps>;
    goback?: PrimitiveOverrideProps<ButtonProps>;
    "Event ID"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EditTutoringEventProps = React.PropsWithChildren<Partial<ViewProps> & {
    tutoringEvent?: any;
} & {
    overrides?: EditTutoringEventOverridesProps | undefined | null;
}>;
export default function EditTutoringEvent(props: EditTutoringEventProps): React.ReactElement;

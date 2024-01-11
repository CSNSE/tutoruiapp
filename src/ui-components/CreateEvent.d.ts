/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CreateEventOverridesProps = {
    CreateEvent?: PrimitiveOverrideProps<ViewProps>;
    TextField4258799?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4258800?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4258801?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4258821?: PrimitiveOverrideProps<TextFieldProps>;
    goback?: PrimitiveOverrideProps<ButtonProps>;
    make?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreateEventProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreateEventOverridesProps | undefined | null;
}>;
export default function CreateEvent(props: CreateEventProps): React.ReactElement;

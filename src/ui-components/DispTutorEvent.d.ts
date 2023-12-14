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
export declare type DispTutorEventOverridesProps = {
    DispTutorEvent?: PrimitiveOverrideProps<ViewProps>;
    Delete?: PrimitiveOverrideProps<ButtonProps>;
    Update?: PrimitiveOverrideProps<ButtonProps>;
    "Student Name"?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    "Concepts Covered"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DispTutorEventProps = React.PropsWithChildren<Partial<ViewProps> & {
    tutoringEvent?: any;
} & {
    overrides?: DispTutorEventOverridesProps | undefined | null;
}>;
export default function DispTutorEvent(props: DispTutorEventProps): React.ReactElement;

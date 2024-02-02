/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DayMakeInputValues = {
    Date?: string;
    Time?: string;
    Email?: string;
};
export declare type DayMakeValidationValues = {
    Date?: ValidationFunction<string>;
    Time?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DayMakeOverridesProps = {
    DayMakeGrid?: PrimitiveOverrideProps<GridProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Time?: PrimitiveOverrideProps<SelectFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DayMakeProps = React.PropsWithChildren<{
    overrides?: DayMakeOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DayMakeInputValues) => DayMakeInputValues;
    onSuccess?: (fields: DayMakeInputValues) => void;
    onError?: (fields: DayMakeInputValues, errorMessage: string) => void;
    onChange?: (fields: DayMakeInputValues) => DayMakeInputValues;
    onValidate?: DayMakeValidationValues;
} & React.CSSProperties>;
export default function DayMake(props: DayMakeProps): React.ReactElement;

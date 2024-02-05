/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type DayCreateFormInputValues = {
    Date?: string;
    Email?: string;
    Time?: string;
};
export declare type DayCreateFormValidationValues = {
    Date?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DayCreateFormOverridesProps = {
    DayCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DayCreateFormProps = React.PropsWithChildren<{
    overrides?: DayCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DayCreateFormInputValues) => DayCreateFormInputValues;
    onSuccess?: (fields: DayCreateFormInputValues) => void;
    onError?: (fields: DayCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DayCreateFormInputValues) => DayCreateFormInputValues;
    onValidate?: DayCreateFormValidationValues;
} & React.CSSProperties>;
export default function DayCreateForm(props: DayCreateFormProps): React.ReactElement;
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
export declare type TutorCreateFormInputValues = {
    Email?: string;
    Name?: string;
};
export declare type TutorCreateFormValidationValues = {
    Email?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TutorCreateFormOverridesProps = {
    TutorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TutorCreateFormProps = React.PropsWithChildren<{
    overrides?: TutorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TutorCreateFormInputValues) => TutorCreateFormInputValues;
    onSuccess?: (fields: TutorCreateFormInputValues) => void;
    onError?: (fields: TutorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TutorCreateFormInputValues) => TutorCreateFormInputValues;
    onValidate?: TutorCreateFormValidationValues;
} & React.CSSProperties>;
export default function TutorCreateForm(props: TutorCreateFormProps): React.ReactElement;

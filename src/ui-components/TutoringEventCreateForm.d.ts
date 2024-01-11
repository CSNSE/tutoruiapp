/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
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
export declare type TutoringEventCreateFormInputValues = {
    studentName?: string;
    date?: string;
    conceptsCovered?: string;
    image?: string;
};
export declare type TutoringEventCreateFormValidationValues = {
    studentName?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    conceptsCovered?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TutoringEventCreateFormOverridesProps = {
    TutoringEventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentName?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    conceptsCovered?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type TutoringEventCreateFormProps = React.PropsWithChildren<{
    overrides?: TutoringEventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TutoringEventCreateFormInputValues) => TutoringEventCreateFormInputValues;
    onSuccess?: (fields: TutoringEventCreateFormInputValues) => void;
    onError?: (fields: TutoringEventCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TutoringEventCreateFormInputValues) => TutoringEventCreateFormInputValues;
    onValidate?: TutoringEventCreateFormValidationValues;
} & React.CSSProperties>;
export default function TutoringEventCreateForm(props: TutoringEventCreateFormProps): React.ReactElement;

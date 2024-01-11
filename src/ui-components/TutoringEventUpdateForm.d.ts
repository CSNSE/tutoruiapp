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
export declare type TutoringEventUpdateFormInputValues = {
    studentName?: string;
    date?: string;
    conceptsCovered?: string;
    image?: string;
};
export declare type TutoringEventUpdateFormValidationValues = {
    studentName?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    conceptsCovered?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TutoringEventUpdateFormOverridesProps = {
    TutoringEventUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    studentName?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    conceptsCovered?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TutoringEventUpdateFormProps = React.PropsWithChildren<{
    overrides?: TutoringEventUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tutoringEvent?: any;
    onSubmit?: (fields: TutoringEventUpdateFormInputValues) => TutoringEventUpdateFormInputValues;
    onSuccess?: (fields: TutoringEventUpdateFormInputValues) => void;
    onError?: (fields: TutoringEventUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TutoringEventUpdateFormInputValues) => TutoringEventUpdateFormInputValues;
    onValidate?: TutoringEventUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TutoringEventUpdateForm(props: TutoringEventUpdateFormProps): React.ReactElement;

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
export declare type TutorUpdateFormInputValues = {
    Email?: string;
    Name?: string;
};
export declare type TutorUpdateFormValidationValues = {
    Email?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TutorUpdateFormOverridesProps = {
    TutorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TutorUpdateFormProps = React.PropsWithChildren<{
    overrides?: TutorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tutor?: any;
    onSubmit?: (fields: TutorUpdateFormInputValues) => TutorUpdateFormInputValues;
    onSuccess?: (fields: TutorUpdateFormInputValues) => void;
    onError?: (fields: TutorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TutorUpdateFormInputValues) => TutorUpdateFormInputValues;
    onValidate?: TutorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TutorUpdateForm(props: TutorUpdateFormProps): React.ReactElement;

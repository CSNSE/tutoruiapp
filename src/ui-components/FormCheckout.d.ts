/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type FormCheckoutOverridesProps = {
    FormCheckout?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41141172045"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Shipping information"?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    TextField41172050?: PrimitiveOverrideProps<FlexProps>;
    TextField41172051?: PrimitiveOverrideProps<FlexProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    TextField41172053?: PrimitiveOverrideProps<FlexProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    TextField41172055?: PrimitiveOverrideProps<FlexProps>;
    TextField41172056?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<FlexProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    TextField41172059?: PrimitiveOverrideProps<FlexProps>;
    PhoneNumberField?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41141172061"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FormCheckoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormCheckoutOverridesProps | undefined | null;
}>;
export default function FormCheckout(props: FormCheckoutProps): React.ReactElement;

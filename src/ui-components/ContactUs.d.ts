/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type ContactUsOverridesProps = {
    ContactUs?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    TextField41171934?: PrimitiveOverrideProps<FlexProps>;
    TextField41171935?: PrimitiveOverrideProps<FlexProps>;
    TextField41171936?: PrimitiveOverrideProps<FlexProps>;
    TextAreaField?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<FlexProps>;
    Button41171939?: PrimitiveOverrideProps<FlexProps>;
    Button41572448?: PrimitiveOverrideProps<ButtonProps>;
    Button41572452?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 2841171940"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2841171941"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171942?: MyIconProps;
    Instagram?: PrimitiveOverrideProps<TextProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41171945?: MyIconProps;
    Twitter?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContactUsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactUsOverridesProps | undefined | null;
}>;
export default function ContactUs(props: ContactUsProps): React.ReactElement;

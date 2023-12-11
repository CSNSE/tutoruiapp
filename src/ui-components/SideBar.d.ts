/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32141172164"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32141172165"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon41172168?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172169?: MyIconProps;
    label41172170?: PrimitiveOverrideProps<TextProps>;
    Section41172171?: PrimitiveOverrideProps<FlexProps>;
    label41172172?: PrimitiveOverrideProps<TextProps>;
    link41172173?: PrimitiveOverrideProps<FlexProps>;
    icon41172174?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172175?: MyIconProps;
    label41172176?: PrimitiveOverrideProps<TextProps>;
    link41172177?: PrimitiveOverrideProps<FlexProps>;
    icon41172178?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172179?: MyIconProps;
    label41172180?: PrimitiveOverrideProps<TextProps>;
    link41172181?: PrimitiveOverrideProps<FlexProps>;
    icon41172182?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172183?: MyIconProps;
    label41172184?: PrimitiveOverrideProps<TextProps>;
    Section41172185?: PrimitiveOverrideProps<FlexProps>;
    label41172186?: PrimitiveOverrideProps<TextProps>;
    link41172187?: PrimitiveOverrideProps<FlexProps>;
    icon41172188?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172189?: MyIconProps;
    label41172190?: PrimitiveOverrideProps<TextProps>;
    link41172191?: PrimitiveOverrideProps<FlexProps>;
    icon41172192?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172193?: MyIconProps;
    label41172194?: PrimitiveOverrideProps<TextProps>;
    link41172195?: PrimitiveOverrideProps<FlexProps>;
    icon41172196?: PrimitiveOverrideProps<FlexProps>;
    MyIcon41172197?: MyIconProps;
    label41172198?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;

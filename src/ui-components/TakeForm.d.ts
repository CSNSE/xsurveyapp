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
export declare type TakeFormOverridesProps = {
    TakeForm?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Submit Button"?: PrimitiveOverrideProps<ButtonProps>;
    "Cancel Button"?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type TakeFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TakeFormOverridesProps | undefined | null;
}>;
export default function TakeForm(props: TakeFormProps): React.ReactElement;

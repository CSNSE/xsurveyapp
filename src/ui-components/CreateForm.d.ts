/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CreateFormOverridesProps = {
    CreateForm?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Create Survey"?: PrimitiveOverrideProps<TextProps>;
    "Submit Button"?: PrimitiveOverrideProps<ButtonProps>;
    "Cancel Button"?: PrimitiveOverrideProps<ButtonProps>;
    TitleChange?: PrimitiveOverrideProps<TextFieldProps>;
    DescriptionChange?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    CreatedSurvey?: any;
} & {
    overrides?: CreateFormOverridesProps | undefined | null;
}>;
export default function CreateForm(props: CreateFormProps): React.ReactElement;

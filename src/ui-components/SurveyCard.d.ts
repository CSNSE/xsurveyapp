/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SurveyCardOverridesProps = {
    SurveyCard?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    "Take Button"?: PrimitiveOverrideProps<ButtonProps>;
    "Delete Button"?: PrimitiveOverrideProps<ButtonProps>;
    "Edit Button"?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SurveyCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    survey?: any;
} & {
    overrides?: SurveyCardOverridesProps | undefined | null;
}>;
export default function SurveyCard(props: SurveyCardProps): React.ReactElement;

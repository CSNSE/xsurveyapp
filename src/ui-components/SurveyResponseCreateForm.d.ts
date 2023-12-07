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
export declare type SurveyResponseCreateFormInputValues = {
    author?: string;
    parentsurvey?: string;
    questions?: string;
};
export declare type SurveyResponseCreateFormValidationValues = {
    author?: ValidationFunction<string>;
    parentsurvey?: ValidationFunction<string>;
    questions?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyResponseCreateFormOverridesProps = {
    SurveyResponseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    parentsurvey?: PrimitiveOverrideProps<TextFieldProps>;
    questions?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SurveyResponseCreateFormProps = React.PropsWithChildren<{
    overrides?: SurveyResponseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SurveyResponseCreateFormInputValues) => SurveyResponseCreateFormInputValues;
    onSuccess?: (fields: SurveyResponseCreateFormInputValues) => void;
    onError?: (fields: SurveyResponseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SurveyResponseCreateFormInputValues) => SurveyResponseCreateFormInputValues;
    onValidate?: SurveyResponseCreateFormValidationValues;
} & React.CSSProperties>;
export default function SurveyResponseCreateForm(props: SurveyResponseCreateFormProps): React.ReactElement;

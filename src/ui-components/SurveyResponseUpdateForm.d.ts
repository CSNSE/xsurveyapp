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
export declare type SurveyResponseUpdateFormInputValues = {
    author?: string;
    parentsurvey?: string;
    questions?: string;
};
export declare type SurveyResponseUpdateFormValidationValues = {
    author?: ValidationFunction<string>;
    parentsurvey?: ValidationFunction<string>;
    questions?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyResponseUpdateFormOverridesProps = {
    SurveyResponseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    parentsurvey?: PrimitiveOverrideProps<TextFieldProps>;
    questions?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SurveyResponseUpdateFormProps = React.PropsWithChildren<{
    overrides?: SurveyResponseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    surveyResponse?: any;
    onSubmit?: (fields: SurveyResponseUpdateFormInputValues) => SurveyResponseUpdateFormInputValues;
    onSuccess?: (fields: SurveyResponseUpdateFormInputValues) => void;
    onError?: (fields: SurveyResponseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SurveyResponseUpdateFormInputValues) => SurveyResponseUpdateFormInputValues;
    onValidate?: SurveyResponseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SurveyResponseUpdateForm(props: SurveyResponseUpdateFormProps): React.ReactElement;

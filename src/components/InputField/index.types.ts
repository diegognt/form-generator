export type InputType = "text" | "email" | "password" | string;

export type InputValidationRule = {
  type: string;
  value: boolean | string | number;
  message: string;
};

export type InputProps = {
  name: string;
  label: string;
  type: InputType;
  helperText?: string;
  validationRules?: InputValidationRule[];
};

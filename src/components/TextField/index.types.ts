import { FieldRule } from '../GeneratedForm/index.types';

export type InputType = 'text' | 'email' | 'password';

export type TextFieldProps = {
  name: string;
  label: string;
  type: InputType;
  helperText?: string;
  validationRules?: FieldRule[];
};

import { FieldOption, FieldRule } from '../GeneratedForm/index.types';

export type SelectFieldProps = {
  name: string;
  label: string;
  options: FieldOption[];
  helperText?: string;
  validationRules: FieldRule[];
};

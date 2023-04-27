import { FieldOption, FieldRule } from '../GeneratedForm/index.types';

export type CheckboxFieldProps = {
  name: string;
  label: string;
  options: FieldOption[];
  layout: 'Horizontal' | 'Vertical';
  helperText?: string;
  validationRules: FieldRule[];
};

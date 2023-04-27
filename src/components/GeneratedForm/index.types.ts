export type FieldRule = {
  type: string;
  value: string | number | boolean;
  message: string;
};

export type FieldOption = {
  label: string;
  value: string;
};

type FormField = {
  id: number;
  name: string;
  label: string;
  input: 'Text' | 'Select' | 'Radio' | 'Checkbox';
  helperText: string;
  validationRules: FieldRule[];
};

export type TextFormField = FormField & {
  type: 'password' | 'email' | 'text';
};

export type SelectFormField = FormField & {
  options: FieldOption[];
};

export type ChooseFormField = FormField & {
  layout: 'Horizontal' | 'Vertical';
  options: FieldOption[];
};

export type FormProps = {
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  fields: Array<TextFormField | ChooseFormField | SelectFormField>;
};

export type FieldRule = {
  type: string;
  value: string | number | boolean;
  message: string;
};

export type FieldOption = {
  label: string;
  value: string;
};

type Field = {
  id: number;
  name: string;
  label: string;
  input: 'Text' | 'Select' | 'Radio' | 'Checkbox';
  helperText: string;
  validationRules: FieldRule[];
};

export type TextInput = Field & {
  type: 'password' | 'email' | 'text';
};

export type SelectInput = Field & {
  options: FieldOption[];
};

export type ChooseInput = Field & {
  layout: 'Horizontal' | 'Vertical';
  options: FieldOption[];
};

export type FormProps = {
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  fields: Array<TextInput | ChooseInput>;
};

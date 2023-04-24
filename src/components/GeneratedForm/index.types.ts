export type FieldRule = {
  type: string;
  value: string | number | boolean;
  message: string;
};

export type Field = {
  id: number;
  name: string;
  label: string;
  type: 'password' | 'email' | 'text';
  helperText: string;
  validationRules: FieldRule[];
};

export type FormProps = {
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  fields: Field[];
};

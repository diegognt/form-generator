import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CheckboxField from '../CheckboxField';
import { CheckboxFieldProps } from '../CheckboxField/index.types';
import RadioField from '../RadioField';
import { RadioFieldProps } from '../RadioField/index.types';
import SelectField from '../SelectField';
import { SelectFieldProps } from '../SelectField/index.types';
import TextField from '../TextField';
import { TextFieldProps } from '../TextField/index.types';
import {
  ChooseFormField,
  FormProps,
  SelectFormField,
  TextFormField,
} from './index.types';

type Field = TextFormField | SelectFormField | ChooseFormField;

function GeneratedForm(props: FormProps): JSX.Element {
  const { fields, method } = props;
  const methods = useForm({ mode: 'all', reValidateMode: 'onChange' });

  return (
    <FormProvider {...methods}>
      <form method={method}>
        {fields.map((field: Field, index: number) => {
          if (field.input === 'Text')
            return <TextField {...(field as TextFieldProps)} key={index} />;
          if (field.input === 'Select')
            return <SelectField {...(field as SelectFieldProps)} key={index} />;
          if (field.input === 'Radio')
            return <RadioField {...(field as RadioFieldProps)} key={index} />;
          if (field.input === 'Checkbox')
            return (
              <CheckboxField {...(field as CheckboxFieldProps)} key={index} />
            );
        })}
        <button
          type="button"
          onClick={() => console.table(methods.getValues())}
        >
          Get Values
        </button>
      </form>
    </FormProvider>
  );
}

export default GeneratedForm;

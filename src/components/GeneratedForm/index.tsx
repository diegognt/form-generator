import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CheckboxField from '../CheckboxField';
import InputField from '../InputField';
import RadioField from '../RadioField';
import SelectField from '../SelectField';
import { FormProps, ChooseInput, SelectInput, TextInput } from './index.types';

type Field = TextInput | SelectInput | ChooseInput;

function GeneratedForm(props: FormProps): JSX.Element {
  const { fields, method } = props;
  const methods = useForm({ mode: 'all', reValidateMode: 'onChange' });

  return (
    <FormProvider {...methods}>
      <form method={method}>
        {fields.map((field: Field, index) => {
          if (field.input === 'Text')
            return <InputField {...(field as TextInput)} key={index} />;
          if (field.input === 'Select')
            return <SelectField {...(field as SelectInput)} key={index} />;
          if (field.input === 'Radio')
            return <RadioField {...(field as ChooseInput)} key={index} />;
          if (field.input === 'Checkbox')
            return <CheckboxField {...(field as ChooseInput)} key={index} />;
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

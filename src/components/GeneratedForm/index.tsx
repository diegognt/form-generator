import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InputField from '../InputField';
import { Field, FormProps } from './index.types';

function GeneratedForm(props: FormProps): JSX.Element {
  const { fields, method } = props;
  const methods = useForm({ mode: 'all', reValidateMode: 'onChange' });

  return (
    <FormProvider {...methods}>
      <form method={method}>
        {fields.map((field: Field, index) => (
          <InputField {...field} key={index} />
        ))}
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

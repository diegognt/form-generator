import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';

function ReactHookFormProvider({ children }: { children: React.ReactNode }) {
  const methods = useForm({ mode: 'onTouched' });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

const FormRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: ReactHookFormProvider, ...options });

export * from '@testing-library/react';
export { FormRender };

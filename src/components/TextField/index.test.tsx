import React from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import TextField from '.';
import { TextFieldProps } from './index.types';
import { FormRender } from '../../test/form-render';
import userEvent from '@testing-library/user-event';

describe('The TextField', () => {
  test('have a label', () => {
    const props: TextFieldProps = {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      helperText: '',
    };

    FormRender(<TextField {...props} />);

    const label = screen.getByText('Email Address');

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'email');
  });

  test('have a input', () => {
    const props: TextFieldProps = {
      name: 'last_name',
      label: 'Last Name',
      type: 'text',
      helperText: '',
    };

    FormRender(<TextField {...props} />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  test('display a helper text when defined', () => {
    const props: TextFieldProps = {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      helperText: 'Please enter your full name',
    };

    FormRender(<TextField {...props} />);

    const helperText = screen.getByText('Please enter your full name');

    expect(helperText).toBeInTheDocument();
  });

  test('display the value when user types', async () => {
    const user = userEvent.setup();
    const props: TextFieldProps = {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      helperText: 'Please enter your full name',
    };

    FormRender(<TextField {...props} />);

    const input = screen.getByRole('textbox');

    await user.type(input, 'John Doe');

    expect(input).toHaveValue('John Doe');
  });

  test('displays validation error when input is invalid', async () => {
    const props: TextFieldProps = {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      validationRules: [
        { type: 'required', value: true, message: 'The field is required' },
      ],
    };

    FormRender(<TextField {...props} />);

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    const errorMessage = await screen.findByText('The field is required');

    expect(errorMessage).toBeInTheDocument();
  });

  test('Hide thhe validation error when input value gets valid again', async () => {
    const user = userEvent.setup();
    const props: TextFieldProps = {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      validationRules: [
        { type: 'required', value: true, message: 'The field is required' },
      ],
    };

    FormRender(<TextField {...props} />);

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    const errorMessage = await screen.findByText('The field is required');

    expect(errorMessage).toBeInTheDocument();

    await user.type(input, 'John Doe');

    expect(errorMessage).not.toBeInTheDocument();
  });
});

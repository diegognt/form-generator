import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputTextField from '.';


vi.mock('react-hook-form', () => ({
  useFormContext: () => ({
    register: () => {},
    formState: {
      errors: {},
    },
  }),
}));

describe('InputTextField', () => {
  it('should render a label', () => {
    const props = {
      id: 1,
      name: "email",
      label: "Email Address",
      type: "email",
      helperText: "",
    };

    render(<InputTextField {...props} />);

    const label = screen.getByText('Email Address');

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'email');
  });

  it('should render a input', () => {
    const props = {
      id: 1,
      name: "last_name",
      label: "Last Name",
      type: "text",
      helperText: "",
    };

    render(<InputTextField {...props} />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render a helper text when defined', () => {
    const props = {
      id: 1,
      name: "name",
      label: "Full Name",
      type: "text",
      helperText: "Please enter your full name",
    };

    render(<InputTextField {...props} />);

    const helperText = screen.getByText('Please enter your full name');

    expect(helperText).toBeInTheDocument();
    
  });
});

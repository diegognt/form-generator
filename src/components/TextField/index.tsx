import React, { useState, FocusEvent, useEffect } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import {
  formatValidationRules,
  isRequiredField,
} from '../GeneratedForm/index.utils';
import { TextFieldProps } from './index.types';

function TextField(props: TextFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { name, label, type, helperText, validationRules } = props;
  const { onBlur, ...inputProps } = register(
    name,
    formatValidationRules(validationRules || [])
  );
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isRequired, setIsRequired] = useState<boolean>(false);

  useEffect(() => setIsRequired(isRequiredField(validationRules || [])), []);

  function handleBlur(event: FocusEvent<HTMLInputElement>): void {
    setIsFocus(false);
    onBlur(event);
  }

  return (
    <FormControl
      isInvalid={!!errors[name]}
      isRequired={isRequired}
      marginBottom="14px"
    >
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        type={type}
        variant="flushed"
        onFocus={() => setIsFocus(true)}
        onBlur={handleBlur}
        {...inputProps}
      />
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage fontSize="1rem" color="tomato">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default TextField;

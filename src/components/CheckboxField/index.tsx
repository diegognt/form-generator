import React, { useState, FocusEvent } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Checkbox,
  CheckboxGroup,
  Stack,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FieldOption } from '../GeneratedForm/index.types';
import { CheckboxInputProps } from './index.types';
import {
  formatValidationRules,
  isRequiredField,
} from '../GeneratedForm/index.utils';

function CheckboxField(props: CheckboxInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { name, label, options, layout, helperText, validationRules } = props;
  const { onBlur, ...inputProps } = register(
    name,
    formatValidationRules(validationRules || [])
  );
  const [isFocus, setIsFocus] = useState<boolean>(false);

  function handleBlur(event: FocusEvent<HTMLInputElement>): void {
    setIsFocus(false);
    onBlur(event);
  }

  return (
    <FormControl
      isInvalid={!!errors[name]}
      isRequired={isRequiredField(validationRules || [])}
      marginBottom="14px"
    >
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <CheckboxGroup>
        <Stack
          direction={layout === 'Vertical' ? 'column' : 'row'}
          spacing="24px"
        >
          {options.map((option: FieldOption, index) => (
            <Checkbox
              key={index}
              onFocus={() => setIsFocus(true)}
              onBlur={handleBlur}
              {...inputProps}
              value={option.value}
            >
              {option.label}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage fontSize="1rem" color="tomato">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default CheckboxField;

import React, { useState, FocusEvent } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import {
  formatValidationRules,
  isRequiredField,
} from '../GeneratedForm/index.utils';
import { CheckboxFieldProps } from '../CheckboxField/index.types';
import { FieldOption } from '../GeneratedForm/index.types';

function RadioField(props: CheckboxFieldProps) {
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
      <RadioGroup>
        <Stack
          direction={layout === 'Vertical' ? 'column' : 'row'}
          spacing="24px"
        >
          {options.map((option: FieldOption, index) => (
            <Radio
              key={index}
              onFocus={() => setIsFocus(true)}
              onBlur={handleBlur}
              {...inputProps}
              value={option.value}
            >
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage fontSize="1rem" color="tomato">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default RadioField;

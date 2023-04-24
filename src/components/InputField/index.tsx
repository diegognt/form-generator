import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  useFormControl,
} from '@chakra-ui/react';
import { useEffect, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps } from './index.types';
import { formatValidationRules } from './index.utils';

function InputField(props: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { name, label, type, helperText, validationRules } = props;
  const inputProps = register(
    name,
    formatValidationRules(validationRules || [])
  );

  return (
    <FormControl py={4} isInvalid={!!errors[name]}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} type={type} {...inputProps} />
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default InputField;

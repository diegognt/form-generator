import { useState, FocusEvent } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import {
  formatValidationRules,
  isRequiredField,
} from '../GeneratedForm/index.utils';
import { FieldOption } from '../OMAForm/index.types';
import { SelectInputProps } from './index.types';

function SelectField(props: SelectInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { name, label, options, helperText, validationRules } = props;
  const { onBlur, ...inputProps } = register(
    name,
    formatValidationRules(validationRules || [])
  );
  const [isFocus, setIsFocus] = useState<boolean>(false);

  function handleBlur(event: FocusEvent<HTMLSelectElement>): void {
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

      <Select
        id={name}
        variant="flushed"
        onFocus={() => setIsFocus(true)}
        onBlur={handleBlur}
        {...inputProps}
      >
        {options.map((option: FieldOption, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage fontSize="1rem" color="tomato">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default SelectField;

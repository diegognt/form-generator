import { RegisterOptions } from 'react-hook-form';
import { FieldRule } from './index.types';

export function isRequiredField(rules: FieldRule[]): boolean {
  let isRequired = false;

  for (const rule of rules) {
    if (rule.type === 'required') {
      isRequired = !!rule.value;
      break;
    }
  }
  return isRequired;
}

export function formatValidationRules(rules: FieldRule[]): RegisterOptions {
  const formattedRules: RegisterOptions = {} as RegisterOptions;

  for (const rule of rules) {
    formattedRules[rule.type] = {
      value:
        rule.type === 'pattern' ? new RegExp(rule.value as string) : rule.value,
      message: rule.message,
    };
  }
  return formattedRules;
}

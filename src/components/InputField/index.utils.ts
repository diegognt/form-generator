import { RegisterOptions } from "react-hook-form";
import { InputValidationRule } from "./index.types";

export function formatValidationRules(
  rules: InputValidationRule[]
): RegisterOptions {
  const formattedRules: RegisterOptions = {} as RegisterOptions;

  for (const rule of rules) {
    formattedRules[rule.type] = {
      value:
        rule.type === "pattern" ? new RegExp(rule.value as string) : rule.value,
      message: rule.message,
    };
  }
  return formattedRules;
}

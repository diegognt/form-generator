import { FieldOption, FieldRule } from "../OMAForm/index.types"

export type SelectInputProps = {
  name: string
  label: string
  options: FieldOption[]
  helperText?: string
  validationRules: FieldRule[]
}

import { FieldOption, FieldRule } from "../OMAForm/index.types"

export type RadioInputProps = {
  name: string
  label: string
  options: FieldOption[]
  layout: "Horizontal" | "Vertical"
  helperText?: string
  validationRules: FieldRule[]
}

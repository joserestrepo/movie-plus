import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

export interface InputProps {
  title?: string
  type?: HTMLInputTypeAttribute
  handleChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  name?: string
  value?: string | number | readonly string[] | undefined
  textError?: string
  inValid?: boolean
}

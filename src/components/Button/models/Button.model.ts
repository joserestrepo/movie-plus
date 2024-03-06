import { MouseEventHandler } from 'react'

export interface ButtonProps {
  title?: string
  click?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset' | undefined
}

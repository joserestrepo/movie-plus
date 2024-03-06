import React from 'react'

import './Button.scss'
import { ButtonProps } from './models/Button.model'

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  click,
  type = 'button',
}) => {
  return (
    <button className="button" type={type} onClick={click}>
      {title}
    </button>
  )
}

export default ButtonComponent

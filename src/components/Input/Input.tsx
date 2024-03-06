import React from 'react'

import './Input.scss'
import { InputProps } from './model/input.model'

const InputComponent: React.FC<InputProps> = ({
  title,
  type,
  handleChange = undefined,
  placeholder,
  name,
  value,
  textError,
  inValid = false,
}) => {
  return (
    <div>
      <label className="container-control">
        <label className="container-control__label">{title}</label>
        <input
          type={type}
          className={`container-control__input ${inValid && 'container-control__input--invalid'}`}
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          value={value}
          autoComplete="off"
        />
        {inValid && (
          <p className="container-control__text-invalid">{textError}</p>
        )}
      </label>
    </div>
  )
}

export default InputComponent

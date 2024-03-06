import { useState } from 'react'

const useValidation = (
  initValue: string,
  regex: RegExp,
  messageError: string,
) => {
  const [value, setValue] = useState(initValue)
  const [inValid, setInValid] = useState(false)
  const [textError, setTextError] = useState(messageError)

  const validateInput = () => {
    const isValidRegex = regex.test(value)
    setInValid(!isValidRegex)
    return isValidRegex
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  return {
    value,
    inValid,
    handleChange,
    validateInput,
    textError,
    setTextError,
  }
}

export default useValidation

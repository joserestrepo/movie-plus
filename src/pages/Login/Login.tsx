import React, { FormEvent, FormEventHandler, useEffect } from 'react'

import './Login.scss'

import InputComponent from '@components/Input/Input'
import ButtonComponent from '@components/Button/Button'
import useValidation from '@hooks/useValidation'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '@redux/slices/auth.slice'
import { signInAction } from '@redux/actions/auth.actions'
import { AuthState } from '@redux/models/auth.state'
import AlertComponent from '@components/Alert/Alert'
import { Navigate, redirect } from 'react-router-dom'
import Loader from '@components/Loader/Loader'

const LoginComponent: React.FC = () => {
  const dispatch = useDispatch()
  const authState: AuthState = useSelector((state: any) => state.auth)

  useEffect(() => {
    if (authState.isSuccess) {
      redirect('/home')
    }
  }, [authState])

  const email = useValidation(
    '',
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    'Ingrese un email valido.',
  )
  const password = useValidation(
    '',
    /^.{6,}$/,
    'La contraseña debe tener más de 6 caracteres.',
  )

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    const isValidateEmail = email.validateInput()
    const isValidatePassword = password.validateInput()

    if (!isValidateEmail || !isValidatePassword) {
      return
    }
    dispatch(
      signInAction({
        type: signIn.type,
        payload: { email: email.value, password: password.value },
      }),
    )
  }

  if (authState.isSuccess) {
    return <Navigate to="/home" replace />
  }

  return (
    <>
      {authState.loading && <Loader data-testid="loader" />}
      <div className="container-login">
        <div className="card-login">
          <h1 className="card-login__title">Inicia sesión</h1>
          <form
            data-testid="form"
            onSubmit={handleSubmit}
            className="container-form"
          >
            {authState.inValid && (
              <AlertComponent text={authState.error ?? ''} />
            )}
            <InputComponent
              type="text"
              title="Correo electrónico"
              placeholder="Ingrese su correo"
              name="user"
              value={email.value}
              handleChange={email.handleChange}
              inValid={email.inValid}
              textError={email.textError}
            />
            <InputComponent
              type="password"
              title="Contraseña"
              placeholder="Ingrese su contraseña"
              name="password"
              value={password.value}
              handleChange={password.handleChange}
              inValid={password.inValid}
              textError={password.textError}
            />
            <div className="container-button">
              <ButtonComponent title="Iniciar" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginComponent

import {
  setCurrentUser,
  signIn,
  signInFailure,
  signInSucess,
  signOut,
  signOutSucess,
} from '@redux/slices/auth.slice'
import { AuthService } from '@service/auth.service'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { signInAction } from '../actions/auth.actions'

function* onSign() {
  yield takeLatest(
    signIn.type,
    function* (action: ReturnType<typeof signInAction>) {
      try {
        const { email, password } = action.payload.payload
        const { user } = yield AuthService.signIn(email, password)
        yield put(setCurrentUser(user))
        yield put(signInSucess(user))
      } catch (error: any) {
        if (error.code === 'auth/invalid-login-credentials') {
          yield put(signInFailure('Credenciales invalidas. Reinténtelo'))
          return
        }
        yield put(signInFailure('Error inesperado. Comunicase con soporte'))
      }
    },
  )
}

function* onSignOut() {
  yield takeLatest(signOut.type, function* () {
    try {
      yield AuthService.signOut()
      yield put(signOutSucess())
    } catch (error: any) {
      yield put(signInFailure('Error inesperado. Comunicase con soporte'))
    }
  })
}

export function* authSagas() {
  yield all([call(onSign), call(onSignOut)])
}

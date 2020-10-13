import {all, takeLatest, call, put} from 'redux-saga/effects';
import {signFailure, signInSuccess} from './actions'
import api from '../../../services/api';
import history from '../../../services/history';

export function* signIn({payload}) {
  const {email, password} = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const {token, user} = response.data;

  api.defaults.headers['Authorization'] = `Bearer ${token}`;

  yield put(signInSuccess(token, user));
  
  history.push('/home');
  window.location.reload();
}

export function* signUp({payload}){
  try{
    const {name, email, password} = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    history.push('/');
    window.location.reload();
  }catch(err){
    yield put(signFailure());
  }
}

export function setToken({payload}){
  if(!payload) return;

  const {token} = payload.auth;

  if(token){
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
};

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
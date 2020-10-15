import {all, takeLatest, call, put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {signFailure, signInSuccess} from './actions'

export function* signIn({payload}) {
  try {
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
  } catch(err) {
    toast.error('Falha na autenticação, verifique seus dados');
    console.log('erro');
    yield put(signFailure());
  }
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

export function signOut(){
  history.push('/');
  window.location.reload();
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
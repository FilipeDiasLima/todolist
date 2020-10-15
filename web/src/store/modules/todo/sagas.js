import {all, takeLatest, call} from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

export function* addTask({payload}) {
  const {title, description, time, date} = payload;

  yield call(api.post, 'tasks', {
    title, 
    description, 
    time, 
    date,
  });
  history.push('/home');
  window.location.reload();
}

export function* loadTask({payload}) {
  const {id} = payload;
  
  yield call(api.get, `tasks/${id}`);
  
  history.push('/edit-task');
  
  window.location.reload();
}

export default all([
  takeLatest('@todo/ADD_TASK', addTask),
  takeLatest('@todo/LOAD_TASK', loadTask),
]);
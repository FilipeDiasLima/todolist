import { toast } from 'react-toastify';
import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import {updateTaskFailure, updateTaskSuccess} from './actions'

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

export function* updateTask({payload}) {
  try {
    const { title, description, time, date } = payload.data;
    const {id} = payload;

    const task = {title, description, time, date };

    const response = yield call(api.put, `tasks/${id}`, task);

    toast.success('Tarefa atualizada com sucesso!');

    yield put(updateTaskSuccess(response.data));
    
    history.push('/home');
    window.location.reload();
  } catch(err) {
    toast.error('Erro ao atualizar a tarefa');
    yield put(updateTaskFailure());
  }
}

export default all([
  takeLatest('@todo/ADD_TASK', addTask),
  takeLatest('@todo/LOAD_TASK', loadTask),
  takeLatest('@todo/UPDATE_TASK_REQUEST', updateTask),
]);
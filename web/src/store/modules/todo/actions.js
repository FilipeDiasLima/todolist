export function addTask({title, description, time, date}) {
  return {
    type: '@todo/ADD_TASK',
    payload: {title, description, time, date},
  }
}

export function updateTaskRequest(id, data){
  return {
    type: '@todo/UPDATE_TASK_REQUEST',
    payload: {id, data},
  };
}

export function updateTaskSuccess(id){
  return {
    type: '@todo/UPDATE_TASK_SUCCESS',
    payload: {id},
  };
}

export function updateTaskFailure(){
  return {
    type: '@todo/UPDATE_TASK_REQUEST',
  };
}
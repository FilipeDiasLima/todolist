export function addTask({title, description, time, date}) {
  return {
    type: '@todo/ADD_TASK',
    payload: {title, description, time, date},
  }
}

export function loadTask(id){
  return {
    type: '@todo/LOAD_TASK',
    payload: id,
  }
}
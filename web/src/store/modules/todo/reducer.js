import produce from 'immer';

const INITAL_STATE = {
  title: null,
  description: null,
  time: null,
  date: null,
};

export default function todo(state = INITAL_STATE, action) {
  return produce(state, draft => {
    switch(action.type){
      case '@todo/ADD_TASK': {
        draft.title = action.payload.title;
        draft.description = action.payload.description;
        draft.time = action.payload.time;
        draft.date = action.payload.date;
        break;
      }
        default:
    }
  });
}


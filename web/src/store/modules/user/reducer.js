import produce from 'immer';

const INITAL_STATE = {
  profile: null,
};

export default function user(state = INITAL_STATE, action) {
  return produce(state, draft => {
    switch(action.type){
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  })
}
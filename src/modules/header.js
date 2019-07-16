import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'header/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT, text => text);

const initialState = {
  text: '',
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, { payload }) => ({
      ...state,
      text: payload,
    }),
  },
  initialState,
);

import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'base/CHANGE_INPUT';
const CONVERT_MODE = 'base/CONVERT_MODE';
const SLIDEBAR_CONTROL = 'base/SLIDEBAR_CONTROL';

export const changeInput = createAction(CHANGE_INPUT, text => text);
export const convertMode = createAction(CONVERT_MODE, done => done);
export const slideBarControl = createAction(
  SLIDEBAR_CONTROL,
  slideBar => slideBar
);

const INITIAL_STATE = {
  text: '',
  done: false,
  slideBar: false,
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, { payload }) => ({
      ...state,
      text: payload,
    }),
    [CONVERT_MODE]: state => ({
      ...state,
      done: !state.done,
    }),
    [SLIDEBAR_CONTROL]: state => ({
      ...state,
      slideBar: !state.slideBar,
    }),
  },
  INITIAL_STATE
);

import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'base/CHANGE_INPUT';
const CONVERT_MODE = 'base/CONVERT_MODE';
const TOGGLE_SLIDEBAR = 'base/TOGGLE_SLIDEBAR';

export const changeInput = createAction(CHANGE_INPUT, text => text);
export const convertMode = createAction(CONVERT_MODE, done => done);
export const toggleSlideBar = createAction(
  TOGGLE_SLIDEBAR,
  slideBar => slideBar,
);

const initialState = {
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
    [CONVERT_MODE]: (state, { payload }) => ({
      ...state,
      done: payload ? false : true,
    }),
    [TOGGLE_SLIDEBAR]: (state, { payload }) => ({
      ...state,
      slideBar: payload ? false : true,
    }),
  },
  initialState,
);

import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'base/CHANGE_INPUT';
const CONVERT_MODE = 'base/CONVERT_MODE';
const SLIDEBAR_CONTROL = 'base/TOGGLE_SLIDEBAR';
const PAGE_TRANSITION = 'base/PAGE_TRANSITION';

export const changeInput = createAction(CHANGE_INPUT, text => text);
export const convertMode = createAction(CONVERT_MODE, done => done);
export const slideBarControl = createAction(
  SLIDEBAR_CONTROL,
  slideBar => slideBar,
);
export const pageTransition = createAction(
  PAGE_TRANSITION,
  transition => transition,
);

const initialState = {
  text: '',
  done: false,
  slideBar: false,
  transition: true,
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, { payload }) => ({
      ...state,
      text: payload,
    }),
    [CONVERT_MODE]: (state, { payload }) => ({
      ...state,
      done: !payload,
    }),
    [SLIDEBAR_CONTROL]: (state, { payload }) => ({
      ...state,
      slideBar: !payload,
    }),
    [PAGE_TRANSITION]: (state, { payload }) => ({
      ...state,
      transition: !payload,
    }),
  },
  initialState,
);

import { createAction, handleActions } from 'redux-actions';

const CONVERT_MODE = 'preview/CONVERT_MODE';
const TOGGLE_SLIDEBAR = 'preview/TOGGLE_SLIDEBAR';

export const convertMode = createAction(CONVERT_MODE, done => done);
export const toggleSlideBar = createAction(
  TOGGLE_SLIDEBAR,
  slideBar => slideBar,
);

const initialState = {
  done: false,
  slideBar: false,
};

export default handleActions(
  {
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

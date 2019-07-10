import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'custom/CHANGE_INPUT';
const ACTIVE_SLIDEBAR = 'custom/ACTIVE_SLIDE';

export const changeInput = createAction(CHANGE_INPUT, text => text);
export const activeSlideBar = createAction(
  ACTIVE_SLIDEBAR,
  slideBar => slideBar,
);

const initialState = {
  text: '',
  slideBar: false,
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, { payload }) => ({
      ...state,
      text: payload,
    }),
    [ACTIVE_SLIDEBAR]: (state, { payload }) => ({
      ...state,
      slideBar: payload,
    }),
  },
  initialState,
);

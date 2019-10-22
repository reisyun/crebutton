import { createAction, handleActions } from 'redux-actions';

const COLOR_PICKER = 'custom/COLOR_PICKER';

export const colorPicker = createAction(COLOR_PICKER, color => color);

const INITIAL_STATE = {
  color: '#489cea',
};

export default handleActions(
  {
    [COLOR_PICKER]: (state, { payload }) => ({
      ...state,
      color: payload,
    }),
  },
  INITIAL_STATE,
);

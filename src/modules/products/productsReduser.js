import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';


const INITIAL_STATE = {
  latest: {
    list: [],
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions({
  [actions.fetchLatest.start]: (state) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: true,
      error: null,
      isError: false,
    },
  }),
  [actions.fetchLatest.success]: (state, action) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: false,
      isError: false,
      list: action.payload
    },
  }),
  [actions.fetchLatest.error]: (state, action) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: false,
      error: action.payload,
      isError: true,
    },
  }),
}, INITIAL_STATE);

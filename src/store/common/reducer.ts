import ActionTypes, { ICommonState } from './types';
import { RootActions } from '../index';

export const initialState: ICommonState = {
  popupCount: 0,
};

export default (state: ICommonState = initialState, action: RootActions): ICommonState => {
  switch (action.type) {
    case ActionTypes.ADD_POPUP_COUNT:
      return {
        ...state,
        popupCount: state.popupCount + 1,
      };
    case ActionTypes.DELETE_POPUP_COUNT:
      return {
        ...state,
        popupCount: state.popupCount - 1,
      };
    default:
      return state;
  }
};

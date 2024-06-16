import ActionTypes, {
  IAddPopupCountAction,
  IDeletePopupCountAction
} from './types';


export const addPopupCount = (): IAddPopupCountAction => ({
  type: ActionTypes.ADD_POPUP_COUNT,
});

export const deletePopupCount = (): IDeletePopupCountAction => ({
  type: ActionTypes.DELETE_POPUP_COUNT,
});
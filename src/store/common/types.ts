export interface ICommonState {
  popupCount: number;
}

enum ActionTypes {
  ADD_POPUP_COUNT = 'ADD_POPUP_COUNT',
  DELETE_POPUP_COUNT = 'DELETE_POPUP_COUNT',
}

export interface IAddPopupCountAction {
  readonly type: ActionTypes.ADD_POPUP_COUNT;
}

export interface IDeletePopupCountAction {
  readonly type: ActionTypes.DELETE_POPUP_COUNT;
}

export type CommonActions =
  | IAddPopupCountAction
  | IDeletePopupCountAction

export default ActionTypes;

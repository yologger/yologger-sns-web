import { Reducer, combineReducers, createStore } from "redux";
import authReducer, { AuthTypes } from "~/store/auth";
import errorReducer, { ErrorTypes } from "~/store/error";
import commonReducer, { CommonTypes } from "~/store/common";

export interface IRootState {
  auth: AuthTypes.IAuthState;
  error: ErrorTypes.IErrorState;
  common: CommonTypes.ICommonState;
}

export type RootActions =
  | IDefaultAction
  | AuthTypes.AuthActions
  | ErrorTypes.ErrorActions
  | CommonTypes.CommonActions

export enum ActionTypes {
  DEFAULT = "DEFAULT",
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

export const rootReducer: Reducer<IRootState> = combineReducers({
  auth: authReducer,
  error: errorReducer,
  common: commonReducer
});

const store = createStore(rootReducer);

export default store;

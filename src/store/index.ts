import { Reducer, combineReducers, createStore } from "redux";
import authReducer, { AuthTypes } from "./auth";

export interface IRootState {
    auth: AuthTypes.IAuthState
}

export type RootAction = 
    | IDefaultAction
    | AuthTypes.AuthActions
    

export enum ActionTypes {
  DEFAULT = "DEFAULT",
}

export interface IDefaultAction {
  readonly type: ActionTypes.DEFAULT;
}

export const rootReducer: Reducer<IRootState> = combineReducers({
    auth: authReducer
})

const store = createStore(rootReducer)

export default store
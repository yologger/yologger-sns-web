import ActionTypes from "./types"

export const login = (email: String, password: String) => {
    return {
        type: ActionTypes.LOGIN
    }
}

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT
    }
}

export const getUserInfo = () => {
    return {
        type: ActionTypes.GET_USER_INFO
    }
}
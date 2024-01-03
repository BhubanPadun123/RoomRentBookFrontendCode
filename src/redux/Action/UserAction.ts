import { Dispatch } from "redux"
import * as actionTypes from "./ActionTypes"
import { string } from "prop-types"

interface UserSignup {
    type: typeof actionTypes.USER_SIGN_UP_ERROR | typeof actionTypes.USER_SIGN_UP_RESPONSE | typeof actionTypes.USER_SIGN_UP_STATUS,
    payload: Record<string, Object> | string
}

export const UserSignupAction = (value: any) => {
    return async (dispatch: Dispatch<UserSignup>) => {

        dispatch({
            type: actionTypes.USER_SIGN_UP_STATUS,
            payload: "started"
        })
        dispatch({
            type: actionTypes.USER_SIGN_UP_RESPONSE,
            payload: value
        })
        dispatch({
            type: actionTypes.USER_SIGN_UP_ERROR,
            payload: "Error"
        })
    }
}

interface UserLogin{
    type: typeof actionTypes.USER_LOGIN_STATUS | typeof actionTypes.USER_LOGIN_RESPONSE | typeof actionTypes.USER_LOGIN_ERROR,
    payload: Record<string,Object> | string
}

export const UserLoginAction = (value:any)=> {
    return async (dispatch: Dispatch<UserLogin>) => {
        dispatch({
            type: actionTypes.USER_LOGIN_STATUS,
            payload:"started"
        })

        dispatch({
            type: actionTypes.USER_LOGIN_RESPONSE,
            payload: value
        })
        dispatch({
            type: actionTypes.USER_LOGIN_ERROR,
            payload: "Error"
        })
    }
}
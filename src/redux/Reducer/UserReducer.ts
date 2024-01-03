import * as actionTypes from "../Action/ActionTypes"


type initialStateSignup = {
    start:string,
    response: any,
    error: string | Object
}
type signupAction = {
    type: typeof actionTypes.USER_SIGN_UP_ERROR | typeof actionTypes.USER_SIGN_UP_RESPONSE | typeof actionTypes.USER_SIGN_UP_STATUS,
    payload: Record<string,any> | string
}


export const UserSignupReducer = (state:initialStateSignup,action:signupAction):initialStateSignup => {
    switch(action.type){
        case actionTypes.USER_SIGN_UP_STATUS:
            const startState:initialStateSignup = {
                start : "started",
                response : [],
                error : ""
            }
            return startState
            break;
        case actionTypes.USER_SIGN_UP_RESPONSE:
            const stateResponse:initialStateSignup = {
                start : "success",
                response: action.payload,
                error: ""
            }
            return stateResponse
            break;
        case actionTypes.USER_SIGN_UP_ERROR:
            const stateError: initialStateSignup = {
                start: "Failed",
                response: [],
                error: action.payload
            }
            return stateError
            break;
        default:
            return state
    }
}

type initialStateLogin = {
    start:string,
    response: Record<any,string> | Object,
    error: Record<string,any> | Object
}
type loginAction = {
    type: typeof actionTypes.USER_LOGIN_STATUS | typeof actionTypes.USER_LOGIN_RESPONSE | typeof actionTypes.USER_LOGIN_ERROR,
    payload: Record<string,any> | Object
}

export const UserLoginReducer=(state:initialStateLogin,action:loginAction):initialStateLogin => {
    switch(action.type){
        case actionTypes.USER_LOGIN_STATUS:
            const startState: initialStateLogin = {
                start: "started",
                response :[],
                error:""
            }
            return startState
            break;
        case actionTypes.USER_LOGIN_RESPONSE:
            const responseState:initialStateLogin = {
                start:"success",
                response:action.payload,
                error:""
            }
            return responseState
            break;
        case actionTypes.USER_LOGIN_ERROR:
            const errorState:initialStateLogin = {
                start:"failed",
                response:[],
                error: action.payload
            }
            return errorState
            break;
        default:
            return state
    }
}
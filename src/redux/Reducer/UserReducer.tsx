import * as actionTypes from "../Action/ActionTypes"

interface UserState{
    status:string,
    response: object|any,
    error: string|object
}

const initialState:UserState = {
    status:"",
    response:[],
    error:""
}
const LoginAction = {type:actionTypes.USER_LOGIN_STATUS,payload:{}} || {type:actionTypes.USER_LOGIN_RESPONSE,payload:{}} || {type:actionTypes.USER_LOGIN_ERROR,payload:{}}

export const UserLoginReducer=(state:UserState = initialState,action = LoginAction):UserState=>{
    switch(action.type){
        case actionTypes.USER_LOGIN_STATUS:
            state = {
                status:"started",
                response:[],
                error:""
            }
            return state;
            break;
        case actionTypes.USER_LOGIN_RESPONSE:
            state= {
                status:"success",
                response:action.payload,
                error:""
            }
            return state;
            break;
        case actionTypes.USER_LOGIN_ERROR:
            state= {
                status:"failed",
                response:[],
                error:action.payload
            }
            return state;
            break;
        default:
            return state
    }
}

const SignupAction = {type:actionTypes.USER_SIGN_UP_STATUS,payload:{}} || {type:actionTypes.USER_SIGN_UP_RESPONSE,payload:{}} || {type:actionTypes.USER_SIGN_UP_ERROR,payload:{}}

export const UserSignupReducer = (state:UserState = initialState,action=SignupAction):UserState => {
    switch(action.type){
        case actionTypes.USER_SIGN_UP_STATUS:
            state ={
                status:"started",
                response:[],
                error:""
            }
            return state;
            break;
        case actionTypes.USER_SIGN_UP_RESPONSE:
            state={
                status:"success",
                response:action.payload,
                error:""
            }
            return state;
            break;
        case actionTypes.USER_SIGN_UP_ERROR:
            state = {
                status: "failed",
                response:[],
                error:action.payload
            }
            return state;
            break;
        default:
            return state
    }
}
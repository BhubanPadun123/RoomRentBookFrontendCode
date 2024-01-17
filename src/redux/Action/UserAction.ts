import * as actionTypes from "./ActionTypes"
import makeCall from "../../utils/ApiCall"
import { URLS,base_urls } from "../../utils/config"


export const UserSignupAction = (value: any) => {

    return async (dispatch: any) => {
        dispatch({
            type:actionTypes.USER_SIGN_UP_STATUS,
            payload:["started"]
        })
        try{
            const {response,error} = await makeCall("post",URLS.signup,value,base_urls.backend)
            if(response){
                dispatch({
                    type: actionTypes.USER_SIGN_UP_RESPONSE,
                    payload: response
                })
            }else{
                dispatch({
                    type: actionTypes.USER_SIGN_UP_ERROR,
                    payload: error
                })
            }
        }catch(err){
            console.log("Error while api call",err)
        }     
    }
}


export const UserLoginAction = (value:any)=> {
    return async (dispatch: any) => {
        dispatch({
            type: actionTypes.USER_LOGIN_STATUS,
            payload:["started"]
        })
        try{
            const {response,error} = await makeCall("get",URLS.login,value,base_urls.backend)
            if(response){
                dispatch({
                    type: actionTypes.USER_LOGIN_RESPONSE,
                    payload: response
                })
            }else{
                dispatch({
                    type: actionTypes.USER_LOGIN_ERROR,
                    payload: error
                })
            } 
        }catch(err){
            console.log("Error while call the api",err)
        }             
    }
}
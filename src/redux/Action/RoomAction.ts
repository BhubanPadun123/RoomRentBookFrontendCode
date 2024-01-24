import * as actionTypes from "./ActionTypes"
import makeCall from "../../utils/ApiCall"
import { URLS,base_urls } from "../../utils/config"

export const RoomImgUploadAction=(value:any,owner:string)=>{
    return async (dispatch:any)=>{
        dispatch({
            type:actionTypes.ROOM_IMG_UPLOAD_STATUS,
            payload:{}
        })
        const {response,error} = await makeCall("post",URLS.roomImgUpload,value,base_urls.backend,owner)
        if(response){
            dispatch({
                type: actionTypes.ROOM_IMG_UPLOAD_RESPONSE,
                payload:response
            })
        }
        if(error){
            dispatch({
                type: actionTypes.ROOM_IMG_UPLOAD_ERROR,
                payload: error
            })
        }  
    }
}
export const RoomRegisterAction=(value:object)=>{
    return async(dispatch:any)=>{
        dispatch({
            type: actionTypes.ROOM_REGISTER_STATUS,
            payload:{}
        })
        const {response,error} = await makeCall("post",URLS.roomRegister,value,base_urls.backend)
        if(response){
            dispatch({
                type: actionTypes.ROOM_REGISTER_RESPONSE,
                payload:response
            })
        }
        if(error){
            dispatch({
                type: actionTypes.ROOM_REGISTER_ERROR,
                payload:{}
            })
        }
    }
}



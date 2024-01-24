import * as actionTypes from "../Action/ActionTypes"

interface RoomState {
    status: string,
    response: object | any,
    error: string | object
}

const initialState:RoomState = {
    status:"",
    response:[],
    error:""
}
const RoomImgUploadAction = {type:actionTypes.ROOM_IMG_UPLOAD_STATUS,payload:{}} || {type: actionTypes.ROOM_IMG_UPLOAD_RESPONSE,payload:{}} || {type: actionTypes.ROOM_IMG_UPLOAD_ERROR,payload:{}}

export const RoomImgUploadReducer = (state:RoomState = initialState,action = RoomImgUploadAction):RoomState=>{
    switch(action.type){
        case actionTypes.ROOM_IMG_UPLOAD_STATUS:
            state = {
                status:"started",
                response:[],
                error:""
            }
            return state
            break;
        case actionTypes.ROOM_IMG_UPLOAD_RESPONSE:
            state = {
                status: "success",
                response: action.payload,
                error:""
            }
            return state
            break;
        case actionTypes.ROOM_IMG_UPLOAD_ERROR:
            state = {
                status: "failed",
                response:[],
                error:action.payload
            }
            return state
            break;
        default:
            return state
    }
}

const RoomRegisterAction = {
    type: actionTypes.ROOM_REGISTER_STATUS,
    payload:{}
} || {
    type: actionTypes.ROOM_REGISTER_RESPONSE,
    payload: []
} || {
    type: actionTypes.ROOM_REGISTER_ERROR,
    payload:{}
}

export const RoomRegisterReducer=(state:RoomState = initialState,action = RoomImgUploadAction):RoomState => {
    switch(action.type){
        case actionTypes.ROOM_REGISTER_STATUS:
            state = {
                status:"started",
                response:[],
                error:{}
            }
            return state
            break;
        case actionTypes.ROOM_REGISTER_RESPONSE:
            state = {
                status:"success",
                response:action.payload,
                error:{}
            }
            return state;
        case actionTypes.ROOM_REGISTER_ERROR:
            state = {
                status :"failed",
                response:[],
                error:action.payload
            }
            return state
            break;
        default:
            return state
    }
}
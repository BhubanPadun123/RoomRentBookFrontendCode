import {UserLoginReducer,UserSignupReducer} from "./UserReducer"
import { RoomImgUploadReducer,RoomRegisterReducer } from "./RoomReducer"
import { combineReducers } from "redux"


const rootReducer = combineReducers({
    login: UserLoginReducer,
    signup: UserSignupReducer,
    roomImgUpload: RoomImgUploadReducer,
    roomRegister :RoomRegisterReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
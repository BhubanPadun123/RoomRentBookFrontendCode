import {UserLoginReducer,UserSignupReducer} from "./UserReducer"
import { combineReducers } from "redux"


const rootReducer = combineReducers({
    login: UserLoginReducer,
    signup: UserSignupReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
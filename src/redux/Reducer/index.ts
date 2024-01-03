import React from "react"
import {combineReducers} from "redux"
import {UserLoginReducer,UserSignupReducer} from "./UserReducer"

const rootReducer = combineReducers({
    UserLoginReducer,
    UserSignupReducer
})

export default rootReducer
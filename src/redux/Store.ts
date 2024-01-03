import React from "react";
import { thunk } from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {createStore,applyMiddleware} from "redux"
import rootReducer from "./Reducer";


const middleware = [thunk]


const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store
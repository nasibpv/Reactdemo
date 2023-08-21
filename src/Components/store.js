import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restReducer,cartReducer } from "../Reducers/restReducer"; 
import { configureStore } from "@reduxjs/toolkit";
// ?other methode
//createreducer 
// const reducer=combineReducers({
//     productReducer:restReducer,
//     cart:cartSlice
// })

// middleawre
// const middleware=[thunk]

// create store
// const store=createStore(reducer,applyMiddleware(...middleware
//     ))
// ! store create onr time only
    const store=configureStore({
        reducer:{
            productReducer:restReducer,
            cart:cartReducer
        },
        middleware:[thunk]
        
    })

export default store
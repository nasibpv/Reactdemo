import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "../Reducers/restReducer"; 

//createreducer 
const reducer=combineReducers({
    productReducer:restReducer
})
// middleawre
const middleware=[thunk]

// create store
const store=createStore(reducer,applyMiddleware(...middleware
    ))

export default store
import { SUCCESS,FAIL } from "../Constants/restConstants"

export const restReducer=(state={products:[]},action)=>{
        switch(action.type){
            case SUCCESS:
                return{
                    products:action.payload
                }
            case FAIL :
                    return{
                        products:action.payload
                    }
            default:
                return state
        }
}
import { createSlice } from "@reduxjs/toolkit"
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

const INITIAL_STATE={
    cartCount:0,
    cartList:[]
};
 const cartSlice=createSlice({
    name:'cart',
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state,action)=>{
            const itemExist=state.cartList.find((item) =>item.id === action.payload.id)
            if(itemExist){
                state.cartList.forEach((item)=>{
                    if(item?.id===action.payload.id){
                        item.count=1
                    }  
                });
                return;
            }
             state.cartList.push({
                ...action.payload,
                count:1
             })
        
        },
        increment:(state,action)=>{
            const productID=action.payload
            state.cartList.forEach(item=>{
                if(item?.id=== productID){
                    item.count++
                }
            })

        },
        decrement:(state,action)=>{
            const productID=action.payload
            state.cartList.forEach(item=>{
                console.log(item);
                if(item?.id=== productID){
                    item.count--
                }
            })
        }
    }

})

export const {addToCart,increment,decrement}=cartSlice.actions
export const cartReducer=cartSlice.reducer;
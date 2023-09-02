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
    cartList:[],
    wishList:[]
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
        addToWishList:(state,action)=>{
            const item=state.wishList.find((item) =>item.id === action.payload.id)
            if(item){
                state.wishList.forEach((item)=>{
                    if(item?.id===action.payload.id){
                        item.count=1
                    }  
                });
                return;
            }
             state.wishList.push({
                ...action.payload,
                count:1
             })
        
        },
        removeToWishList:(state,action)=>{
            const itemExist=state.wishList.find((item) =>item.id === action.payload.id)
            if(itemExist){
                state.wishList.forEach((item)=>{
                    if(item?.id===action.payload.id){
                        // item.count=0 
                        state.wishList.pop(action.payload)
                    }  
                });
                return;
            }
            state.wishList.pop({
                ...action.payload,
                count:0
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
                if(item?.id=== productID){
                    if(item.count>1){
                        item.count--
                    }
                    else{
                        item.count=1
                    }
                    
                }
            })
        }
    }

})

export const {addToCart,addToWishList,removeToWishList,increment,decrement}=cartSlice.actions
export const cartReducer=cartSlice.reducer;

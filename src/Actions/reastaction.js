import axios from "axios";
import { SUCCESS,FAIL } from "../Constants/restConstants";
export const productList = ()=>async(dispatch)=>{
    // const result =await axios.get('./products.json')
    //  OR   distructure methode
    try{
        const {data} =await axios.get('./products.json')

    // console.log(result.data);
    // console.log(data);
    dispatch(
        {
            payload:data.products,
            type:SUCCESS
        }
    )
    }
    catch(eror){
        dispatch(
            {
                payload:eror,
                type:FAIL
            }
        )
    }

}
export const cartList = ()=>async(dispatch)=>{
    // const result =await axios.get('./products.json')
    //  OR   distructure methode
    try{
        const {data} =await axios.get('./products.json')

    // console.log(result.data);
    console.log(data);
    dispatch(
        {
            payload:data.products,
            type:SUCCESS
        }
    )
    }
    catch(eror){
        dispatch(
            {
                payload:eror,
                type:FAIL
            }
        )
    }

}

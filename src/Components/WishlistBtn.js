import {React, useMemo} from 'react'
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import  { addToWishList,removeToWishList } from '../Reducers/restReducer';

function WishlistBtn({product}) {
  // console.log(product);

    const dispatch=useDispatch()

    const {wishList}=useSelector(state=>state.cart)
// console.log(wishList);
    const cartCount=useMemo(()=>{
        return wishList?.find((item)=>item?.id===product?.id)?.count
    },[wishList])
    // console.log(wishList);
  return (
    <>  



{cartCount>0 ?
     <button  onClick={()=>dispatch(removeToWishList(product))}  id='button-icon' className='wishlist-botton-after'><AiFillHeart   className='wishlist-icon-after'/></button>
     :     <button onClick={()=>dispatch(addToWishList(product))} id='button-icon' className='wishlist-botton-before'><AiOutlineHeart   className='wishlist-icon-before'/></button>

}    
</>
  )
}


export default WishlistBtn
import React from 'react'
import Col from 'react-bootstrap/Col';
import AfterCart from './AfterCart';
import BeforeCart from './BeforeCart';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useMemo } from 'react';

function CartButtons({product}) {
    // console.log(productID);
    const {cartList}=useSelector(state=>state.cart)
    const cartCount=useMemo(()=>{
        return cartList?.find((item)=>item?.id===product?.id)?.count
    },[cartList])
// console.log(cartCount);

    function Buynow(){
        alert('Currently out of stock for you ')
    }
  return (
    <>  
           <Col>{cartCount>0 ?<AfterCart product={product} />:<BeforeCart product={product}/>}</Col>
    <Col><Button onClick={Buynow} variant="primary p-3">BUY NOW</Button></Col>
</>
  )
}

export default CartButtons
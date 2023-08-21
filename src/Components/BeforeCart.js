import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Reducers/restReducer';
function BeforeCart({product}) {
    const dispatch=useDispatch()

  return (
    <div>
    <Button className='p-3' variant="danger " onClick={()=>dispatch(addToCart(product))}>Add Cart</Button>
</div>
  )
}

export default BeforeCart
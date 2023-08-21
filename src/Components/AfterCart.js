import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function AfterCart() {
  return (
    <div>
            <Link to={'/addcart'} style={{textDecoration:"none",color:'white'}}><Button className='p-3'  variant="danger ">View Cart</Button></Link>

    </div>
  )
}

export default AfterCart
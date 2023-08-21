import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function AfterCart() {
  return (
    <div>
            <Button className='p-3'  variant="danger "><Link to={'/addcart'} style={{textDecoration:"none",color:'white'}}>View Cart</Link></Button>

    </div>
  )
}

export default AfterCart
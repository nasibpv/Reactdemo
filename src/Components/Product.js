import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Product({prodData}) {
  // console.log(prodData);
  return (
    <div>

         <Card  id='product-card' className='card p-1'>
         {/* <div  className='wishlist' >
            <WishlistBtn product={{prodData}} />
          </div> */}
          <Link to={`/product/${prodData.id}`} style={{textDecoration:"none", color:"black"}}>

             <Card.Img variant="top" src={prodData.image}  style={{height:'170px'}} id='product-image'  className='card-img'/>
              <Card.Body>
               <Card.Text className='card-title' id='product-title' style={{}}>{prodData.title}</Card.Text>
                <Card.Subtitle><strong className="text-success">from </strong>{prodData.price}</Card.Subtitle>
                <Card.Text>{prodData.category}</Card.Text>
              </Card.Body>
              </Link>
         </Card>
    
    </div>
  )
}

export default Product
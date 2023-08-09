import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../Stylesheet/Products.css';
function Products({prodData}) {
  return (
    <div>
    <Link to={`/product-category/${prodData.categoryid}`} style={{textDecoration:"none", color:"black"}}>
         <Card style={{ height:"370px" }} id='product-card' className='card'>
             <Card.Img variant="top" src={prodData.image} id='product-image'  style={{height:'190px'}} className='card-img'/>
              <Card.Body>
               <Card.Text className='card-title' id='product-title' style={{}}>{prodData.title}</Card.Text>
                {/* <Card.Subtitle><strong className="text-success">from </strong>{prodData.price}</Card.Subtitle> */}
                <Card.Text>{prodData.category}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
         </Card>
    </Link>
 </div>
  )
}

export default Products
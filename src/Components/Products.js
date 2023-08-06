import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products({prodData}) {
  return (
    <div>
    <Link to={`/product/${prodData.id}`} style={{textDecoration:"none", color:"black"}}>
         <Card style={{ width: '13rem',height:"360px" }} className='card p-1'>
             <Card.Img variant="top" src={prodData.image}  style={{height:'170px'}} className='card-img'/>
              <Card.Body>
               <Card.Text className='card-title' style={{}}>{prodData.title}</Card.Text>
                <Card.Subtitle><strong className="text-success">from </strong>{prodData.price}</Card.Subtitle>
                <Card.Text>{prodData.category}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
         </Card>
    </Link>
 </div>
  )
}

export default Products
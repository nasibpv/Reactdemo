import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from './Product';
import '../Stylesheet/Products.css'

function Productcategory() {
    const params=useParams()
   const {products}=useSelector(state=>state.productReducer)
   const product= products.filter(item=>item.categoryid==params.id)
  return (
    <Row className='ps-3 w-100' style={{minHeight:'86vh'}}>
      {
        product.map(item => (
          <Col lg={2} md={4} sm={6} xsm={6}>
            <Product prodData={item}></Product>
          </Col>
        ))
      }

    </Row>
  )
}

export default Productcategory
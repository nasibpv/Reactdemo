import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdStars } from "react-icons/md";
import { PiGiftFill } from "react-icons/pi";
import { BiSolidHelpCircle } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";

function Footer() {
  return (
    <div>
        <Row className='w-100  bg-primary text-white' style={{display:"flex",justifyContent:"center"}}>
         <Col lg={3} md={3} sm={2} ><a style={{margin:'5px'}}><RiShoppingBag2Fill style={{height:"auto"}} className='text-info'/> Become a Seller</a></Col>
              <Col lg={2} md={2} sm={2}><a style={{margin:'5px'}}><MdStars style={{height:"Auto"}} className='text-info'/> Advertise </a></Col>
              <Col lg={2} md={2} sm={2}><a style={{margin:'5px'}}><PiGiftFill style={{height:"auto"}} className='text-info'/> GIft Cards</a></Col>
              <Col lg={2} md={2} sm={2}><a style={{margin:'5px'}}><BiSolidHelpCircle style={{height:"auto"}} className='text-info'/> Help Center</a></Col>
              <Col lg={3} md={3} sm={2} className='mt-1'><p> 2023 XinStore.com</p></Col>
        </Row>
    </div>
  )
}

export default Footer
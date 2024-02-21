import React from 'react'
import Row from 'react-bootstrap/Row';
import { MdStars } from "react-icons/md";
import { PiGiftFill } from "react-icons/pi";
import { BiSolidHelpCircle } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";

function Footer() {
  return (
    <div className=' bg-primary '>
        <Row className='ps-3 text-white text-center pt-1' style={{width:'100%'}}>
              <p><a href='/xinstore-redux-' style={{margin:'5px'}}><RiShoppingBag2Fill style={{height:"20px",width:'20px'}} className='text-info'/> Become a Seller</a>
               <a href='/xinstore-redux-' style={{margin:'5px'}}><MdStars style={{height:"20px",width:'20px'}} className='text-info'/> Advertise </a><a href='/xinstore-redux-' style={{margin:'5px'}}><PiGiftFill style={{height:"20px",width:'20px'}} className='text-info'/> GIft Cards</a><a href='/xinstore-redux-' style={{margin:'5px'}}><BiSolidHelpCircle style={{height:"20px",width:'20px'}} className='text-info'/> Help Center</a> 2023 XinStore.com</p>
        </Row>
    </div>
  )
}

export default Footer
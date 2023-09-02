import {React} from 'react'
import '../Stylesheet/AddCarts.css';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAttachMoney } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../Reducers/restReducer'
import { useNavigate } from 'react-router-dom';

export function Addcards() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
const {cartList}=useSelector((state)=>state.cart)
const goBack=()=>{
    navigate(-1)
}
  return (
   <>
   <div className='cart-nav'>
    <h4 className='cart-nav-head'>Cart</h4>
    <button onClick={goBack} className='cart-nav-close-button'>X</button>
   </div>
        
        <div style={{minHeight:'90vh',padding:'10px'}}>
            {
                cartList.map(item=>(
                <Row className=' border border-round mb-1' id='cart-row'>
                <Col lg={4} md={3} sm={3} style={{padding:"0px"}} className='container' id='add-image-col'>
                <Card className='container' id='add-image-cart'>
              <Card.Img variant="top" src={item.image}  id='add-cart-image' className='container p-0'/>
            </Card></Col>
                <Col lg={6} md={6} sm={8} id='cart-content-col'>
                <Card  className='text-start' id='cart-content-card' >
              <Card.Body id='cart-content-body'>
                <Card.Title>{item.title}</Card.Title>
                <div className='row ms-1 mb-1 '>
                <Row className='container'>
                <div className='after-cart'>
            <button onClick={()=>dispatch(decrement(item.id))} className='cart-counter-button'>-</button>
            <div className='cart-counter'>{item.count}</div>
            <button onClick={()=>dispatch(increment(item.id))} className='cart-counter-button'>+</button>
        </div>
                </Row>
                </div>
                <Card.Subtitle className="mb " style={{height:"30px",fontSize:"larger"}}><MdAttachMoney style={{width:"8%" ,height:"30px"}}/>{item.price*item.count} </Card.Subtitle>
              </Card.Body>
            </Card>
                </Col>
              </Row>
              ))
              }
        </div>
   </>
  )
}



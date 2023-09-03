import {React} from 'react'
import '../Stylesheet/AddCarts.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAttachMoney,MdDelete } from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { removeToWishList } from '../Reducers/restReducer';

export function Wishlist() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {wishList}=useSelector(state=>state.cart)
  console.log(wishList);
const goBack=()=>{
    navigate(-1)
}
  return (
   <>
   <div className='cart-nav'>
    <h4 className='cart-nav-head'>Wishlist</h4>
    <button onClick={goBack} className='cart-nav-close-button'>X</button>
   </div>
        
        <div style={{minHeight:'90vh',padding:'10px'}}>
            {
                wishList.map(item=>(
                <Row className=' border border-round mt-1'  id='cart-row'>
                <Col lg={4} md={3} sm={3} style={{padding:"0px"}} className='container' id='add-image-col'>
                <Card className='container ' id='add-image-cart'>
              <Card.Img variant="top" src={item.image}  id='add-cart-image' className='container p-0'/>
            </Card></Col>
                <Col lg={6} md={6} sm={8} id='cart-content-col'>
                <Card  className='text-start' id='cart-content-card' >
              <Card.Body id='cart-content-body p-3'>
                <Card.Title>{item.title}</Card.Title>
                <div className='row ms-1 mb-3 w-100'>
            <div style={{maxWidth:"35%"}} className='bg-success col-lg-5 col-md-3 col-sm-6 rounded text-light '>{item.rating.rate} <AiFillStar style={{width:"33%" ,height:"22px"}}/></div>
            <div className='w-50 col-lg-9 col-md-7 col-sm-3 text-muted'>({item.rating.count})</div>
          </div>
                <Card.Subtitle className="mb mt-2" style={{height:"30px",fontSize:"larger"}}><MdAttachMoney style={{width:"8%" ,height:"30px"}}/>{item.price} </Card.Subtitle>
              </Card.Body>
              <div className='wishlist-remove' >
              <button  onClick={()=>dispatch(removeToWishList(wishList))}  id='button-icon' className='wishlist-remove-button'><MdDelete   className='wishlist-icon'/></button>
              </div>
            </Card>
                </Col>
              </Row>
              ))
              }
        </div>
   </>
  )
}


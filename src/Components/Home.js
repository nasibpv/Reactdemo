import {React,useEffect} from 'react'
import Products from './Products';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Stylesheet/Products.css'
import { productList } from '../Actions/reastaction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import About from './About';


function Home() {
    const dispatch=useDispatch()

    useEffect(()=>{
    //?   getData()
      dispatch(productList());
    })
    const {products}=useSelector(state=>state.productReducer)
  return (
   <div className='m-0 p-0'>
      <Row className='ps-0 m-0 w-100'>
        {
          products?.map(item => (
            <Col lg={2} md={4} sm={6} xsm={6} id='product-div'>
              <Products prodData={item}></Products>
            </Col>
          ))
        }
    <About name='RT'/>
      </Row>
   </div>
  )
}

export default Home
import {React,useState,useEffect} from 'react'
import Products from './Products';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Stylesheet/Products.css'
import { productList } from '../Actions/reastaction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';


function Home() {
    // var [products,setProduct]=useState([])
    
    // const getData = ()=>{
    //   fetch('./products.json',{headers :{
    //     'content-Type':'appication/json',
    //     'Accept':'application/json'
    //   }}).then((response)=>{
    //     return response.json(0)
    //   }).then((myjson)=>{
    //     setProduct(myjson)
    //   })
    // }
    const dispatch=useDispatch()

    useEffect(()=>{
    //   getData()
      dispatch(productList())
    },[])
    const {products}=useSelector(state=>state.productReducer)
  return (
    <Row className='ps-3 w-100'>
      {
        products.map(item => (
          <Col lg={2} md={4} sm={6} xsm={6}>
            <Products prodData={item}></Products>
          </Col>
        ))
      }

    </Row>
  )
}

export default Home
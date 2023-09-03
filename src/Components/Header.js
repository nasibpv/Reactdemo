import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineProductionQuantityLimits} from 'react-icons/md';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { AiFillHeart } from "react-icons/ai";

export function Header() {
  const {cartList =[]}=useSelector((state)=>state.cart)  // 
  // cartList {{count} {count} {count}}=total
  // total cart 
  // const totalCartCartCount=cartList.reduce((acc,value)=>(acc+=value,count),0)
  // console.log(totalCartCount);
  
  return (
    <>  
        <Navbar bg="primary" data-bs-theme="dark" style={{width:'auto'}}>
        <Container>
          <Navbar.Brand href="/xinstore-redux-"><MdOutlineProductionQuantityLimits style={{width:"20%",height:"30px"}}/>X<strong className='text-info'>in</strong>Store</Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end text-center ' id="basic-navbar-nav">
            <NavDropdown title="Category" id="basic-nav-dropdown" className='header-dropdown-links me-3'>
           <Link to={'/product-category/101'} style={{textDecoration:"none", color:"black"}}>
                <NavDropdown.Item href='/product-category/101'>Men's Clothing</NavDropdown.Item>
  
            </Link>              
             <Link to={'/product-category/106'} style={{textDecoration:"none", color:"black"}}> <NavDropdown.Item href='/product-category/106'>Bags & backpacks</NavDropdown.Item></Link>
             <Link to={'/product-category/102'} style={{textDecoration:"none", color:"black"}}> <NavDropdown.Item href='/product-category/102'>Jewelery</NavDropdown.Item></Link>
              {/* <NavDropdown.Divider /> */}
            <Link to={'/product-category/103'} style={{textDecoration:"none", color:"black"}}>  <NavDropdown.Item href='/product-category/103'>Electronics</NavDropdown.Item></Link>
            <Link to={'/product-category/103'} style={{textDecoration:"none", color:"black"}}>  <NavDropdown.Item href='/product-category/104'>Women's clothing</NavDropdown.Item></Link>

            </NavDropdown>

              <Link className='header-links me-3' id='header-links' to={'/wishlist'}  ><AiFillHeart style={{width:"20px",marginTop:"-2px"}}/>Wishlist</Link>
  
   <div className='cart-right-section ms-1' >
    <Link   to={"/addcart"} id='' className='cartLink' > 
        <div className='cart-counts'>{cartList?.length}</div>
      <svg xmlns="" width="32" height="32" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path fill='#fff' d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> 
    </Link>
    </div>
        </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}


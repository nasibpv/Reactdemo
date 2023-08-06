import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineProductionQuantityLimits} from 'react-icons/md';

function Header() {
  return (
    <>
        <Navbar bg="primary" data-bs-theme="dark" style={{width:'auto'}}>
        <Container>
          <Navbar.Brand href="/Reactdemo"><MdOutlineProductionQuantityLimits style={{width:"20%",height:"30px"}}/>X<strong className='text-info'>in</strong>Store</Navbar.Brand>
          <Nav className="me-auto">
            {/* <input type="search"  className='form-control bg-white ms-5'>
            </input>
            <button className='p-1'>b</button> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Men;s Cloth</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
         
        </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
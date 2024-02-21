import React from 'react'
import '../Stylesheet/About.css'
import { Col, Row } from 'react-bootstrap';

function About() {
  return (
    <Row className='body p-3 g-3 m-0' id='about'>
        <Col md={4} lg={2} sm={6}  className='about-card'>
          <h5 className='about-heading' >ABOUT</h5>
          <p className='p-0 m-0'><a href='#'  className='about-link' >Contact Us</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >About Us</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >XinStore Stories</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >Cleartrip</a></p>
          </Col>
        <Col md={4} lg={2} sm={6} className='about-card'>
          <h5 className='about-heading' >HELP</h5>
          <p className='p-0 m-0'><a href='#' className='about-link' >Payments</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >Shipping</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >Cancellation & Returns</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >FAQ</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >Report Infringement</a></p>

          </Col>
        <Col md={4} lg={2} sm={6} className='about-card about-card-3'>
          <h5 className='about-heading'>CONSUMER POLICY</h5>
          <p className='p-0 m-0'><a href='#' className='about-link' >Cancellation & Returns</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >Terms Of Use</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >Security</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >Prrivacy</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >Sitemap</a></p>
          </Col>
        <Col md={4} lg={2} sm={6} className='about-card '>
          <h5 className='about-heading'>SOCIAL</h5>
          <p className='p-0 m-0'><a href='#' className='about-link' >Facebook</a></p>
          <p className='p-0 m-0'><a href='#' className='about-link' >Twitter</a></p>
          <p className='p-0 m-0'><a href='#'  className='about-link' >YouTube</a></p>
          </Col>        <Col md={4} lg={2} sm={6} className='about-card'>
          <h5 className='about-heading'>MAIL Us:</h5>
          <p className='about-content'>XinStore Private Limited,<br/>
          Building Alyssa tech Village & <br/>
          Clove Embassy Tech Village,<br/> Outer Ring Road,Devarabeesanahalli Village,<br/>Bengaluru, 560103</p>
          </Col>
        <Col md={4} lg={2} sm={6} className='about-card'>
          <h5 className='about-heading' >Office Address:</h5>
          <p className='about-content'>XinStore Private Limited,<br/>
          Building Alyssa tech Village & <br/>
          Clove Embassy Tech Village,<br/> Outer Ring Road,Devarabeesanahalli Village,<br/>Bengaluru, 560103<br/>CIN : U515151HA2023PTC06586310<br/>Telephone: +91 807821095</p>
          </Col>
    </Row>
  )
}

export default About
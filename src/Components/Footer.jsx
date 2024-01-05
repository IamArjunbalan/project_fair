import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
        <div style={{ width:'100%', height: '320px', backgroundColor:' #889999'}}>
        <Row className='p-5'>
          <Col md='4'>
            <h4> <i class="fa-solid fa-diagram-project fa-beat me-5" style={{color: '#18191b'}}></i>{''}
        Project Fair</h4>
        <p style={{textAlign:'justify'}} >Streamline your projects with our intuitive project management website. Effortlessly organize tasks, collaborate with teams, and track progress in real-time, ensuring seamless project coordination from inception to completion. </p>
          </Col>
          <Col md='4' className='d-flex flex-column text-center'>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'black'}} >Landing page</Link>
            <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>Login</Link>
            <Link to={'/Register'} style={{textDecoration:'none',color:'black'}}>Register</Link>
          </Col>
          <Col md='4' className=' d-flex flex-column text-center'>
            <h4>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none' ,color:'black'}}>React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'black'}}>React Bootstrap</Link>
            <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'black'}}>Fontawesome</Link>
          </Col>
        </Row>
        <p className='text-center mt-3 '>Copyright  © 2023 React Bootstrap. Built with Docusaurus</p>
      </div>
    </div>
  )
}

export default Footer
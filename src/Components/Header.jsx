import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header({InDashboard}) {
  return (
    <Navbar className="position-fixed top-0 w-100" style={{backgroundColor:' #1f6cb5',zIndex:1}}>
        <Container>
            <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-diagram-project fa-beat me-5" style={{color: '#18191b'}}> </i>{' '}
            Project Fair
          </Navbar.Brand>
          </Link>
          {
            InDashboard&&
            <div className='ms-auto btn' style={{backgroundColor:'#c8d6db'}}>
              Log Out {' '}
              <i class="fa-solid fa-right-long"></i>


            </div>
          }
        </Container>
      </Navbar>
  )
}

export default Header
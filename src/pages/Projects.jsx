import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
      <Header />

      <div style={{ margin: '100px' }}>
        <div className='text-center mx-2 mb-3 '>
          <h3>All projects</h3>
          <div className=' d-flex  mt-5 justify-content-center w-100'>

          <div className='d-flex align-items-center border rounded w-50'>
            <input type="text" placeholder='Enter Technology to search' className='form-control rounded' />
            <div className='ms-3 px-3'>
              <i class="fa-solid fa-magnifying-glass"></i>

            </div>
          </div>
          </div>
        </div>
        <div className='container container-fluid'>
          <Row>
            <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
            </Col>
          </Row>

        </div>
       

      </div>
    </div>
  )
}

export default Projects
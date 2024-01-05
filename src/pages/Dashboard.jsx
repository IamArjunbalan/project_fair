import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Myprojects from '../Components/Myprojects'
import Profile from '../Components/Profile'


function Dashboard() {
  
  return (
    <div className='mt-3'>
      <Header InDashboard={true}/>
      <Row style={{marginTop:'100px',marginBottom:'20px'}}>
        <Col sm={12} md={8}>
          <h1>Welcome <span className='text-warning'>User</span></h1>
          <Myprojects/>
        </Col>
        <Col sm={12} md={4}>
          <Profile/>

        </Col>
        </Row>
    </div>
  )
}

export default Dashboard
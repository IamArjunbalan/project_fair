import React,{useState} from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import designerImg from '../Assets/Daco_4184671.png'
import Homeprojects from '../Components/Homeprojects'
import { Link } from 'react-router-dom'
import Projects from './Projects'



function PFHome() {

  const [isLogged,setisLogged]=useState(false)
  return (
   <>
   <div className='container-fluid rounded' style={{width:'100%',height:'100%',backgroundColor:'#1f6cb5'}}>
    <Row className='align-items-center p-5 h-100' >
        <Col sm={12} md={6}>
            <h1 style={{fontSize:'80px'}} className='text-light'>
            <i class="fa-solid fa-diagram-project fa-beat me-5" style={{color: '#18191b'}}> </i>
        
             Project Fair</h1>

             <p className='mt-3' style={{textAlign:'justify'}}>One stop destination for projects.  Effortlessly organize tasks, collaborate with teams, and track progress in real-time, ensuring seamless project coordination from inception to completion</p>
             {
              isLogged?
              <Link to={'/dashboard'}  className='btn btn-warning'>Manage your projects <i class="fa-solid fa-right-long"></i></Link>
              :
              <Link to={'/login'}  className='btn btn-success'>Start to explore <i class="fa-solid fa-right-long"></i></Link>


             }
             
        </Col>
        <Col>
          <img src={designerImg}  className='img-fluid' alt="" />
        </Col>
    </Row>

   </div>

   <div className='my-5'>
   <h1 className='fw-bold text-center'>PROJECTS</h1>
    <marquee behavior="" direction="">
    <Homeprojects/>
    </marquee>
    <div className='align-item-center'>
    <Link to={'/Projects'} className='d-flex justify-content-center'>see more</Link>
      
    </div>
    
   </div>


   </>
  )
}

export default PFHome
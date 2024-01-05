import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import projectImg from '../Assets/media player.png'
import { Button, Col, Modal, Row } from 'react-bootstrap';



function ProjectCard() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        
            <Card  onClick={handleShow} style={{ width: '18rem' }} className='rounded border shadow'>
                <Card.Img variant="top" src={projectImg} />
                <Card.Body>
                    <Card.Title>Media player</Card.Title>
                    
                </Card.Body>
            </Card>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Row>
            <Col sm={12} md={6}>
                <img  src={projectImg} alt='img' className='img-fluid'/>
                
            </Col>
            <Col sm={12} md={6}>
                <h5>Media Player</h5>
                <p>Immerse yourself in seamless audio and video playback with our intuitive media player web application, offering a sleek interface and advanced features for an immersive multimedia experience.</p>
                <p><span className='fw-bold'>Language used:</span>HTML,CSS,Js</p>

                <div>
                    <a  target='_blank'  className='btn me-2' href='https://github.com/IamArjunbalan/react_media_player.git' >
                    <i class="fa-brands fa-github fa-2x"></i>
                    </a>

                    <a target='_blank'  className='btn' href='https://incredible-froyo-f56ddc.netlify.app'>
                    <i class="fa-solid fa-link fa-2x"></i>

                    </a>
                </div>
            </Col>
         </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default ProjectCard
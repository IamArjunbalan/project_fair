import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Auth({ register }) {
    const registerForm = register ? true : false
    return (
        <div style={{ width: '100%', heigh: '100vh' }} className='d-flex justify-content-center'>
            <div className=' container w-5'>
                <Link to={'/'} style={{ textDecoration: 'none' }} className='d-flex align-items-center'>
                    <i class="fa-solid fa-arrow-left"></i>
                    Back to Home

                </Link>
                <div className='bg-dark p-5 rounded'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img src="https://oliveconnection.com/wp-content/uploads/2020/07/signup@2x-8.png" alt="image" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex align-items-center flex-column'>
                                <div className='d-flex mt-2 text-light'>
                                    <i class="fa-solid fa-diagram-project fa-beat " style={{ color: '#e6eaed' }}> </i>
                                    <span className='h1 fw-bolder'>Project Fair</span>


                                </div>
                                <h4 className='text-light'>
                                    {
                                        registerForm ? 'Sign Up For project Fair' : 'Sign In For Project Fair'
                                    }
                                </h4>
                                <form className='w-100 text-light'>
                                    {
                                        registerForm &&
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email address" />
                                        </Form.Group>

                                    }
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>password</Form.Label>
                                        <Form.Control type="password" placeholder=" Enter Password" />
                                    </Form.Group>

                                    {/* <div className='d-flex justify-content-center mt-4'>
                                            
                                                <Button className='btn-success '>
                                                    {
                                                        registerForm ? "sign in" : "sign up"

                                                    }
                                                </Button>
                                                

                                            
                                        </div> */}

                                    {
                                        registerForm ?
                                            <div>
                                                <button  type='submit' className='btn btn-primary'>Sign up</button>
                                                <Link to={'/login'} className='ms-3'>Already a user? sign in...</Link>
                                            </div> :
                                            <div>
                                                <button type='submit' className='btn btn-primary'>Sign in</button>
                                                <Link to={'/register'} className='ms-3'>New user? sign up...</Link>
                                            </div>
                                    }
                                </form>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Auth
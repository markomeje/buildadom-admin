import { useEffect, useState } from 'react';
import { Form, Row, Col, Alert, Button, Image } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import spinner from '../../assets/spinner.svg';
import { useAuth } from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import Process from '../../pages/Reset/Process';


export default function LoginForm() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const url = import.meta.env.VITE_API_URL;
   const {successful, handleSubmit, message, submitting, errors, handleChange, response} = useForm(`${url}/auth/login`, {});

   const { login, user } = useAuth();
   useEffect(() => {
      if(successful){
         const { user } = response;
         if (user) {
            login(user);
         }
      };
   }, [successful]);
      
   
   return (
      <>
         {user.token ? <Navigate to='/marchant' /> : (<Form onSubmit={handleSubmit}>
            <Row>
               <Col md='12'>
                  <Form.Group className="mb-3">
                     <Form.Label className='text-dark'>Email</Form.Label>
                     <Form.Control size='lg' type="email" className={errors && errors?.email ? 'is-invalid' : ''} name="email" placeholder="Enter your email" onChange={handleChange} />
                     {errors && errors?.email ? (<small className='text-danger'>{errors.email}</small>) : ''}
                  </Form.Group>
               </Col>
               <Col md='12'>
                  <Form.Group className="mb-3">
                     <Form.Label className='d-flex justify-content-between'>
                        <div className='text-dark'>Password</div>
                        <div className='cursor-pointer text-main' onClick={() => setShow(true)}>Forgot password?</div>
                     </Form.Label>
                     <Form.Control size='lg' type="password" className={errors?.password && 'is-invalid'} name="password" placeholder="Enter your password" onChange={handleChange} />
                     {errors && errors?.password ? (<small className='text-danger'>{errors.password}</small>) : ''}
                  </Form.Group>
               </Col>
            </Row>
            {message && <Alert className='mb-4 mt-2' variant={successful ? 'success' : 'danger'}>{message}</Alert>}
            <span className='d-flex justify-content-end mt-2' style={{ cursor: submitting ? 'not-allowed' : 'default' }}>
               <Button className='bg-main px-4 w-100 text-center py-2 btn-lg rounded-pill' disabled={submitting} type="submit">
                  <small className='text-white'>{submitting ? <Image src={spinner} /> : 'Login'}</small>
               </Button>
            </span>
         </Form>)}
         <Process show={show} handleClose={handleClose} />
      </>
   )
}

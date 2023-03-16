import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import SignupArrow from '../../assets/arrow-signup.png';
import Footer from '../../components/Footer';
import { useState } from 'react';
import SingupMan from '../../assets/man-design.png'
import SignupForm from '../../components/Forms/SignupForm';
import Navbar from '../../components/Navbar/Navbar';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Marchant from '../Marchant/Marchant';

export default function Signup() {
   const [type, setType] = useState('');
   const types = ['business', 'individual'];
   const changedToType = type === 'business' ? 'individual' : 'business';
   const { user } = useAuth();

   return (
      <>
         <Navbar showCenterLinks={false} />                                                  
         {user.token ? <Navigate to='/' /> : (<div style={{ marginTop: '50px' }}>
            {types.includes(type) ? (<Container style={{ paddingTop: '120px', paddingBottom: '120px' }}>
               <Row className='d-flex justify-content-center'>
                  <Col xs='12' md='7' lg='5'>
                     <div className='m-auto text-center' style={{ maxWidth: '240px' }}>
                        <div className='bg-light cursor-pointer border p-2 rounded-pill mb-3' onClick={() => setType(changedToType)}>
                           <small className='text-dark'>Or register as {changedToType === 'individual' ? 'an' : 'a'} {changedToType}?</small>
                        </div>
                     </div>
                     <h1 className='text-center mb-4'>Create your {`${type}`} account</h1>
                     <div className='d-flex align-items-center justify-content-center mb-5'>
                        <div className='bg-main' style={{ width: '40px', height: '2px' }}></div>
                        <div className='bg-main rounded-circle' style={{ width: '20px', height: '20px' }}></div>
                        <div className='border' style={{ width: '40px', height: '2px' }}></div>
                        <div className='border rounded-circle' style={{ width: '20px', height: '20px' }}></div>
                        <div className='border' style={{ width: '40px', height: '2px' }}></div>
                        <div className='border rounded-circle' style={{ width: '20px', height: '20px' }}></div>
                        <div className='border' style={{ width: '40px', height: '2px' }}></div>
                     </div>
                     <div className='m-auto mb-5' style={{ maxWidth: '360px' }}>
                        <p className='text-center'>Kindly provide all the following details to help us set up your store.</p>
                     </div>
                  </Col>
               </Row>
               <Row className='d-flex justify-content-center'>
                  <Col sm='12' md='8' lg='6'>
                     <SignupForm type={type} />
                  </Col>
               </Row>
            </Container>) : (<Container style={{ marginTop: '50px', maxWidth: '1203px' }}>
               <Row className='d-flex align-items-center justify-content-center'>
                  <Col sm='12' md='6'>
                     <div className='px-3'>
                        <Image src={SingupMan} className='img-fluid h-100' />
                     </div>
                  </Col>
                  <Col sm='12' md='6' className='text-center'>
                     <div className='px-3 bg-white shadow-sm' style={{ padding: '40px 0 100px' }}>
                        <Image src={SignupArrow} className='mb-3' />
                        <h2 className='text-dark'>Welcome to buildadom</h2>
                        <p className='text-dark px-lg-5'>Choose method of registration to proceed with creatng your account with us.</p>
                        <div className='d-flex justify-content-center flex-column px-lg-5'>
                           {types && types.map((type, index) => {
                              return (<Button key={index} onClick={() => setType(type)} className='bg-main rounded-pill px-4 py-2 text-white mb-4' >Register as {type === 'individual' ? 'an' : 'a'} {`${type}`}</Button>)
                           })}
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>)}
         </div>)}
         <Footer />
      </> 
   )
}

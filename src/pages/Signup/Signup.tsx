import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import styles from './Signup.module.css';
import SignupArrow from '../../assets/arrow-signup.png';
import Footer from '../../components/Footer/Footer';
import SignupModal from '../../components/Modals/SignupModal';
import { useState } from 'react';
import SingupMan from '../../assets/man-design.png'

export default function Signup() {
   const [show, setShow] = useState(false);
   const [title, setTitle] = useState('');
   const [type, setType] = useState('business');

   return (                                                          
      <>
         <SignupModal title={title} type={type} show={show} handleClose={() => setShow(false)} />
         <Container style={{ marginTop: '50px', maxWidth: '1203px' }}>
            <Row className='d-flex align-items-center justify-content-center'>
               <Col sm='12' md='6'>
                  <div className='px-3'>
                     <Image src={SingupMan} className='img-fluid h-100' />
                  </div>
               </Col>
               <Col sm='12' md='6' className='text-center'>
                  <div className='px-3' style={{ padding: '40px 0 100px' }}>
                     <Image src={SignupArrow} className='mb-3' />
                     <h2 className='text-dark'>Welcome to buildadom</h2>
                     <p className='text-dark px-lg-5'>Choose method of registration to proceed with creatng your account with us.</p>
                     <div className='d-flex justify-content-center flex-column px-lg-5'>
                        <Button className='bg-main rounded-pill px-4 py-2 text-white mb-4' onClick={() => {setTitle('Create your Individual business account'); setShow(true); setType('individual')}} title="">Register as an Individual</Button>
                        <Button className='bg-main rounded-pill px-4 py-2 text-white' onClick={() => {setTitle('Create your business account'); setShow(true); setType('business')}}>Register as an business</Button>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
         {/* <div className={`w-100 d-flex justify-content-between ${styles.wrapper}`}>
            <div className={`bg-white ${styles.left}`}>
            </div>
            <div className={`bg-white px-3 ${styles.right}`}>
               <div className='text-center py-4'>
                  <Image src={SignupArrow} className='mb-3' />
                  <h1 className='text-dark'>Welcome to buildadom</h1>
                  <p className='text-dark'>Choose method of registration to proceed with creatng your account with us.</p>
                  <div className='my-4 d-flex justify-content-center flex-column'>
                     <Button className='bg-main rounded-pill px-4 py-2 text-white mb-4' onClick={() => {setTitle('Register as an Individual'); setShow(true); setType('individual')}} title="">Register as an Individual</Button>
                     <Button className='bg-main rounded-pill px-4 py-2 text-white' onClick={() => {setTitle('Register as a business'); setShow(true); setType('business')}}>Register as an business</Button>
                  </div>
               </div>
            </div>
         </div> */}
         <Footer />
      </>
   )
}

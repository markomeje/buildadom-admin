import Vector24 from '../../assets/Vector24.png';
import { Link} from 'react-router-dom';
import { Button, Col, Container, Row, Image, Form } from 'react-bootstrap'

export default function Footer() {
   return (
      <section className='bg-dark'>
         <Container>
            <div style={{ padding: '120px 0' }}>
               <Row>
                  <Col sm="12" md="5" className='mb-4'>
                     <div className='d-flex align-items-center mb-4'>
                        <Image src={Vector24} className='me-3' />
                        <h3 className='text-white'>House Depot</h3>
                     </div>
                     <div>
                        <h5 className='text-white'>Sign Up To Our Newsletter.</h5>
                        <p className='text-white'>Be the first to hear about the latest offers.</p>
                        <Row className="d-flex align-items-center">
                           <Col sm="12" md="auto" className='mb-3'>
                              <Form.Group className="">
                                 <Form.Control type="email" placeholder="Enter email" />
                                 <Form.Text className="text-muted"></Form.Text>
                              </Form.Group>
                           </Col>
                           <Col sm="12" md="auto" className='mb-3'>
                              <Button type="submit" className="bg-main rounded-pill px-4 py-2">Submit</Button>
                           </Col>
                        </Row>
                     </div>
                  </Col>
                  <Col sm="12" md="3" className='mb-4'>
                     <h3 className='text-white mb-3'>Information</h3>
                     <Link to='/' className='d-block text-white mb-2'>Home</Link>
                     <Link to='/' className='d-block text-white mb-2'>About Us</Link>
                     <Link to='/' className='d-block text-white mb-2'>Privacy Policy</Link>
                     <Link to='/' className='d-block text-white mb-2'>Search</Link>
                     <Link to='/' className='d-block text-white mb-2'>Contact Us</Link>
                     <Link to='/' className='d-block text-white mb-2'>Orders and Returns</Link>
                     <Link to='/signup' className='d-block text-white'>Sign Up</Link>
                  </Col>
                  <Col sm="12" md="4">
                     <h3 className='text-white mb-3'>Address</h3>
                     <div className='mb-3 text-white'>Address: 1234 Street Adress City Address, 1234</div>
                     <div className='mb-3 text-white'>Phones: (00) 1234 5678</div>
                     <div className='mb-3 text-white'>We are open: Monday-Thursday: 9:00 AM - 5:30 PM Friday: 9:00 AM - 6:00 PM Saturday: 11:00 AM - 5:00 PM</div>
                     <div className='mb-3 text-white'>E-mail: shop@email.com</div>
                  </Col>
               </Row>
            </div>
               
         </Container>
         <Container className='py-4'>
            <Row>
               <Col sm="12" md="4"></Col>
               <Col sm="12" md="4"></Col>
               <Col sm="12" md="4"></Col>
            </Row>
         </Container>
      </section>
   )
}

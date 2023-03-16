import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import LoginForm from '../../components/Forms/LoginForm';
import Navbar from '../../components/Navbar/Navbar';

export default function Login() {
   return (
      <>
         <Navbar showCenterLinks={false} /> 
         <div className='m-auto pb-5'>
            <Container style={{ marginTop: '180px' }}>
               <Row className='d-flex justify-content-center mb-5'>
                  <Col xs='12' md='4'>
                     <h3 className='text-center mb-4'>Login Here</h3>
                     <div className='bg-light p-4 rounded'>
                        <div className='mb-4'>
                           <LoginForm />
                        </div>
                        <div className='text-center'>
                           <div className='text-dark'>Don't have an acccount? <Link to='/signup'>Register</Link></div>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
         <Footer />
      </>
   )
}

import { Col, Container, Row } from 'react-bootstrap'
import LoginForm from '../../components/Forms/LoginForm';

export default function Login() {
   return (
      <div className='m-auto'>
         <Container style={{ marginTop: '180px' }}>
            <Row className='d-flex justify-content-center'>
               <Col xs='12' md='4'>
                  <h1 className='text-center mb-4'>Login Here</h1>
                  <div className='bg-light p-4 rounded'>
                     <LoginForm />
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

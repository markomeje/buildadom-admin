import { Col, Container, Row, Image } from 'react-bootstrap'
import { features } from '../data/features'

export default function Features() {
  return (
      <Container style={{ maxWidth: '786px' }}>
         <Row className='d-flex justify-content-center'>
            {features && features.map(({title, icon, text}, index) => {
               return (
                  <Col xs='12' md='4' lg='4' className='mb-3 text-center' key={index}>
                     <div className='w-100 mb-3'>
                        <Image src={icon} className='' />
                     </div>
                     <div className='text-dark mb-2'>{title}</div>
                     <small className='text-muted'>{text}</small>
                  </Col>
               )
            })}
         </Row>
      </Container>
  )
}

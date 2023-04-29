import { Col, Placeholder, Row } from 'react-bootstrap';
import IdentificationCard from './IdentificationCard';
import { fetchAllIdentifications } from '../../helpers/api';
import Container from '../../components/Container';

export default function Identifications() {
  const { identifications, isLoading } = fetchAllIdentifications();

  return (
    <div style={{  marginTop: '110px' }}>
      <Container>
        {isLoading ? <Placeholder className="w-100" animation="glow" /> : (<Row>
            {identifications?.data && identifications.data.map(({ id, image, id_type, fullname, verified, type, created_at }: any, index: any) => {
              return (<Col sm='12' md='4' lg='3' className='mb-4' key={index}>
                <IdentificationCard verified={verified} image={image} id_type={id_type} fullname={fullname} id={id} type={type} created_at={created_at} />
              </Col>)
            })}
          </Row>)
        }
      </Container>
    </div>
  )
}

import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container';
import { Col, Placeholder, Row, Image } from 'react-bootstrap';
import { fetchSingleIdentification } from '../../helpers/api';
import holder from '../../assets/holder.jpg';
import { empty } from '../../helpers/functions';

export default function SingleIdentification() {
  const { id } = useParams();
  const { identification, isLoading } = fetchSingleIdentification(Number(id));
  
  return (
    <div style={{  marginTop: '110px' }}>
      <Navbar showCenterLinks={false} />
      <Container>
        <Row>
          <Col sm='12' md='7' lg='8'>
            {isLoading ? <Placeholder className="w-100" animation="glow" /> : (<div>
                {identification && <div>
                    <div style={{ height: '240px' }} className='w-100 mb-4'>
                      <Link to={identification?.image?.url ? identification?.image.url : holder}>
                        <Image src={identification?.image?.url ? identification?.image.url : holder} className='w-100 h-100 object-cover' />
                      </Link>
                    </div>
                    <Row>
                      {[identification.id_type, identification.fullname].map((info, index) => {
                        return (<Col sm='12' md='6' lg='6' className='mb-4' key={index}>
                          <div className='w-100 px-3 py-4 border rounded bg-light'>{info}</div>
                        </Col>)
                      })}
                    </Row>
                  </div>}
              </div>)
            }
          </Col>
          <Col sm='12' md='5' lg='4'></Col>
        </Row>
        
      </Container>
    </div>
  )
}

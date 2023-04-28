import { Link, useParams } from 'react-router-dom'
import Container from '../../components/Container';
import { Col, Placeholder, Row, Image } from 'react-bootstrap';
import { fetchSingleIdentification } from '../../helpers/api';
import holder from '../../assets/holder.jpg';
import { empty, format, ucfirst, ucwords } from '../../helpers/functions';

export default function SingleIdentification() {
  const { id } = useParams();
  const { identification, isLoading } = fetchSingleIdentification(Number(id));
  console.log(identification);
  const handleVerification = () => {
    alert(id);
  }

  return (
    <div style={{  marginTop: '110px' }}>
      <Container>
        <Row>
          <Col sm='12' md='7' lg='8'>
            {isLoading ? <Placeholder className="w-100" animation="glow" /> : (<div>
                {identification && <div>
                    <div className='text-dark p-3 py-4 mb-4 border rounded'>
                      <span className='me-2'>Identification details by {identification?.type.toLowerCase() === 'business' ? identification?.fullname : identification?.user?.firstname+' '+identification?.user?.lastname || 'Nill'} ({ucfirst(identification?.type || '')})</span>
                    </div>
                    <div style={{ height: '240px' }} className='w-100 mb-4 position-relative'>
                      {empty(identification?.image?.url) ? (<Image src={holder} className='w-100 h-100 object-cover border' alt='Identity Document' />) : (<Link to={identification?.image?.url}>
                        <Image src={identification?.image?.url} className='w-100 h-100 object-cover border' alt='Identity Document' />
                      </Link>)}
                      <div className='position-absolute' style={{ top: '20px', right: '24px' }}>
                        {identification?.verified ? <small className='bg-success text-white rounded-pill px-4 py-1'>Verified</small> : <small className='bg-primary text-white rounded-pill px-4 py-1 cursor-pointer' onClick={() => handleVerification()}>Verify?</small>}
                      </div>
                    </div>
                    <Row>
                      <Col sm='12' md='6' lg='6' className='mb-3'>
                        <div className='mb-1 text-muted'>ID Type</div>
                        <div className='w-100 px-3 py-2 border rounded'>
                          <small className='text-dark'>{ucwords(identification.id_type)}</small>
                        </div>
                      </Col>
                      <Col sm='12' md='6' lg='6' className='mb-3'>
                        <div className='mb-1 text-muted'>ID Number</div>
                        <div className='w-100 px-3 py-2 border rounded'>
                          <small className='text-dark'>{identification.id_number}</small>
                        </div>
                      </Col>
                    </Row>
                    {identification?.type.toLowerCase() === 'business' && (<Row>
                      <Col sm='12' md='6' lg='6' className='mb-3'>
                        <div className='mb-1 text-muted'>Citizenship Country</div>
                        <div className='w-100 px-3 py-2 border rounded'>
                          <small className='text-dark'>{identification?.citizenship?.name || 'Nill'}</small>
                        </div>
                      </Col>
                      <Col sm='12' md='6' lg='6' className='mb-3'>
                        <div className='mb-1 text-muted'>Birth Country</div>
                        <div className='w-100 px-3 py-2 border rounded'>
                          <small className='text-dark'>{identification?.birth?.name || 'Nill'}</small>
                        </div>
                      </Col>
                    </Row>)}
                    <Row>
                      <Col sm='12' className='mb-3'>
                        <div className='mb-1 text-muted'>Address</div>
                        <div className='w-100 px-3 py-2 border rounded'>
                          <small className='text-dark'>{identification?.address || identification?.user?.address} ({identification?.state})</small>
                        </div>
                      </Col>
                      <Col sm='12' md='6' lg='6' className='mb-3'>
                        <div className='mb-1 text-muted'>Date of Birth</div>
                        <div className='w-100 px-3 py-2 border rounded'>
                          <small className='text-dark'>{format(identification?.dob) || 'Nill'}</small>
                        </div>
                      </Col>
                      <Col sm='12' md='6' lg='6' className='mb-3'>
                        <div className='mb-1 text-muted'>Expiry Date</div>
                        <div className='w-100 px-3 py-2 border rounded'>
                          <small className='text-dark'>{format(identification?.expiry_date) || 'Nill'}</small>
                        </div>
                      </Col>
                    </Row>
                  </div>}
              </div>)}
          </Col>
          <Col sm='12' md='5' lg='4'></Col>
        </Row>
      </Container>
    </div>
  )
}

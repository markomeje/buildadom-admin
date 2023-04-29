import { Button, Col, Row, Image, Card } from 'react-bootstrap'
import { BiStore } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { fetchAllIdentifications } from '../../helpers/api';
import Container from '../../components/Container';
import chart from '../../assets/chart.png';



export default function Dashboard() {
  const { identifications } = fetchAllIdentifications();

  const data = [
    {
      title: 'All Customers',
      value: '3,545',
      iconColor: 'success',
      link: 'customers'
    },
    {
      title: 'Total Marchants',
      value: '23,400',
      iconColor: 'secondary',
      link: 'marchants'
    },
    {
      title: 'All Identifications',
      value: identifications?.total || 0,
      iconColor: 'primary',
      link: 'identifications'
    },
    {
      title: 'All Orders',
      value: '6,450',
      iconColor: 'warning',
      link: 'orders'
    },
    {
      title: 'All Products',
      value: '56,034',
      iconColor: 'danger',
      link: 'products'
    },
    {
      title: 'Activity Logs',
      value: '7,804',
      iconColor: 'dark',
      link: 'activities'
    },
  ];

  return (
    <div style={{ marginTop: '120px' }}>
      <section className='w-100 pb-5 m-0'>
        <Container>
          <Row>
            {data && data.map((info, index) => {
              return (<Col sm='12' md='3' lg='4' className='mb-4' key={index}>
                <div className='d-flex align-items-center bg-light p-4 rounded'>
                  <div className={`bg-${info.iconColor} rounded me-3 text-center text-white`} style={{ width: '50px', height: '50px', lineHeight: '47px' }}>
                    <BiStore />
                  </div>
                  <div className=''>
                    <Link to={`/${info.link}`} className='text-dark text-decoration-none'>
                      <h6 className='text-dark'>{info.title}</h6>
                    </Link>
                    <div>{info.value}</div>
                  </div>
                </div>
              </Col>)
            })}
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header className='bg-light py-4'>Total Payments NGN56,400</Card.Header>
                <Card.Body>
                  <div className='w-100'>
                    <Image src={chart} className='img-fluid' />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

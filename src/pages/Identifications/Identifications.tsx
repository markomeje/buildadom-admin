import { Alert, Col, Placeholder, Row, Table } from 'react-bootstrap';
import IdentificationCard from './IdentificationCard';
import { fetchAllIdentifications } from '../../helpers/api';
import Container from '../../components/Container';
import { empty, ucfirst, ucwords } from '../../helpers/functions';
import { Link } from 'react-router-dom';

export default function Identifications() {
  const { data, isLoading, isError, error } = fetchAllIdentifications();
  const identifications = empty(data) ? [] : data?.identifications;

  return (
    <div style={{  marginTop: '110px' }}>
      <Container>
        {isLoading ? (<Placeholder className="w-100" as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>) : <div>
          {isError ? <Alert variant="danger">An error occurred. Failed to fetch data.</Alert>
          : (<div className=''>
              <Alert className='bg-transparent border text-dark mb-4'>{identifications?.total || 0} Marchant ID Verifications</Alert>
              <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Merchant name</th>
                  <th>ID Type</th>
                  <th>ID Number</th>
                  <th>Account Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {identifications?.data && identifications.data.map(({ id, id_type, fullname, verified, id_number, type, user, }: any, index: any) => {
                  return (<tr key={id}>
                    <td>{index + 1}</td>
                    <td>{type.toLowerCase() === 'business' ? ucwords(fullname || type) : ((user?.firstname || '') + ' ' + (user?.lastname || ''))}</td>
                    <td>{ucwords(id_type || '')}</td>
                    <td>{id_number}</td>
                    <td>{ucfirst(type || '')}</td>
                    <td className={`text-${verified ? 'success' : 'dark'}`}>{verified ? 'Verified' : 'Pending'}</td>
                    <td><Link to={`/identifications/identification/${id}`}>View Details</Link></td>
                  </tr>)
                })}
              </tbody>
            </Table>
          </div>)}
        </div>}
      </Container>
    </div>
  )
}

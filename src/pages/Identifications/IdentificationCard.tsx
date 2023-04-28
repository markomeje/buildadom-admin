import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { limit } from '../../helpers/functions';
import { BsCheck2Circle, BsExclamation } from 'react-icons/bs';
import holder from '../../assets/holder.jpg'

type Props = {
  image: { url: '' },
  fullname: string,
  id_type: string,
  verified: boolean,
  id: number
};

export default function IdentificationCard({ image, id_type, fullname, verified, id }: Props) {

  const imageUrl = image?.url ? image.url : holder;
  return (
    <Card className='bg-white' style={{ borderRadius: '15px' }}>
      <div className='position-relative' style={{ height: '140px', borderRadius: '15px 15px 0 0' }}>
        <Image className='h-100 object-cover w-100' src={imageUrl} style={{ borderRadius: '15px 15px 0 0' }} /> 
        <Link to={`/identifications/identification/${id}`} className='text-decoration-none'>
          <div className='position-absolute' style={{ top: '20px', left: '20px', fontSize: '10px' }}>
            {verified ? <small className='bg-success text-white rounded-pill px-3 py-1'>Verified</small> : <small className='bg-danger text-white rounded-pill px-3 py-1'>Unverified</small>}
          </div>
        </Link>
        <Link to={`/identifications/identification/${id}`} className='text-decoration-none'>
          <div className='position-absolute rounded-circle' style={{ bottom: '-15px', width: '35px', height: '35px', lineHeight: '32px', right: '20px' }}>
            {verified ? <div className='bg-success shadow-sm text-white h-100 rounded-circle text-center w-100'>
              <BsCheck2Circle />
            </div> : <div className='bg-danger text-white shadow-sm h-100 rounded-circle text-center w-100'>
                <BsExclamation />
              </div>}
          </div>
        </Link>
      </div>
      <Card.Body className='py-4'>
        <div className="mb-1">
          <Link to={`/identifications/identification/${id}`} className='text-dark'>{id_type} by {limit(fullname, 10)}</Link>
        </div>
        {/* <Button variant='outline-primary' className='rounded-3 w-100'>View details</Button> */}
      </Card.Body>
    </Card>
  )
}

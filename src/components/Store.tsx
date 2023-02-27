import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating';
import { AiFillCheckCircle, AiOutlineExclamationCircle } from 'react-icons/ai'
import { Link } from "react-router-dom";
import StoreImage from '../assets/company.png'


type StoreProps = {
   title: string,
   ratingNumber: number | 0,
   width: string
};

export default function Store({title, ratingNumber, width = '100%'}: StoreProps) {
   const [rating, setRating] = useState(ratingNumber);
   const ratingSize = 12;

   const handleRating = (rate: number) => {
      setRating(rate);
   }

   return (
      <Card className='border-0' style={{ width: width }}>
         <Link to={`/store?rating=${rating}`} target='_blank' className='text-decoration-none' style={{ height: '360px' }}>
            <Card.Img variant="top" src={StoreImage} className='w-100 h-100 border-bottom img-fluid object-cover' />
         </Link>
         <Card.Body className='border-0 px-0'>
            <Card.Text className='mb-2'>
               <Link to={`/product?rating=${rating}`} target='_blank' className='text-decoration-none text-muted'>{title}</Link>
            </Card.Text>
            <div className='d-flex align-items-center mb-2'>
               <Rating initialValue={rating} onClick={handleRating} size={ratingSize} className='me-1' />
               <small className='text-muted mt-1'>
                  <small>Reviews ({rating})</small>
               </small>
            </div>
            <Link to={`/product?rating=${rating}`} target='_blank' className='text-decoration-none'>
               <Button size='sm' className='bg-main w-100 rounded-pill'>Visit Store</Button>
            </Link>
         </Card.Body>
      </Card>
   )
}

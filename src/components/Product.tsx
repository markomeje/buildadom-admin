import { useState } from "react";
import { Card } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating';
import { AiFillCheckCircle, AiOutlineExclamationCircle } from 'react-icons/ai'


type ProductProps = {
   title: string,
   ratingNumber: number | 0,
   image: string,
   price: string,
   inStock: boolean | false,
   width: string
};

export default function Product({title, ratingNumber, image, price, inStock = false, width = '100%'}: ProductProps) {
   const [rating, setRating] = useState(ratingNumber);
   const ratingSize = 12;

   const handleRating = (rate: number) => {
      setRating(rate);
      console.log(rate);
   }

   return (
      <Card className='border-0' style={{ width: width }}>
         <div className='d-flex align-items-center mb-1'>
               {inStock ? (<div className='text-success'>
                  <AiFillCheckCircle size='0.9em' className='me-1' />
                  <small className='text-success'>In stock</small>
               </div>) : (<div className='text-danger'>
                  <AiOutlineExclamationCircle size='0.9em' className='me-1' />
                  <small className=''>Check availability</small>
               </div>)}
            </div>
         <div style={{ height: '190px' }}>
            <Card.Img variant="top" src={image} className='w-100 h-100 border-bottom img-fluid object-cover' />
         </div>
         <Card.Body className='border-0 px-0'>
            <div className='d-flex align-items-center mb-2'>
               <Rating initialValue={rating} onClick={handleRating} size={ratingSize} className='me-1' />
               <small className='text-muted mt-1'>
                  <small>Reviews ({rating})</small>
               </small>
            </div>
            <Card.Text className='text-dark mb-2'>
               <small>{title}</small>
            </Card.Text>
            <div className=''>
               <s className='mb-3 text-muted'>{price}</s>
               <h5 className='font-weight-bolder'>{price}</h5>
            </div>
         </Card.Body>
      </Card>
   )
}

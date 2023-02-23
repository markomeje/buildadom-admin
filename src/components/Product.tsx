import { useState } from "react";
import { Card } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'


type ProductProps = {
   title: string,
   ratingNumber: number | 0,
   image: string,
   price: string,
};

export default function Product({title, ratingNumber, image, price}: ProductProps) {
   const [rating, setRating] = useState<number>(ratingNumber);
   console.log(rating);
   const ratingSize = 15;

   return (
      <Card className='border-0 me-3' style={{ width: '200px' }}>
         <div style={{ height: '190px' }}>
            <Card.Img variant="top" src={image} className='w-100 h-100 border-bottom img-fluid object-cover' />
         </div>
         <Card.Body className='border-0 px-0'>
            <div className='d-flex align-items-center mb-2'>
               <Rating initialValue={rating} size={ratingSize} className='me-1' />
               <small className='text-muted mt-1'>Reviews ({ratingNumber})</small>
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

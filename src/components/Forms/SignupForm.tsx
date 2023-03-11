import { useState } from 'react';
import { Navigate } from "react-router-dom";
import {Alert, Button, Col, Form, Row, Image} from 'react-bootstrap';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import useForm from '../../hooks/useForm';
import spinner from '../../assets/spinner.svg';

type SignupFormProps = {
   type: string,
};

export default function SignupForm({ type }: SignupFormProps) {
   const [phone, setPhone] = useState<any>();

   const additionalData = {type: type, phone: phone};
   const baseUrl = import.meta.env.VITE_API_URL || 'https://api.buildadom.net/api/v1';

   const {successful, handleSubmit, message, submitting, errors, handleChange} = useForm(`${baseUrl}/signup`, additionalData);
   const isBusiness = type === 'business' ? 'Business' : '';
   
   return (
      <>
         {successful ? <Navigate to='/verification?type=phone' /> : (<Form onSubmit={handleSubmit} method='post'>
            <Row>
               <Col md='6'>
                  <Form.Group className="mb-3">
                     <Form.Label>First Name</Form.Label>
                     <Form.Control type="text" className={errors && errors?.firstname ? 'is-invalid' : ''} name="firstname" placeholder="Enter your first name" onChange={handleChange} />
                     {errors && errors?.firstname ? (<small className='text-danger'>{errors.firstname}</small>) : ''}
                  </Form.Group>
               </Col>
               <Col md='6'>
                  <Form.Group className="mb-3">
                     <Form.Label>Last Name</Form.Label>
                     <Form.Control type="text" className={errors?.lastname && 'is-invalid'} name="lastname" placeholder="Enter your last name" onChange={handleChange} />
                     {errors && errors?.lastname ? (<small className='text-danger'>{errors.lastname}</small>) : ''}
                  </Form.Group>
               </Col>
            </Row>
            <Row>
               <Col md='12'>
                  <Form.Group className="mb-3">
                     <Form.Label>{isBusiness} Phone</Form.Label>
                     <PhoneInput country="NG" defaultCountry='NG' className={`errors?.phone ? 'is-invalid' : '' form-control`} style={{ padding: '20px' }} name='phone' placeholder="Enter phone number" value={phone} onChange={setPhone} />
                     {errors && errors?.phone ? (<small className='text-danger'>{errors.phone}</small>) : ''}
                  </Form.Group>
               </Col>
               <Col md='12'>
                  <Form.Group className="mb-3">
                     <Form.Label>{isBusiness} Email</Form.Label>
                     <Form.Control type="email" className={errors?.email && 'is-invalid'} name="email" placeholder="Enter email" onChange={handleChange} />
                     {errors && errors?.email ? (<small className='text-danger'>{errors.email}</small>) : ''}
                  </Form.Group>
               </Col>
            </Row>
            <Row>
               <Col md='12'>
                  <Form.Group className="mb-3">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" className={errors?.password && 'is-invalid'} name="password" placeholder="Enter password" onChange={handleChange} />
                     {errors && errors?.password ? (<small className='text-danger'>{errors.password}</small>) : ''}
                  </Form.Group>
               </Col>
               <Col md='12'>
                  <Form.Group className="mb-3">
                     <Form.Label>Confirm Password</Form.Label>
                     <Form.Control type="password" className={errors?.confirm_password && 'is-invalid'} name="confirm_password" placeholder="Confirm your password" onChange={handleChange} />
                     {errors && errors?.confirm_password ? (<small className='text-danger'>{errors.confirm_password}</small>) : ''}
                  </Form.Group>
               </Col>
            </Row>
            {type === 'business' && (<Row>
               <Col md='12'>
                  <Form.Group className="mb-3">
                     <Form.Label>Business Name</Form.Label>
                     <Form.Control type="text" className={errors?.business_name && 'is-invalid'} name="business_name" placeholder="Enter your business name" onChange={handleChange} />
                     {errors && errors?.business_name ? (<small className='text-danger'>{errors.business_name}</small>) : ''}
                  </Form.Group>
               </Col>
               <Col md='12'>
                  <Form.Group className="mb-3">
                     <Form.Label>Website</Form.Label>
                     <Form.Control type="text" className={errors?.website && 'is-invalid'} name="website" placeholder="Enter your website link" onChange={handleChange} />
                     {errors && errors?.website ? (<small className='text-danger'>{errors.website}</small>) : ''}
                  </Form.Group>
               </Col>
               <Col md='12'>
                  <Form.Group className="mb-3">
                     <Form.Label>CAC Registration Number</Form.Label>
                     <Form.Control type="text" className={errors?.cac_number && 'is-invalid'} name="cac_number" placeholder="Enter your cac registration number" onChange={handleChange} />
                     {errors && errors?.cac_number ? (<small className='text-danger'>{errors.cac_number}</small>) : ''}
                  </Form.Group>
               </Col>
            </Row>)}
            <Form.Group className="mb-3">
               <Form.Label>{isBusiness} Address</Form.Label>
               <Form.Control type="text" className={errors?.address && 'is-invalid'} placeholder="Enter address" name="address" onChange={handleChange} />
               {errors && errors?.address ? (<small className='text-danger'>{errors.address}</small>) : ''}
            </Form.Group>
            {message && <Alert className='mb-4 mt-4' variant={successful ? 'success' : 'danger'}>{message}</Alert>}
            <span className='d-flex justify-content-end' style={{ cursor: submitting ? 'not-allowed' : 'default' }}>
               <Button className='bg-main px-4 text-center py-2 btn-lg rounded-pill' disabled={submitting} type="submit" style={{ width: '160px' }}>
                  <small className='text-white'>{submitting ? <Image src={spinner} /> : 'Next'}</small>
               </Button>
            </span>
         </Form>)}
      </>
   );
}
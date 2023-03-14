import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Alert, Button, Form, Image } from 'react-bootstrap';
import { useState } from 'react';
import spinner from '../../assets/spinner.svg';
import site from '../../assets/Site.jpg';
import useForm from '../../hooks/useForm';


export default function Email() {
   const { code } = useParams();

   const url = import.meta.env.VITE_API_URL || 'https://api.buildadom.net/api/v1';
   const {successful, handleSubmit, message, submitting, errors, handleChange} = useForm(`${url}/email/verify?code=${code}`, {type: 'email'});

   return (
      <div style={{ marginTop: '140px' }}>
         <div className='m-auto bg-light p-4 rounded' style={{ maxWidth: '360px' }}>
            <Form onSubmit={handleSubmit}>
               <Form.Group className="mb-3">
                  <Form.Label>Token</Form.Label>
                  <Form.Control type="text" className={errors && errors?.code ? 'is-invalid' : ''} name="code" placeholder="Enter code here" value={code} onChange={handleChange} />
                  {errors && errors?.code ? (<small className='text-danger'>{errors.code}</small>) : ''}
               </Form.Group>
               {message && <Alert className='my-4 mt-2' variant={successful ? 'success' : 'danger'}>{message}</Alert>}
               <span className='d-flex justify-content-center' style={{ cursor: submitting ? 'not-allowed' : 'default' }}>
                  <Button className='bg-main px-4 w-100 text-center py-2 btn-lg rounded-pill' disabled={submitting} type="submit">
                     <small className='text-white'>{submitting ? <Image src={spinner} /> : 'Verify'}</small>
                  </Button>
               </span>
            </Form>
         </div>
      </div>
   )
}

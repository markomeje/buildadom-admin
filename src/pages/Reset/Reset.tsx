import { useState } from 'react'
import { Alert, Form, Image, Button } from 'react-bootstrap'
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import OtpInput from '../../components/OtpInput';
import spinner from '../../assets/spinner.svg';
import useForm from '../../hooks/useForm';
import Modal from '../../components/Modal/Modal';

export default function Reset() {
   const [otp, setOtp] = useState('');
   const { type } = useParams();

   const url = import.meta.env.VITE_API_URL;
   const {successful, handleSubmit, message, submitting, errors, handleChange} = useForm(`${url}/reset/update`, {code: otp, type: type, stage: 'reset'});

   return (
      <>
         <Navbar showCenterLinks={false} /> 
         {successful && <Navigate to='/login' />}
         <Modal show={true} handleClose={() => false} showCloseButton={false}>
            <div className='m-auto' style={{ maxWidth: '320px' }}>
               <div>
                  <div className='text-center'>
                     <h4 className='mb-4'>Enter your reset code</h4>
                     <p className='text-dark mb-4'>Please kindly enter the code sent to your email for your {type} reset</p>
                  </div>
                  <Form onSubmit={handleSubmit} method='post' autoComplete='off'>
                     <div className='mb-4'>
                        <div>Code</div>
                        <OtpInput value={otp} valueLength={6} onChange={(value: string) => setOtp(value)} />
                        {errors && errors?.code ? (<small className='text-danger'>{errors.code}</small>) : ''}
                     </div>
                     <Form.Group className="mb-4">
                        <Form.Label className='text-dark'>New Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder='Enter your password' onChange={handleChange} className={errors && errors?.password ? 'is-invalid' : ''} />
                        {errors && errors?.password ? (<small className='text-danger'>{errors.password}</small>) : ''}
                     </Form.Group>
                     <Form.Group className="mb-4">
                        <Form.Label className='text-dark'>Confirm Password</Form.Label>
                        <Form.Control type='password' name='confirm_password' placeholder='Confirm password' onChange={handleChange} className={errors && errors?.confirm_password ? 'is-invalid' : ''} />
                        {errors && errors?.confirm_password ? (<small className='text-danger'>{errors.confirm_password}</small>) : ''}
                     </Form.Group>
                     {message && <Alert className='my-4' variant={successful ? 'success' : 'danger'}>{message}</Alert>}
                     <span className='d-flex justify-content-center' style={{ cursor: submitting ? 'not-allowed' : 'default' }}>
                        <Button className='bg-main px-4 text-center py-2 btn-lg rounded-pill' disabled={submitting} type="submit" style={{ width: '160px' }}>
                           <small className='text-white'>{submitting ? <Image src={spinner} /> : 'Reset'}</small>
                        </Button>
                     </span>
                  </Form>
               </div>
            </div>
         </Modal>
      </>
   )
}

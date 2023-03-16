import { useState } from 'react'
import { Alert, Form, Modal, Image, Button } from 'react-bootstrap'
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import OtpInput from '../../components/OtpInput';
import spinner from '../../assets/spinner.svg';
import useForm from '../../hooks/useForm';

export default function Reset() {
   const [otp, setOtp] = useState('');
   const { type } = useParams();

   const url = import.meta.env.VITE_API_URL;
   const {successful, handleSubmit, message, submitting, errors, response} = useForm(`${url}/reset`, {code: otp, type: type});

   return (
      <>
         <Navbar showCenterLinks={false} /> 
         {successful && <Navigate to='/login' />}
         <Modal show={true} handleClose={() => false} showCloseButton={false}>
            <div className='m-auto text-center' style={{ maxWidth: '320px' }}>
               <div>
                  <h4 className='mb-4'>Enter your reset code</h4>
                  <p className='text-dark mb-4'>Please kindly enter the code sent to your email for your {type} reset</p>
                  <Form onSubmit={handleSubmit} method='post' autoComplete='off'>
                     <div className='mb-4'>
                        <OtpInput value={otp} valueLength={6} onChange={(value: string) => setOtp(value)} />
                        {errors && errors?.code ? (<small className='text-danger'>{errors.code}</small>) : ''}
                     </div>
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

import { useEffect, useState } from 'react'
import { Alert, Button, Form, Image } from 'react-bootstrap'
import Modal from '../../components/Modal/Modal';
import OtpInput from '../../components/OtpInput';
import useForm from '../../hooks/useForm';
import spinner from '../../assets/spinner.svg';
import { Navigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default function Verification() {
   const [otp, setOtp] = useState('');
   const [finished, setfFinished] = useState(false);
   const { type } = useParams();

   const url = import.meta.env.VITE_API_URL;
   const {successful, handleSubmit, message, submitting, errors, response} = useForm(`${url}/verification/verify`, {code: otp, type: type});

   useEffect(() => {
      if (response?.done === true) {
         setfFinished(true);
      }

      if (successful) {
         setOtp('');
      }
   }, [response?.done, successful]);

   return (
      <>
         <Navbar showCenterLinks={false} /> 
         {finished && <Navigate to='/login' />}
         <Modal show={true} handleClose={() => false} showCloseButton={false}>
            <div className='m-auto text-center' style={{ maxWidth: '320px' }}>
               {successful && type === 'phone' && (<Navigate to='/verification/email' />)}
               <>
                  <h4 className='mb-4'>Enter your verification code</h4>
                  <p className='text-dark mb-4'>Please kindly enter the code we sent to your {type}.</p>
                  <Form onSubmit={handleSubmit} method='post' autoComplete='off'>
                     <div className='mb-4'>
                        <OtpInput value={otp} valueLength={6} onChange={(value: string) => setOtp(value)} />
                        {errors && errors?.code ? (<small className='text-danger'>{errors.code}</small>) : ''}
                     </div>
                     {message && <Alert className='my-4' variant={successful ? 'success' : 'danger'}>{message}</Alert>}
                     <span className='d-flex justify-content-center' style={{ cursor: submitting ? 'not-allowed' : 'default' }}>
                        <Button className='bg-main px-4 text-center py-2 btn-lg rounded-pill' disabled={submitting} type="submit" style={{ width: '160px' }}>
                           <small className='text-white'>{submitting ? <Image src={spinner} /> : 'Verify'}</small>
                        </Button>
                     </span>
                  </Form>
               </>
            </div>
         </Modal>
      </>
   )
}


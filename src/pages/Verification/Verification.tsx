import { useState } from 'react'
import { Alert, Button, Form, Image } from 'react-bootstrap'
import Modal from '../../components/Modal/Modal';
import OtpInput from '../../components/OtpInput';
import useForm from '../../hooks/useForm';
import spinner from '../../assets/spinner.svg';

export default function Verification() {
   const [otp, setOtp] = useState('');

   const baseUrl = import.meta.env.VITE_API_URL || 'https://api.buildadom.net/api/v1';
   const {successful, handleSubmit, message, submitting, errors} = useForm(`${baseUrl}/verification/phone`, {code: otp, type: 'phone'});
   const handleOtpInputChange = (value: string) => setOtp(value);

   return (
      <div>
         <Modal show={true} handleClose={() => false} showCloseButton={false}>
            <div className='m-auto text-center' style={{ maxWidth: '320px' }}>
               <h4 className='mb-4'>Enter your verification code</h4>
               <p className='text-dark mb-4'>Please kindly enter the code we sent to your phone number.</p>
               <Form onSubmit={handleSubmit} method='post'>
                  <div className='mb-4'>
                     <OtpInput value={otp} valueLength={6} onChange={handleOtpInputChange} />
                     {errors && errors?.code ? (<small className='text-danger'>{errors.code}</small>) : ''}
                  </div>
                  {message && <Alert className='my-4' variant={successful ? 'success' : 'danger'}>{message}</Alert>}
                  <span className='d-flex justify-content-center' style={{ cursor: submitting ? 'not-allowed' : 'default' }}>
                     <Button className='bg-main px-4 text-center py-2 btn-lg rounded-pill' disabled={submitting} type="submit" style={{ width: '160px' }}>
                        <small className='text-white'>{submitting ? <Image src={spinner} /> : 'Submit'}</small>
                     </Button>
                  </span>
               </Form>
            </div>
         </Modal>
      </div>
   )
}


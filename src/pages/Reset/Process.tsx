import { Alert, Button, Form, Image } from 'react-bootstrap';
import Modal from '../../components/Modal/Modal';
import useForm from '../../hooks/useForm';
import spinner from '../../assets/spinner.svg';
import { Navigate } from 'react-router-dom';

type ProcessProps = {
   show: boolean,
   handleClose: () => void,
}

export default function Process({ show, handleClose }: ProcessProps) {
   const url = import.meta.env.VITE_API_URL;
   const type = 'password';
   const {successful, handleSubmit, message, submitting, errors, handleChange} = useForm(`${url}/reset/process`, {type: type, stage: 'process'});

   return (
      <>
         {successful && <Navigate to={`/reset/${type}`} />}
         <Modal show={show} handleClose={handleClose} showCloseButton={true}>
            <div className='m-auto' style={{ maxWidth: '320px' }}>
               <div>
                  <div className='m-auto text-center'>
                     <h4 className='mb-3'>Reset Password?</h4>
                     <p className='text-dark mb-4'>Please kindly enter your email</p>
                  </div>
                  <Form onSubmit={handleSubmit}>
                     <Form.Group className="mb-4">
                        <Form.Label className='text-dark'>Email</Form.Label>
                        <Form.Control type='email' name='email' placeholder='Enter your email' onChange={handleChange} className={errors && errors?.email ? 'is-invalid' : ''} />
                        {errors && errors?.email ? (<small className='text-danger'>{errors.email}</small>) : ''}
                     </Form.Group>
                     {message && <Alert className='my-4' variant={successful ? 'success' : 'danger'}>{message}</Alert>}
                     <span className='d-flex justify-content-center' style={{ cursor: submitting ? 'not-allowed' : 'default' }}>
                        <Button className='bg-main px-4 text-center py-2 btn-lg rounded-pill' disabled={submitting} type="submit" style={{ width: '160px' }}>
                           <small className='text-white'>{submitting ? <Image src={spinner} /> : 'Submit'}</small>
                        </Button>
                     </span>
                  </Form>
               </div>
            </div>
         </Modal>
      </>
   )
}

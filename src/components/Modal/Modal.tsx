import { ReactNode } from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';

type ModalProps = {
   title: string,
   show: boolean
   handleClose: () => void,
   children: ReactNode,
   size: 'xl' | 'lg' | 'sm',
};

export default function Modal({ title, show, handleClose = () => {}, children, size = 'lg'}:ModalProps) {
  return (
    <>
      <BootstrapModal show={show} onHide={handleClose} size={size}>
         <BootstrapModal.Body className='px-4 py-5 position-relative'>
            <div className='text-center'>
               <div className='btn-close position-absolute cursor-pointer' style={{ top: '15px', right: '20px', zIndex: '3' }} onClick={handleClose}></div>
               <h4 className='mb-3'>{title}</h4>
            </div>
            {children}
         </BootstrapModal.Body>
      </BootstrapModal>
    </>
  )
}

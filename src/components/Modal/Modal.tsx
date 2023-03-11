import { ReactNode, useState } from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';

type ModalProps = {
   show: boolean
   children: ReactNode,
   size?: 'xl' | 'lg' | 'sm',
   handleClose: () => void,
   showCloseButton: boolean,
};

export default function Modal({ show, children, size, handleClose = () => {}, showCloseButton = false }:ModalProps) {
  return (
    <>
      <BootstrapModal centered show={show} onHide={handleClose} size={size}>
         <BootstrapModal.Body className='px-4 py-5 position-relative'>
            {showCloseButton && (<div className='btn-close text-danger position-absolute cursor-pointer' style={{ top: '15px', right: '20px', zIndex: '3' }} onClick={handleClose}></div>)}
            {children}
         </BootstrapModal.Body>
      </BootstrapModal>
    </>
  )
}

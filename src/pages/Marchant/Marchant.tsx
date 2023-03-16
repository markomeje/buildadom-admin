import React from 'react'
import { Alert, Container } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import { useAuth } from '../../hooks/useAuth'

export default function Marchant() {
   const { user } = useAuth();
   let location = useLocation();

   if (!user.token) {
      return (<Navigate to="/login" state={{ from: location }} replace />)
   }

   return (
      <>
         <Navbar showCenterLinks={true} />
         <section style={{ marginTop: '140px' }}>
            <Container>
               {user?.name && <Alert variant='success'>Welcome {user.name}</Alert>}
            </Container>
         </section>
      </>
   )
}

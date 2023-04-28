import { Button, Col, Container, Row, Image, Carousel, Tabs, Tab } from 'react-bootstrap'
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { sliders } from '../../data/sliders';
import { products } from '../../data/products';
import Zip from '../../assets/zip.png';
import Company from '../../assets/company.png';
import { companies } from '../../data/companies';
import { stores } from '../../data/stores';
import Exclama from '../../assets/exclama.png';
import Features from '../../components/Features';
import Navbar from '../../components/Navbar/Navbar';
import { useAuth } from '../../hooks/useAuth';

export default function Home() {
  const { user } = useAuth();
  return (
    <>
      {/* {user ? (<> */}
        <Navbar showCenterLinks={true} />
        <section className='w-100 pb-5 m-0'>
          <Container style={{ marginTop: '60px' }}>
            
          </Container>
        </section>
        {/* </>) : ''} */}
    </>
  )
}

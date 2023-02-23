import { Button, Col, Container, Row, Image, Carousel } from 'react-bootstrap'
import styles from './Home.module.css';
import Product from '../../components/Product';
import Faq from './Partials/Faq';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { sliders } from '../../data/sliders';
import { products } from '../../data/products';

export default function Home() {
   const interval = 3000;
   return (
      <>
         <section className='w-100 p-0 m-0'>
            <Container style={{ marginTop: '60px' }}>
               <Carousel interval={interval}>
                  {sliders && sliders.map(({title, image}, index) => 
                     <Carousel.Item key={index} style={{ height: '460px' }}>
                        <Image className="d-block w-100 object-fit position-absolute img-fluid h-100" src={image} alt={title} style={{ minHeight: '460px', top: 0, left: 0 }} />
                        <Carousel.Caption>
                           <Row className='d-flex justify-content-center'>
                              <Col lg="6">
                                 <h3 className='bg-dark mb-4'>{title}</h3>
                              </Col>
                           </Row>
                           <Row className='d-flex justify-content-center mb-5'>
                              <Col lg="7">
                                 <Row className='d-flex justify-content-center mb-4'>
                                    <Col sm="6" className='mb-4'>
                                       <Link to='/'>
                                          <Button className='rounded-pill bg-main w-100'>Buy from Buildadom</Button>
                                       </Link>
                                    </Col>
                                    <Col sm="6" className='mb-4'>
                                       <Link to='/'>
                                          <Button className='rounded-pill bg-main w-100'>Sell from Buildadom</Button>
                                       </Link>
                                    </Col>
                                 </Row>
                              </Col>
                           </Row>
                        </Carousel.Caption>
                     </Carousel.Item>
                  )}
               </Carousel>
            </Container>
         </section>
         <section className='py-5'>
            <Container>
               <div className='d-flex justify-content-between align-items-center mb-2'>
                  <h4 className='text-dark'>New Products</h4>
                  <Link to='/products'>See All</Link>
               </div>
               <div className='d-flex align-items-center' style={{ overflow: 'hidden !important', overflowX: 'scroll' }}>
                  {products && products.map(({title, price, rating, image}, index) => {
                     return (<div key={index}>
                        <Product key={index} title={title} price={price} ratingNumber={rating} image={image} />
                     </div>)
                  })}
               </div>
            </Container>
         </section>
         <section className='bg-white' style={{ padding: '140px 0' }}>
            <Container style={{ maxWidth: '767px' }}>
               <h3 className='text-dark text-center mb-4'>Frequently Asked Questions</h3>
               <Faq />
            </Container>
         </section>
         <section>
            <Footer />
         </section>
      </>
   )
}

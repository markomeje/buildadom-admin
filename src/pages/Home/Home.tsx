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

export default function Home() {
   const interval = 3000;
   return (
      <>
         <section className='w-100 pb-5 m-0'>
            <Container style={{ marginTop: '60px' }}>
               <Carousel interval={interval}>
                  {sliders && sliders.map(({title, image}, index) => 
                     <Carousel.Item key={index} style={{ height: '460px' }}>
                        <Image className="d-block w-100 object-fit position-absolute img-fluid h-100" src={image} alt={title} style={{ minHeight: '460px', top: 0, left: 0 }} />
                        <Carousel.Caption>
                           <Row className='d-flex justify-content-center'>
                              <Col lg="6">
                                 <h3 className='mb-4'>{title}</h3>
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
         <section className='pb-5'>
            <Container>
               <div className='d-flex justify-content-between align-items-center mb-2'>
                  <h4 className='text-dark'>New Products</h4>
                  <Link to='/products'>See All</Link>
               </div>
               <div className='d-flex align-items-center scroll-horizontally'>
                  {products && products.map(({title, price, rating, image, inStock}, index) => {
                     return (<div key={index} className='me-4'>
                        <Product key={index} title={title} price={price} ratingNumber={rating} image={image} inStock={inStock} width='210px' />
                     </div>)
                  })}
               </div>
            </Container>
         </section>
         <section className='pb-5'>
            <Container>
               <div className='d-flex align-items-center justify-content-center p-3 bg-light'>
                  <Image src={Zip} className='me-2' />
                  <div className='text-dark'>Own it now, up to 6 months interest free learn more</div>
               </div>
            </Container>
         </section>
         <section className='pb-5'>
            <Container>
               <Row>
                  <Col md='4' lg='3'>
                     <div className='mb-4'>
                        <Image src={Company} className='w-100' />
                     </div>
                  </Col>
                  <Col md='8' lg='9'>
                     <Row>
                        {products && products.slice(6).map(({title, price, rating, image, inStock}, index) => {
                           return (<Col xs='6' sm='6' lg='3' key={index}>
                              <Product key={index} title={title} price={price} ratingNumber={rating} image={image} inStock={inStock} width='100%' />
                           </Col>)
                        })}
                     </Row>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className=''>
            <Container>
               <Tabs defaultActiveKey="Building Tools" className="mb-3 text-muted" style={{ textDecoration: 'none', listStyle: 'none' }}>
                  {['Building Tools', 'Roofing Sheets', 'Solar Inverter', 'Floor Tiles'].map((category, index) => {
                     return (
                        <Tab eventKey={`${category}`} title={`${category}`} key={index}>
                           <Row>
                              <Col md='4' lg='3'>
                                 <div className='mb-4'>
                                    <Image src={Company} className='w-100' />
                                 </div>
                              </Col>
                              <Col md='8' lg='9'>
                                 <Row>
                                    {products && products.sort(() => (Math.random() > 0.5) ? 1 : -1).slice(6).map(({title, price, rating, image, inStock}, index) => {
                                       return (<Col xs='6' sm='6' lg='3' key={index}>
                                          <Product key={index} title={title} price={price} ratingNumber={rating} image={image} inStock={inStock} width='100%' />
                                       </Col>)
                                    })}
                                 </Row>
                              </Col>
                           </Row>
                        </Tab>
                     )
                  })}
               </Tabs>
               <Tabs defaultActiveKey="Electric Switches" className='mb-3' style={{ textDecoration: 'none', listStyle: 'none' }}>
                  {['Electric Switches', 'Pipes', 'Doors and Frames', 'Windows and Glasses'].map((category, index) => {
                     return (
                        <Tab eventKey={`${category}`} title={`${category}`} key={index}>
                           <Row>
                              <Col md='4' lg='3'>
                                 <div className='mb-4'>
                                    <Image src={Company} className='w-100' />
                                 </div>
                              </Col>
                              <Col md='8' lg='9'>
                                 <Row>
                                    {products && products.sort(() => (Math.random() > 0.5) ? 1 : -1).slice(6).map(({title, price, rating, image, inStock}, index) => {
                                       return (<Col xs='6' sm='6' lg='3' key={index}>
                                          <Product key={index} title={title} price={price} ratingNumber={rating} image={image} inStock={inStock} width='100%' />
                                       </Col>)
                                    })}
                                 </Row>
                              </Col>
                           </Row>
                        </Tab>
                     )
                  })}
               </Tabs>
               <Row>
                  <Col md='4' lg='3'>
                     <div className='mb-4'>
                        <Image src={Company} className='w-100' />
                     </div>
                  </Col>
                  <Col md='8' lg='9'>
                     <Row>
                        {products && products.sort(() => (Math.random() > 0.5) ? 1 : -1).slice(6).map(({title, price, rating, image, inStock}, index) => {
                           return (<Col xs='6' sm='6' lg='3' key={index}>
                              <Product key={index} title={title} price={price} ratingNumber={rating} image={image} inStock={inStock} width='100%' />
                           </Col>)
                        })}
                     </Row>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className='bg-white py-5'>
            <Container>
               <Row>
                  {companies && companies.map((company, index) => {
                     return (
                        <Col xs='6' md='4' lg='2' xl='2' className='mb-4' key={index}>
                           <div className='w-100 border bg-light p-3' style={{ height: '90px' }}>
                              <Image src={company} className='w-100 h-100 object-cover' />
                           </div>
                        </Col>
                     )
                  })}
               </Row>
            </Container>
         </section>
         <section className='bg-white pb-5'>
            <Container>
               <h4 className='mb-4'>See more of the top rated stores</h4>
               <Row className='d-flex justify-content-center'>
                  {stores && stores.slice(6).map(({title, date, image}, index) => {
                     return (
                        <Col xs='12' md='4' lg='3' xl='2' className='mb-3 text-center' key={index}>
                           <div className='w-100 mb-3' style={{ height: '140px' }}>
                              <Image src={image} className='w-100 h-100 object-cover' />
                           </div>
                           <div className='text-dark mb-2'>{title}</div>
                           <small className='text-muted'>{date}</small>
                        </Col>
                     )
                  })}
               </Row>
            </Container>
         </section>
         <section className='mb-5 pb-5'>
            <Container style={{ maxWidth: '786px' }}>
               <div className='rounded p-4 bg-light'>
                  <div className='d-flex mb-4'>
                     <div className='me-3' style={{ width: '60px', height: '60px' }}>
                        <Image src={Exclama} className='w-100' />
                     </div>
                     <div className='text-dark'>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</div>
                  </div>
                  <div className='d-flex justify-content-between'>
                     <div>
                        <Button variant="outline-primary" size='sm' className='rounded-pill px-2'>Leave Us A Review</Button>
                     </div>
                     <div>
                        <small className='mb-3 d-block text-muted'>-Tama Brown</small>
                        <div className='d-flex ms-2 align-items-center'>
                           {[1, 2, 3, 4].map((y, i) => {
                              const active = i === 0 ? 'primary' : 'secondary';
                              return (
                                 <div className={`bg-${active} me-1 cursor-pointer d-block rounded-pill`} key={i} style={{ width: '8px', height: '8px' }}></div>
                              )
                           })}
                        </div>
                     </div>
                  </div>
               </div>
            </Container>
         </section>
         <section className='bg-white pb-5 mb-5'>
            <Features />
         </section>
         <section className=''>
            <Footer />
         </section>
      </>
   )
}

import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import AsideCategories from '../../components/Categories';
import { products } from '../../data/products';
import Item from '../../components/Product';
import ProductImage from '../../assets/products/4.png';
import Colors from '../../assets/colors.png';
import InStock from '../../assets/in-stock.png';
import Love from '../../assets/love.png';
import Footer from '../../components/Footer';
import Features from '../../components/Features';

export default function Product() {
   return (
      <div>
         <section style={{ padding: '120px 0' }}>
            <Container>
               <Row className="d-flex">
                  <Col xs='12' md='4' lg='3' className='mb-4'>
                     <AsideCategories />
                  </Col>
                  <Col xs='12' md='8' lg='9'>
                     <Row className='mb-4'>
                        <Col xs='12' md='4'>
                           <div className='w-100 p-1 mb-4'>
                              <Image src={ProductImage} className='w-100' />
                           </div>
                        </Col>
                        <Col xs='12' md='8'>
                           <div className='d-flex justify-content-between flex-wrap'>
                              <div className=''>
                                 <h3 className='text-dark'>Aluminium Pain</h3>
                                 <div className='text-dark mb-3'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</div>
                              </div>
                              <div className=''>
                                 <Button size='sm' className='rounded-pill bg-main px-3 mb-4'>Add to Cart</Button>
                                 <div className=''>
                                    <Image src={InStock} className='img-fluid w-100' />
                                 </div>
                              </div>
                           </div>
                           <div className='d-flex align-items-center mb-3'>
                              <s className='me-3'>$595</s> <h5 className='m-0'>$399</h5>
                           </div>
                           <div className='d-flex align-items-center mb-3'>
                              <div className='text-muted me-3'>Color Variations</div>
                              <div className=''>
                                 <Image src={Colors} className='w-100' />
                              </div>
                           </div>
                           <div className='d-flex justify-content-between align-items-center flex-wrap'>
                              <div className='text-muted mb-3'>Sizes: 14inches, 20inches, 24inches</div>
                              <div className='d-flex align-items-center mb-3'>
                                 <div className='text-muted'>Add to wishlist</div>
                                 <div className='ms-2'>
                                    <Image src={Love} className='w-100' />
                                 </div>
                              </div>
                           </div>
                        </Col>
                     </Row>
                     <div className=''>
                        <h5 className='text-dark mb-3'>Related Products</h5>
                        <Row>
                           {products && products.slice(6).sort(() => (Math.random() > 0.5) ? 1 : -1).map(({title, price, rating, image, inStock}, index) => {
                              return (<Col xs='6' sm='6' lg='3' key={index}>
                                 <Item key={index} title={title} price={price} ratingNumber={rating} image={image} inStock={inStock} width='100%' />
                              </Col>)
                           })}
                        </Row>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className='mb-5 pb-5'>
            <Features />
         </section>
         <section>
            <Footer />
         </section>
      </div>
   )
}

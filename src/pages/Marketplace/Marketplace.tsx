import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { TbGridDots } from 'react-icons/tb';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import Product from '../../components/Product';
import { products } from "../../data/products";
import Features from "../../components/Features";
import Footer from '../../components/Footer';
import Categories from '../../components/Categories';
import Navbar from "../../components/Navbar/Navbar";

export default function Marketplace() {
   return (
      <>
         <Navbar showCenterLinks={true} /> 
         <section style={{ padding: '140px 0 60px 0' }}>
            <Container>
               <div className='d-flex align-items-center mb-4'>
                  <Link to='/' className='me-2 text-decoration-none'>Home <AiOutlineRight className='font-weight-bolder' size='0.8em' /></Link>
                  <Link to='/marketplace' className='text-decoration-none text-muted'>Marketplace</Link>
               </div>
               <div className='d-flex align-items-center justify-content-end mb-4'>
                  <form className='W-100'>
                     <Form.Group className='position-relative w-100'>
                        <Button type="submit" className="rounded-circle p-0 position-absolute text-center text-white bg-main" style={{ height: '30px', lineHeight: '25px', width: '30px', top: '6px', right: '8px' }}>
                           <BsSearch size='0.7em' />
                        </Button>
                        <Form.Control type='text' className='rounded-pill px-3 py-2 w-100' placeholder="Search products" style={{ minWidth: '280px', maxWidth: '300px' }} />
                     </Form.Group>
                  </form>
               </div>
               <div className='d-flex align-items-center justify-content-between flex-wrap mb-2'>
                  <div className="d-flex align-items-center flex-wrap">
                     <h5 className='me-4 mb-3'>Market Place</h5>
                     <div className="d-flex align-items-center mb-3">
                        <Form.Group className="me-3">
                           <Form.Select>
                              <option value=''>Sort By: All</option>
                           </Form.Select>
                        </Form.Group>
                        <Form.Group className="me-3">
                           <Form.Select>
                              <option value=''>20 Per page</option>
                           </Form.Select>
                        </Form.Group>
                     </div>
                     <div className="d-flex mb-3">
                        <TbGridDots className='me-3' />
                        <HiOutlineBars3BottomLeft className='me-3' />
                     </div>
                  </div>
                  <Button size='sm' className='rounded-pill px-4 bg-main mb-3' href="#">Back</Button>
               </div>
               <Row className="d-flex">
                  <Col xs='12' md='4' lg='3'>
                     <Categories />
                  </Col>
                  <Col xs='12' md='8' lg='9'>
                     <Row>
                        {products && products.sort(() => (Math.random() > 0.5) ? 1 : -1).map(({title, price, rating, image, inStock}, index) => {
                           return (<Col xs='6' sm='6' lg='3' key={index}>
                              <Product key={index} title={title} price={price} ratingNumber={rating} image={image} inStock={inStock} width='100%' />
                           </Col>)
                        })}
                     </Row>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className='pb-5 mb-5'>
            <Features />
         </section>
         <section className=''>
            <Footer />
         </section>
      </>
   )
}

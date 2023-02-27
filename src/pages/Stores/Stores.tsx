import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import Footer from "../../components/Footer";
import Store from "../../components/Store";
import { categories } from "../../data/categories";
import { stores } from "../../data/stores";

export default function Stores() {
   return (
      <>
         <section style={{ padding: '140px 0 30px 0' }}>
            <Container>
               <div className='d-flex align-items-center mb-4'>
                  <Link to='/' className='me-2 text-decoration-none'>Home <AiOutlineRight className='font-weight-bolder' size='0.8em' /></Link>
                  <Link to='/stores' className='text-decoration-none text-muted'>Stores</Link>
               </div>
               <div className='d-flex align-items-center justify-content-between mb-4 flex-wrap'>
                  <h4 className='text-dark mb-3'>Stores/Shops</h4>
                  <Form className='W-100 mb-3'>
                     <Form.Group className='position-relative w-100'>
                        <Button type="submit" className="rounded-circle p-0 position-absolute text-center text-white bg-main" style={{ height: '30px', lineHeight: '25px', width: '30px', top: '6px', right: '8px' }}>
                           <BsSearch size='0.7em' />
                        </Button>
                        <Form.Control type='text' className='rounded-pill px-3 py-2 w-100' placeholder="Search products" style={{ minWidth: '280px', maxWidth: '300px' }} />
                     </Form.Group>
                  </Form>
               </div>
               <div className='d-flex align-items-center flex-wrap pb-4 border-bottom'>
                  {categories && categories.slice(6).sort(() => (Math.random() > 0.5) ? 1 : -1).map((category, index) => {
                     return (<div className='p-2 me-3 mb-3 rounded border' key={index}>{category}</div>)
                  })}
               </div>
            </Container>
         </section>
         <section style={{ paddingBottom: '60px' }}>
            <Container>
               <div className="">
                  <h4 className='mb-4'>My Favourites</h4>
                  <Row>
                     {stores && stores.sort(() => (Math.random() > 0.5) ? 1 : -1).map(({title, ratingNumber}, index) => {
                        return (<Col xs='12' sm='6' lg='3' xl='2' key={index} className='mb-3'>
                           <Store key={index} title={title} ratingNumber={ratingNumber}width='100%' />
                        </Col>)
                     })}
                  </Row>
               </div>
            </Container>
         </section>
         <section className=''>
            <Footer />
         </section>
      </>
   )
}

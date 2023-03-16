import { Col, Container, Row, Image, Card, Button, InputGroup, Form, Table } from 'react-bootstrap'
import { cart } from '../../data/cart';
import paypal from '../../assets/paypal.png';
import { TiDeleteOutline } from 'react-icons/ti';
import { RiEditCircleLine } from 'react-icons/ri';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';

export default function Cart() {
   return (
      <div>
         <Navbar showCenterLinks={true} />
         <section style={{ padding: '120px 0 100px' }}>
            <Container>
               <h3 className='text-dark mb-4 w-100'>Shoping Cart</h3>
               <Row>
                  <Col xs='12' lg='8'>
                     <Row>
                        <Table>
                           <thead>
                              <tr>
                                 <th>Item</th>
                                 <th>Price</th>
                                 <th>Quantity</th>
                                 <th>Subtotal</th>
                                 <th></th>
                              </tr>
                           </thead>
                           <tbody>
                              {cart && cart.map(({title, image, price, text, quantity, subTotal}, index) => {
                                 return (<tr className='mb-4' key={index}>
                                    <td>
                                       <div className='d-flex'>
                                          <div style={{ height: '120px', minWidth: '120px' }} className='border'>
                                             <Image src={image} className='h-100 w-100' />
                                          </div>
                                          <div className='ms-3'>
                                             <h4 className='text-dark'>{title}</h4>
                                             <small className='text-muted'>{text}</small>
                                          </div>
                                       </div>
                                    </td>
                                    <td>{price}</td>
                                    <td>
                                       <Form.Control readOnly type="number" value={`${quantity}`} min="1" max="10" />
                                    </td>
                                    <td>{subTotal}</td>
                                    <td>
                                       <div>
                                          <TiDeleteOutline size='1.3em' className='text-muted' />
                                          <RiEditCircleLine size='1.2em' className='text-muted' />
                                       </div>
                                    </td>
                                 </tr>)
                              })}
                           </tbody>
                        </Table>
                     </Row>
                  </Col>
                  <Col xs='12' lg='4'>
                     <div className='bg-light w-100 p-4 rounded'>
                        <h5 className='mb-3 pb-3 border-bottom'>Summary</h5>
                        <div className='d-flex justify-content-between mb-3'>
                           <div className='text-dark'>Subtotal</div>
                           <div className='text-dark'>$13,980</div>
                        </div>
                        <div className='d-flex justify-content-between mb-3'>
                           <div className='text-dark'>Shipping</div>
                           <div className='text-dark'>$21</div>
                        </div>
                        <p className='text-muted mb-3'>Standard Rate - Price may vary depending on the item/destination. Shop Staff will contact you.</p>
                        <div className='d-flex justify-content-between mb-3'>
                           <div className='text-dark'>Tax</div>
                           <div className='text-dark'>$1.50</div>
                        </div>
                        <div className='d-flex justify-content-between mb-3'>
                           <div className='text-dark'>GST (10%)</div>
                           <div className='text-dark'>$1.91</div>
                        </div>
                        <div className='d-flex justify-content-between mb-3'>
                           <div className='text-dark'>Subtotal</div>
                           <div className='text-dark'>$14,908</div>
                        </div>
                        <div>
                           <Button className='w-100 bg-main text-white rounded-pill mb-4'>Proceed to Checkout</Button>
                           <div className='w-100 mb-4'>
                              <Image src={paypal} className='img-fluid w-100 h-100' />
                           </div>
                           <Button variant='outline' className='w-100 border bg-transparent text-dark rounded-pill'>Checkout with Multiple Addresses</Button>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <section>
            <Footer />
         </section>
      </div>
   )
}



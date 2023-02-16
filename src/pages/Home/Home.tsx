import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import homeStyles from './Home.module.css'
import Features from './Partials/Features'
import { processFeatures } from '../../data/features';
import Security from '../../assets/Security.png';
import { BsArrowRight } from 'react-icons/bs';
import Support from '../../assets/Support.png';
import Faq from './Partials/Faq';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
   return (
      <>
         <section className={`bg-white w-100 ${homeStyles.wrapper}`}>
            <Container>
               <div className={`bg-white w-100 ${homeStyles.inner}`}>
                  <Row className='d-flex justify-content-center text-center'>
                     <Col sm='12' md='10' lg='7'>
                        <h1 className='text-dark mb-4'><span className='text-orange'>Buildadom</span> is building the largest digital ecosystem of innovative solutions for transforming the building material industry in Africa</h1>
                        <Row className='d-flex justify-content-center text-center'>
                           <Col md="10" lg="7">
                              <p className='text-dark lead mb-4'>Sign Up now and be among the first people to enjoy our amazing features when we launch</p>
                           </Col>
                        </Row>
                        <div className='d-flex justify-content-center'>
                           <Link to='/signup'>
                              <Button className='bg-main rounded-pill me-4 px-4 py-2'>Sign Up</Button>
                           </Link>
                           <Button className='border-main bg-transparent text-main rounded-pill px-4 py-2'>Learn More</Button>
                        </div>
                     </Col>
                  </Row>
               </div>
            </Container>
         </section>
         <section className={`bg-white w-100 ${homeStyles.features}`}>
            <Features />
         </section>
         <section className={`w-100 ${homeStyles.cta}`}>
            <Container>
               <Row className='d-flex justify-content-center text-center'>
                  <Col sm='12' md='10' lg='9'>
                     <h3 className='text-white mb-4' style={{ fontWeight: '400', letterSpacing: '0px' }}>Sign Up now and be among the first people to enjoy our amazing features when we launch.</h3>
                     <Link to='/signup'>
                        <Button className='bg-main rounded-pill px-4 py-2'>Sign Up Now</Button>
                     </Link>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className={`w-100 bg-white ${homeStyles.process}`}>
            <Container style={{ maxWidth: '780px' }}>
               <h1 className='text-main text-center mb-4'>What do you want to achieve?</h1>
               <Row>
                  { processFeatures && processFeatures.map((feature, index) => {
                     return (<Col key={index} sm='12' md='6' className='mb-4'>
                        <div className='bg-light border p-4' style={{ height: '480px', borderRadius: '24px' }}>
                           <div className='p-3 bg-light border mb-3 rounded' style={{ width: '65px', height: '65px' }}>
                              <Image src={feature.icon} className='img-fluid mb-3' />
                           </div>
                           <div className=''>
                              <h4 className='text-dark mb-4'>
                                 {feature.title}
                              </h4>
                              <ul>
                                 {feature.text && feature.text.map((point, index) => {
                                    return (<li key={index} className='mb-2 text-orange'>
                                       <span className='text-dark'>
                                          {point}
                                       </span>
                                    </li>)
                                 })}
                              </ul>
                           </div>
                        </div>
                     </Col>)
                  })}
               </Row>
            </Container>
         </section>
         <section className={`w-100 ${homeStyles.security}`}>
            <Container>
               <Row className='d-flex align-items-center'>
                  <Col sm='12' md='6' className='mb-4'>
                     <h4 className='text-white mb-4'>You're in Safe Hands</h4>
                     <p className='text-white lead'>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience. Performance compared to i7-9700. Specs varies by model.</p>
                  </Col>
                  <Col sm='12' md='6'>
                     <div className=''>
                        <Image src={Security} className='img-fluid' />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className='bg-light' style={{ padding: '80px 0' }}>
            <Container style={{ maxWidth: '1028px' }}>
               <Row className='d-flex align-items-center'>
                  <Col className='mb-4' sm='12' md='6'>
                     {['Product Support', 'Our Policy', 'Our Buyer Guide'].map((text, index) => {
                        return (<div key={index} className='bg-white mb-4 d-flex justify-content-between rounded p-3'>
                           <div className='text-dark'>{text}</div>
                           <BsArrowRight />
                        </div>)
                     })}
                  </Col>
                  <Col className='mb-4' sm='12' md='6'>
                     <Image src={Support} className='img-fluid' />
                  </Col>
               </Row>
            </Container>
         </section>
         <section className='bg-white' style={{ padding: '140px 0' }}>
            <Container style={{ maxWidth: '767px' }}>
               <h3 className='text-dark text-center mb-4'>Frequently Asked Questions</h3>
               <Faq />
            </Container>
         </section>
         <Footer />
      </>
   )
}

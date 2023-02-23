import { ReactNode } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import girl from "../../../assets/brit.png";
import { mainFeatures } from "../../../data/features";

export default function Features() {
   return (
      <>
         <Container style={{ maxWidth: '997px' }}>
            <Row className='d-flex align-items-center'>
               <Col sm='12' md='7' lg='6' className='mb-4'>
                  <div className="mb-5">
                     <Image src={girl} className='img-fluid w-100 object-cover' />
                  </div>
               </Col>
               <Col sm='12' md='5' lg='6' className='mb-4 text-md-start text-center'>
                  <p className='mb-3'>Join manufacturers, distributors and dealers all over the world  who are taking advantage of  digital transformation opportunities to change the way they do business - reach customers, sell, take, process and fulfill orders.</p>
                  <div className=''>
                     <div className='mb-2 text-dark'>Shop/Stores</div>
                     <h4 className='text-dark'>+3000</h4>
                  </div>
               </Col>
            </Row>
         </Container>
         <Container>
            <Row className='text-md-start text-center'>
               {mainFeatures && mainFeatures.map((feature, index) => {
                  return (<Col sm='12' lg='4' className='mb-4' key={index}>
                     <div className='text-md-start text-center d-flex justify-content-md-start justify-content-center'>
                        <div className='mb-4 text-center' style={{ backgroundColor: `${feature.iconBgColor}`, width: '86px', height: '86px', lineHeight: '86px', borderRadius: '16px' }}>
                           <div style={{ backgroundImage: `url(${feature.backgroundIconImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                              <Image src={feature.icon} />
                           </div>
                        </div>
                     </div>
                     <p className='text-dark' style={{ fontFamily: 'Poppins', fontSize: '24px' }}>{ feature.title }</p>
                     <p className='text-dark' style={{ fontSize: '18px' }}>{ feature.text }</p>
                  </Col>)
               })}
            </Row>
         </Container>
      </>
   )
}

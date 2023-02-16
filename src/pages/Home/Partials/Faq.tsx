import Accordion from 'react-bootstrap/Accordion';
import { faqs } from '../../../data/faqs';

export default function Faq() {
   return (
      <Accordion flush>
         {faqs.length > 0 && faqs.map((faq, index) => {
            return (<Accordion.Item key={index} className='mb-4' eventKey={`${index}`}>
               <Accordion.Header>{faq.question}</Accordion.Header>
               <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>)
         })}
      </Accordion>
   )
}

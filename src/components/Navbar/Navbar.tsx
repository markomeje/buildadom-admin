import { Container, Image } from 'react-bootstrap'
// import styles from './Navbar.module.css';
import Vector24 from '../../assets/Vector24.png';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { links } from '../../data/links';
import { isEmpty } from '../../helpers/functions';

export default function Navbar() {
   return (
      <div className='w-100 fixed-top'>
         <div className=''>
            <Container>
               <div></div>
            </Container>
         </div>
         <div className='border-bottom bg-white py-3'>
            <Container>
               <div className='d-flex justify-content-between align-items-center'>
                  <Link to='/' className='text-decoration-none'>
                     <Image src={Vector24} />
                  </Link>
                  <div className=''>
                     {links.map((link, index) => {
                        return (link.isDropdown ? (<div></div>) : (<Link to={link.path} key={index} className='me-3 text-decoration-none text-dark'>{link.name}</Link>))
                     })}
                  </div>
                  <div>
                     <RxHamburgerMenu size='2em' className='text-main cursor-pointer' />
                  </div>
               </div>
            </Container>
         </div>
      </div>
   )
}

import { Container, Image } from 'react-bootstrap'
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import LogoDark from '../../assets/logo-dark.png';
import { links } from '../../data/links';
//import { isEmpty } from '../../helpers/functions';

export default function Navbar() {
   return (
      <div className='w-100 bg-white fixed-top border-bottom py-3'>
         <Container>
            <div className='d-flex justify-content-between align-items-center'>
               <Link to='/' className='text-decoration-none'>
                  <div style={{ maxWidth: '145px', height: 'auto' }}>
                     <Image src={LogoDark} className='w-100 h-100 object-cover' />
                  </div>
               </Link>
               <div className={`${styles.center}`}>
                  {links.map((link, index) => {
                     return (link.isDropdown ? (<div></div>) : (<Link to={link.path} key={index} className='me-3 text-decoration-none text-dark'>{link.name}</Link>))
                  })}
               </div>
               <div className='m-0'>
                  <RxHamburgerMenu size='1.6em' className='text-main cursor-pointer' />
               </div>
            </div>
         </Container>
      </div>
   )
}

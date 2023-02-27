import { Container, Image } from 'react-bootstrap'
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import LogoDark from '../../assets/logo-dark.png';
import { links } from '../../data/links';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import ProfileImage from '../../assets/profile.png';
//import { isEmpty } from '../../helpers/functions';

export default function Navbar() {
   return (
      <div className='w-100 bg-white fixed-top border-bottom py-4'>
         <Container>
            <div className='d-flex justify-content-between align-items-center'>
               <Link to='/' className='text-decoration-none'>
                  <div style={{ maxWidth: '125px', height: 'auto' }}>
                     <Image src={LogoDark} className='w-100 h-100 object-cover' />
                  </div>
               </Link>
               <div className={`${styles.center}`}>
                  {links.map((link, index) => {
                     return (link.isDropdown ? (<div></div>) : (<Link to={link.path} key={index} className='me-3 text-decoration-none text-dark'>{link.name}</Link>))
                  })}
               </div>
               <div className={`${styles.right} d-flex align-items-center `}>
                  <div className='text-main cursor-pointer'>
                     <BiSearch />
                  </div>
                  <Link to='/cart' className='ms-3 text-main cursor-pointer position-relative'>
                     <div className='bg-main text-center text-white rounded-circle position-absolute' style={{ width: '14px', height: '14px', lineHeight: '14px', fontSize: '0.6em', top: '-2px', left: '8px' }}>2</div>
                     <FiShoppingCart />
                  </Link>
                  <div className='ms-3 border rounded-circle' style={{ width: '30px', height: '30px' }}>
                     <Image src={ProfileImage} className='w-100 h-100 rounded-circle' />
                  </div>
                  <div className={`text-main cursor-pointer ms-3 ${styles.hamburger}`}>
                     <RxHamburgerMenu size='1.4em' />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}

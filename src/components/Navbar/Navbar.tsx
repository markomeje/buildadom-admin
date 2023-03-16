import { Button, Container, Image } from 'react-bootstrap'
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import LogoDark from '../../assets/logo-dark.png';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import ProfileImage from '../../assets/profile.png';
import { useAuth } from '../../hooks/useAuth';

type NavbarType = {
   showCenterLinks: boolean,
}

export default function Navbar({ showCenterLinks = true }: NavbarType) {
   const { user, logout } = useAuth();
   return (
      <div className='w-100 bg-white fixed-top border-bottom py-4'>
         <Container>
            <div className='d-flex justify-content-between align-items-center'>
               <Link to='/' className='text-decoration-none'>
                  <div style={{ maxWidth: '125px', height: 'auto' }}>
                     <Image src={LogoDark} className='w-100 h-100 object-cover' />
                  </div>
               </Link>
               {showCenterLinks && (<div className={`${styles.center}`}>
                  <Link to='/' className='me-3 text-decoration-none text-dark'>Home</Link>
                  <Link to='/marketplace' className='me-3 text-decoration-none text-dark'>Marketplace</Link>
                  <Link to='/categories' className='me-3 text-decoration-none text-dark'>Categories</Link>
                  <Link to='/explore' className='me-3 text-decoration-none text-dark'>Explore</Link>
                  <Link to='/services' className='me-3 text-decoration-none text-dark'>Services</Link>
                  <Link to='/track-order' className='me-3 text-decoration-none text-dark'>Track Order</Link>
                  {user.token ? (<div className='cursor-pointer' onClick={logout}>Logout</div>) : (<Link to='/signup' className='me-3 text-decoration-none text-dark'>Signup</Link>)}
               </div>)}
               <div className={`${styles.right} d-flex align-items-center `}>
                  <div className='text-main cursor-pointer'>
                     <BiSearch />
                  </div>
                  <Link to='/cart' className='ms-3 text-main cursor-pointer position-relative'>
                     <div className='bg-main text-center text-white rounded-circle position-absolute' style={{ width: '14px', height: '14px', lineHeight: '14px', fontSize: '0.6em', top: '-2px', left: '8px' }}>2</div>
                     <FiShoppingCart />
                  </Link>
                  {user.token ? (<div className='ms-3 border rounded-circle' style={{ width: '30px', height: '30px' }}>
                     <Image src={ProfileImage} className='w-100 h-100 rounded-circle' />
                  </div>) : (<Link to='/login' className={styles.auth}>
                     <Button className='rounded-pill px-3 pt-2 ms-3 bg-main'>Signin/Register</Button>
                  </Link>)}
                  <div className={`text-main cursor-pointer ms-3 ${styles.hamburger}`}>
                     <RxHamburgerMenu size='1.4em' />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}

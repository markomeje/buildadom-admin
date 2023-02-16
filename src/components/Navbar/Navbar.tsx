import { Container, Image } from 'react-bootstrap'
// import navbarStyles from "./Navbar.module.css";
import Vector24 from '../../assets/Vector24.png';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Navbar() {
   return (
      <div className='w-100 bg-white fixed-top border-bottom py-3'>
         <Container>
            <div className='d-flex justify-content-between align-items-center'>
               <Link to='/' className='text-decoration-none'>
                  <Image src={Vector24} />
               </Link>
               <div>
                  <RxHamburgerMenu size='2em' className='text-main cursor-pointer' />
                  {/* <Link to='/signup' className={`px-4 py-2 text-white text-decoration-none rounded-pill bg-main ${navbarStyles.button}`}>Signup Now</Link> */}
               </div>
            </div>
         </Container>
      </div>
   )
}

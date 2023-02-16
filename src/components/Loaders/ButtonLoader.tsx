import { Image } from 'react-bootstrap'
import SquesresImageLoader from '../../assets/squares.gif'

export default function ButtonLoader() {
   return (
      <div className='position-fixed bg-white w-100 h-100'>
         <div className='position-relative w-100 h-100'>
            <div className='position-absolute text-center' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
               <Image src={SquesresImageLoader} className='w-25' />
            </div>
         </div>
      </div>
   )
}

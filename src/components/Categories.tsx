import { RxCaretDown } from 'react-icons/rx'
import { categories } from '../data/categories'

export default function AsideCategories() {
   return (
      <div className='bg-light p-4'>
         <h5 className='mb-3'>Filters</h5>
         <div className='mb-3 border p-3 d-flex justify-content-between align-items-center'>
            <h5 className='text-dark m-0'>Categories</h5>
            <RxCaretDown />
         </div>
         {categories && categories.map((category, index) => {
            return (<div key={index} className='mb-3'>{category}</div>)
         })}
      </div>
   )
}


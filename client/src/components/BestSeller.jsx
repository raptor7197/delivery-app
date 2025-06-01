// import React from 'react'
// import ProductCard from './ProductCard'
// import { useAppContext } from '../context/AppContext';
// import { assets } from '../assets/assets';

// const BestSeller = () => {
//   const { products } = useAppContext();

//   return (
//     <div className='mt-16'>
//       <img src={assets.categories} alt="Best Seller" /> 

//       <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
//         {products && products.length > 0 && (
//         <ProductCard product={products[0]} />
//       )}
//     </div>
//   )
// }

// export default BestSeller

import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext';
import { assets, categories, dummyProducts } from '../assets/assets';

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <div className='mt-16'>

      <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>

      {products && products.length > 0 && (
        <ProductCard product={products[0]} />
        
      )}
      
    </div>
  )
}

export default BestSeller
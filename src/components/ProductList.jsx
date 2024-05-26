import React from 'react'
import { products } from '../data'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4'>
        {
            products.map(item=>(
                <ProductCard key={item.id} item={item} />
            ))
        }
    </div>
  )
}

export default ProductList
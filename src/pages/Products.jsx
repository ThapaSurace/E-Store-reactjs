import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductList'

const Products = () => {
  const {genre} = useParams()
  
  return (
    <div className='container my-10'>
      <h1 className='text-3xl font-bold text-slate-900'>
        {genre}
        </h1>
        {/* filter */}
        <div className='flex justify-between items-center py-4 border-b'>
          {/* left */}
          <div>
            <label className='text-xl font-semibold mb-1' 
            htmlFor="language">Filter Language</label>
            <select name="language" id="language">
              <option selected disabled>language</option>
              <option>Nepali</option>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          {/* right */}
          <div>
          <label className='text-xl font-semibold mb-1' 
            htmlFor="price">Sort Product</label>
            <select name="price" id="price">
              <option value='newest'>Newest</option>
              <option value='asc'>Price(asc)</option>
              <option value='desc'>Price(desc)</option>
            </select>
          </div>
        </div>
        {/* productlist */}
        <div className='my-4'>
        <ProductList genre={genre} />
        </div>
    </div>
  )
}

export default Products
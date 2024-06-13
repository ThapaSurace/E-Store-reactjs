import React from 'react';
import ProductCard from './ProductCard';
import { newRequest } from '../utils/newRequest';
import { useQuery } from '@tanstack/react-query';

const ProductList = ({ genre, sort, filter }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products',genre,sort],
    queryFn: async () => {
      try {
        const res = await 
        newRequest.get(genre ? `/products?genre=${genre}&sort=${sort}` : '/products')
        return res.data
      } catch (error) {
        console.log(error);
      }
    }
  })
  if (isLoading) return <span>loading...</span>
  if (error) return <span>Erro fetching data!</span>

  const filteredData = filter ? 
  data.filter(item => item.language === filter)
  : data

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredData?.map((item) => (
        <ProductCard key={item._id} item={item} />
      ))
      }
    </div>
  );
};

export default ProductList;

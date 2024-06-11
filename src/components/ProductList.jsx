import React from 'react';
import ProductCard from './ProductCard';
import { newRequest } from '../utils/newRequest';
import { useQuery } from '@tanstack/react-query';

const ProductList = ({ genre }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const res = await 
        newRequest.get(genre ? `/products?genre=${genre}` : '/products')
        return res.data
      } catch (error) {
        console.log(error);
      }
    }
  })
  if (isLoading) return <span>loading...</span>
  if (error) return <span>Erro fetching data!</span>

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((item) => (
        <ProductCard key={item._id} item={item} />
      ))
      }
    </div>
  );
};

export default ProductList;

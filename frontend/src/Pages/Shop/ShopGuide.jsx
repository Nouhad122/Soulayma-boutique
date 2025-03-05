import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../use/useHttp';
import ChatBotContext from '../../store/ChatBotContext';
import FilteredProducts from '../../Components/Secondary-Comps/FilteredProducts';

const ShopGuide = () => {
  const { skinTone, ageRange } = useContext(ChatBotContext);

  // Fetch products with a unique query key based on filtering criteria
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['products', skinTone, ageRange], // Different cache for different filters
    queryFn: ({ signal }) => fetchProducts({ signal }),
    staleTime: 60000
  });

  // Filter only hijabs based on skinTone and ageRange
  const filteredProducts = data?.filter(product =>
    product.category === 'Hijabs' &&
    (Array.isArray(product.skinTone) ? product.skinTone.some(tone => skinTone?.includes(tone)) : true) &&
    (Array.isArray(product.ageRange) ? product.ageRange.some(range => ageRange?.includes(range)) : true)
  ) || [];

  return (
    <FilteredProducts
      containerClass='guidedProducts'
      filteredProducts={filteredProducts} 
      isPending={isPending} 
      isError={isError} 
      error={error} 
    />
  );
};

export default ShopGuide;

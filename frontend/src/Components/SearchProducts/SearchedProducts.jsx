import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from "../../use/useHttp.js";
import useFilteredProducts from '../../use/useFilteredProducts';
import SideCompContext from '../../store/SideCompContext.jsx';
import Modal from '../Secondary-Comps/Modal.jsx';
import FilteredProducts from '../Secondary-Comps/FilteredProducts.jsx';

const SearchedProducts = () => {
  const { inputValue } = useContext(SideCompContext);

  // Fetch products with a unique query key based on inputValue
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['products', inputValue], // Different cache for each search term
    queryFn: ({ signal }) => fetchProducts({ signal }),
    staleTime: 60000
  });

  // Apply filtering based on search input
  const filteredProducts = useFilteredProducts(data, inputValue);
  
  return (
    <>
      <Modal />
      <FilteredProducts
        filteredProducts={filteredProducts} 
        isPending={isPending} 
        isError={isError} 
        error={error} 
      />
    </>
  );
};

export default SearchedProducts;

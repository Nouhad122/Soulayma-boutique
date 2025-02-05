import React, { useState, useContext } from 'react';
import classes from '../Products/Products.module.css';
import Pagination from '../../utils/Pagination.jsx';
import shopClasses from '../ShopProducts/ShopProducts.module.css';
import { fetchProducts } from "../../use/useFetch.js";
import useFilteredProducts from '../../use/useFilteredProducts';
import usePagination from '../../use/usePagination';
import useScrollToTop from '../../use/useScrollToTop';
import ProductList from './ProductList.jsx';
import SideCompContext from '../../store/SideCompContext.jsx';
import Modal from '../Secondary-Comps/Modal.jsx';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../Secondary-Comps/LoadingPage.jsx';



const SearchedProducts = () => {
  const { inputValue } = useContext(SideCompContext);
  const [productsPerPage] = useState(window.innerWidth > 1600 ? 25 : 24);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: ({ signal }) => fetchProducts({ signal })
  })

  const filteredProducts = useFilteredProducts(data, inputValue);
  
  const { totalPages, currentProducts } = usePagination(filteredProducts, productsPerPage, currentPage);
  const sProducts = useScrollToTop([currentPage]);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const generateUrl = (product) => `/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`;

  if (isPending) {
    return <LoadingPage />; 
  }

  if (isError) {
    return <p>Error: {error.message || 'Something went wrong!'}</p>
  }
  
  return (
    <>
    <Modal />
    <div ref={sProducts} className={`${shopClasses.searchedProducts}`}>
      <div className={classes.productsContainer}>
        <ProductList products={currentProducts} generateUrl={generateUrl} />

        {filteredProducts.length > productsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        )}
      </div>
    </div>
    </>
  );
};

export default SearchedProducts;
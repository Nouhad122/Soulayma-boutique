import React, { useState } from 'react';
import classes from '../Products/Products.module.css';
import Pagination from '../../utils/Pagination.jsx';
import shopClasses from '../ShopProducts/ShopProducts.module.css';
import usePagination from '../../use/usePagination';
import useScrollToTop from '../../use/useScrollToTop';
import ProductList from '../SearchProducts/ProductList.jsx';
import LoadingPage from './LoadingPage.jsx';

const FilteredProducts = ({ containerClass, filteredProducts, isPending, isError, error }) => {
  const [productsPerPage] = useState(window.innerWidth > 1600 ? 25 : 24);
  const [currentPage, setCurrentPage] = useState(1);

  const { totalPages, currentProducts } = usePagination(filteredProducts, productsPerPage, currentPage);
  const sProducts = useScrollToTop([currentPage]);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const generateUrl = (product) => `/shop/product/${product.category}/${product.kind}/${product.id}/${product.color}`;

  if (isPending) {
    return <LoadingPage />;
  }

  if (isError) {
    return <p>Error: {error.message || 'An error occurred while fetching products'}</p>;
  }

  return (
    <>
      <div ref={sProducts} className={shopClasses[containerClass]}>
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

export default FilteredProducts;

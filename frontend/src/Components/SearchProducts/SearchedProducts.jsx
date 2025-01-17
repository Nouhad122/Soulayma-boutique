import React, { useEffect, useRef, useState } from 'react';
import classes from '../Products/Products.module.css';
import Pagination from '../../utils/Pagination.jsx';
import shopClasses from '../ShopProducts/ShopProducts.module.css';
import products from '../../Products/products.json';
import ProductsCont from '../Products/ProductsCont.jsx';

const SearchedProducts = ({ searchInput }) => {
  const sProducts = useRef();
  const [productsPerPage] = useState(window.innerWidth > 1600 ? 25 : 24);
  const [currentPage, setCurrentPage] = useState(1);

  const editedInput = searchInput.replace(/\s+/g, "").toLowerCase();
  const filteredProducts = products.filter((product) =>
    ['title', 'color', 'category'].some(key => product[key].replace(/\s+/g, "").toLowerCase().includes(editedInput))
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  useEffect(() =>{
    sProducts.current.scrollTo(0,0);
  },[currentPage])

  const generateUrl = (product) => `/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`;

  return (
    <div ref={sProducts} className={`${shopClasses.searchedProducts}`}>
      <div className={classes.productsContainer}>
        {
          currentProducts.length > 0 ?
          <ProductsCont
            products={currentProducts}
            generateUrl={generateUrl}
          />
          :
          <p className={shopClasses.noProductsFound}><span>No Products Found</span></p>
        }

      {filteredProducts.length > productsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}
      </div>
    </div>

  );
};

export default SearchedProducts;

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from '../../utils/Pagination.jsx';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import usePagination from '../../use/usePagination.js';

const ShopProducts = ({products, filterColor}) => {
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}/${product.color}`;
  const { category, kind, page } = useParams();
  
  //filter products
  const filteredProductsByColor = filterColor ?
   products.filter(product => product.color === filterColor)
   : products;

  //pagination
  const navigate = useNavigate();

  const [productsPerPage] = useState(window.innerWidth > 1600 ? 25 : 24);

  const currentPage = Math.max(parseInt(page, 10) || 1, 1);

  const { totalPages, currentProducts } = usePagination(filteredProductsByColor, productsPerPage, currentPage);

  const goToPage = (pageNumber) => {
    navigate(`/shop/all/${category}/page/${pageNumber}`);
  };

  return (
    <div className={classes.productsContainer}>
    <ProductsCont 
        title="Soulayma Boutique"
        subTitle={kind ? kind : `Shop All ${category}`}
        products={currentProducts}
        generateUrl={generateUrl}
    />

    {filteredProductsByColor.length > productsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
    )}
    </div>
  )
}

export default ShopProducts

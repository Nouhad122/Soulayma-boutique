import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../../Products/products.json';
import Pagination from '../../utils/Pagination.jsx';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';

const ShopProducts = ({ filterColor, category, kind, page }) => {
  const navigate = useNavigate();
  const [productsPerPage, setProductsPerPage] = useState(window.innerWidth > 1600 ? 25 : 24);

  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(window.innerWidth > 1600 ? 25 : 24);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentPage = Math.max(parseInt(page, 10) || 1, 1);

  const filteredProducts = products.filter(product => {
    const categoryMatch = product.category === category;
    const kindMatch = kind ? product.kind === kind : true;
    const colorMatch = filterColor ? product.color === filterColor : true;
    return product.category === 'Arm & Neck Covers' || product.category === 'Luxury Bags' ||
    product.category === 'Soulayma Accessories' ? categoryMatch && colorMatch
    : categoryMatch && kindMatch && colorMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`;

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

        {filteredProducts.length > productsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        )}
        </div>
  );
};

export default ShopProducts;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products from '../../Products/products.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../../utils/Pagination.jsx';
import './ShopProducts.css';

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

  const goToPage = (pageNumber) => {
    navigate(`/shop/all/${category}/page/${pageNumber}`);
  };

  return (
    <div className='shopPage'>
      <div className='shop-products'>
        <div className='products-text'>
          <h1>{kind ? kind : `Shop All ${category}`}</h1>
        </div>
        <div className='products-container'>
          {currentProducts.map(product => (
            <Link
              key={product.id}
              to={`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`}
              className='shop-product-link'
            >
              <div className='shop-product'>
                <div className='images'>
                  <img className='image1' src={product.image1} alt={product.title} />
                  <img className='image2' src={product.image2} alt={product.title} />
                </div>
                <h2>{product.title} - {product.color}</h2>
                <h4>{product.price}$</h4>
                <div className='feedbacks-container'>
                  <div className='feedbacks'>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                  <p className='rate'>5.0 <span className='num-of-rates'>(5)</span></p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Component */}
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

export default ShopProducts;

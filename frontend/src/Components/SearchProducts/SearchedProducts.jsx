import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Pagination from '../../utils/Pagination.jsx';
import '../ShopProducts/ShopProducts.css';
import products from '../../Products/products.json';

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
  

  return (
    <div ref={sProducts} className="shop-products searched-products">
      <div className="products-container">
        {
          currentProducts.length > 0 ?
          currentProducts.map((product) => (
            <Link
            key={product.id}
            to={`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`}
            className='shop-product-link'
          >
            <div className="shop-product">
              <div className="images">
                <img className="image1" src={product.image1} alt={product.title} />
                <img className="image2" src={product.image2} alt={product.title} />
              </div>
              <h2>{product.title} - {product.color}</h2>
              <h4>{product.price}$</h4>
              <div className="feedbacks-container">
                <div className="feedbacks">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i}/>
                  ))}
                </div>
                <p className="rate">5.0 <span className="num-of-rates">(5)</span></p>
              </div>
            </div>
            </Link>
          )):
          <p className='no-products-found'><span>No Products Found</span></p>
        }
      </div>

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

export default SearchedProducts;

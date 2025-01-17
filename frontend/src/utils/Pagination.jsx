import React from 'react';
import shopClasses from '../Components/ShopProducts/ShopProducts.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className={shopClasses.pagination}>
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Previous
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          className={i + 1 === currentPage ?  shopClasses.active : ''}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

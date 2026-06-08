import React from 'react';
import shopClasses from '../Components/ShopProducts/ShopProducts.module.css';
import getVisiblePages from './getVisiblePages';

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

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <div className={shopClasses.pagination}>
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Previous
      </button>

      {visiblePages.map((page, index) =>
        page === '...' ? (
          <span key={`ellipsis-${index}`} className={shopClasses.ellipsis}>
            ...
          </span>
        ) : (
          <button
            key={page}
            className={page === currentPage ? shopClasses.active : ''}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        )
      )}

      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

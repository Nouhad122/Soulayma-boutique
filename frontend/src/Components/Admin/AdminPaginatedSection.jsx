import React, { useEffect, useState } from 'react';
import usePagination from '../../use/usePagination';
import Pagination from '../../utils/Pagination';

const AdminPaginatedSection = ({ items, itemsPerPage = 10, resetKey, children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPages, currentProducts } = usePagination(items, itemsPerPage, currentPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [resetKey]);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="admin-content">
      <div className="admin-main">
        {children(currentProducts)}
      </div>

      {items.length > itemsPerPage && (
        <div className="admin-pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default AdminPaginatedSection;

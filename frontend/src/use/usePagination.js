import { useMemo } from 'react';

const usePagination = (filteredProducts, productsPerPage, currentPage) => {
  const totalPages = useMemo(() => Math.ceil(filteredProducts.length / productsPerPage), [
    filteredProducts.length,
    productsPerPage,
  ]);

  const startIndex = useMemo(() => (currentPage - 1) * productsPerPage, [
    currentPage,
    productsPerPage,
  ]);

  const currentProducts = useMemo(() => 
    filteredProducts.slice(startIndex, startIndex + productsPerPage), 
    [filteredProducts, startIndex, productsPerPage]
  );

  return { totalPages, currentProducts };
};

export default usePagination;
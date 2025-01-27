import { useMemo } from 'react';

const useFilteredProducts = (products, searchInput) => {
  const editedInput = useMemo(() => searchInput.replace(/\s+/g, "").toLowerCase(), [searchInput]);

  const filteredProducts = useMemo(() => {
    if (!editedInput) return products || [];
    return (products || []).filter((product) =>
      ['title', 'color', 'category', 'kind'].some(key => 
        product[key]?.replace(/\s+/g, "").toLowerCase().includes(editedInput)
      )
    );
  }, [products, editedInput]);

  return filteredProducts;
};

export default useFilteredProducts;
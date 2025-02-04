import { useMemo, useState, useEffect } from 'react';

const useFilteredProducts = (products, searchInput) => {
  const [debouncedInput, setDebouncedInput] = useState(searchInput);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(searchInput);
    }, 500);
 
    return () => clearTimeout(handler);
  }, [searchInput]);


  const editedInput = useMemo(() => 
    debouncedInput.replace(/\s+/g, "").toLowerCase(), 
    [debouncedInput]
  );

 
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

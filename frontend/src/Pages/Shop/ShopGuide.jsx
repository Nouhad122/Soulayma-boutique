import React, { useState, useContext } from 'react'
import { fetchProducts } from '../../use/useHttp'
import ChatBotContext from '../../store/ChatBotContext'
import usePagination from '../../use/usePagination';
import useScrollToTop from '../../use/useScrollToTop';
import Pagination from '../../utils/Pagination.jsx';
import ProductList from '../../Components/SearchProducts/ProductList.jsx';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../../Components/Secondary-Comps/LoadingPage.jsx';

const ShopGuide = () => {
    const { skinTone, ageRange } = useContext(ChatBotContext);
    const [productsPerPage] = useState(window.innerWidth > 1600 ? 25 : 24);
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: ({ signal }) => fetchProducts({ signal }),
        staleTime: 60000
    })
    
    const filteredProducts = data?.filter(product =>
        product.category === 'Hijabs' &&
        (Array.isArray(product.skinTone) ? product.skinTone.some(tone => skinTone?.includes(tone)) : true) &&
        (Array.isArray(product.ageRange) ? product.ageRange.some(range => ageRange?.includes(range)) : true)
    ) || [];    

    const { totalPages, currentProducts } = usePagination(filteredProducts, productsPerPage, currentPage);
    const sProducts = useScrollToTop([currentPage]);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    const generateUrl = (product) => `/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`;

    if (isPending) {
        return <LoadingPage />; 
    }
    
    if (isError) {
        return <p>Error: {error.message || 'Something went wrong!'}</p>
    }

  return (
    <div ref={sProducts}>
        <ProductList products={currentProducts} generateUrl={generateUrl} />

        {filteredProducts.length > productsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        )}
    </div>
  )
}

export default ShopGuide

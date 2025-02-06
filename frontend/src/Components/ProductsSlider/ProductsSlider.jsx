import React, { useRef } from 'react';
import ProductsCont from '../Products/ProductsCont.jsx';
import classes from '../Products/Products.module.css';
import { fetchProducts } from '../../use/useHttp.js'
import { useQuery } from '@tanstack/react-query'
import LoadingPage from '../../Components/Secondary-Comps/LoadingPage.jsx'

const ProductsSlider = ({ kind, sliderTitle, sliderSub}) => {
    const scrollRef = useRef();
    const generateUrl = (product) =>`/shop/product/${product.category}/${product.kind}/${product.id}`;

    const { data: sliderProducts, isPending, isError, error} = useQuery({
      queryKey: ['products'],
      queryFn: ({ signal }) => fetchProducts({ signal }),
      select: (data) => data.filter(product => product.kind === kind),
      staleTime: 60000
    })

    if(isPending){
      return <LoadingPage />;
    }

    if(isError){
      return <p>Error: {error.message || 'Something went wrong!'}</p>;
    }

  return(
    <div className={classes.productsContainer}>

        <ProductsCont 
          title={sliderTitle}
          subTitle={sliderSub}
          products={sliderProducts}
          generateUrl={generateUrl}
          scrollRef={scrollRef}
        />
        
    </div>
)
  
}

export default ProductsSlider

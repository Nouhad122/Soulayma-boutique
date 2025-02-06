import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './ProductColors.module.css';
import { fetchProducts } from '../../use/useHttp.js'
import { useQuery } from '@tanstack/react-query'
import LoadingPage from '../../Components/Secondary-Comps/LoadingPage.jsx'

const ProductColors = ({chosenProduct}) => {
  const { id, kind } = useParams();
  const navigate = useNavigate();

  const { data: kindProducts, isPending, isError, error} = useQuery({
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
    

  return (
    <>
        <div className={classes.productColor}>
            <p>Color: {chosenProduct.color}</p>
        </div>

        <div className={classes.otherColors}>
            {   
              kindProducts.map(product =>(
                <div onClick={() => navigate(`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`)}
                 key={product.id} className={`${classes.color} ${product.id === id ? `${classes.chosenColor}` : ''}`}
                  style={{backgroundColor: product.colorCode}}>
                </div>
              ))
            }
        </div>
    </>
  )
}

export default ProductColors

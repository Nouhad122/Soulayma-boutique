import React, { useContext } from 'react'
import Suggetions from '../../Components/ViewProduct/Suggetions.jsx';
import {useParams} from 'react-router-dom';
import FullImage from '../../Components/ViewProduct/FullImage.jsx';
import ProductImages from '../../Components/ViewProduct/ProductImages.jsx';
import ProductDetails from '../../Components/ViewProduct/ProductDetails.jsx';
import classes from '../../Components/ViewProduct/ProductContainer.module.css';
import { fetchProductDetails } from '../../use/useHttp.js';
import SideCompContext from '../../store/SideCompContext.jsx';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../../Components/Secondary-Comps/LoadingPage.jsx';

const Product = () => {
  const sideCompController = useContext(SideCompContext);

  const { id } = useParams();

  const { data: chosenProduct, isPending, isError, error} = useQuery({
    queryKey: ['products', id],
    queryFn: ({ signal }) => fetchProductDetails({ id, signal }),
    staleTime: 10000
  });

  if(isPending){
    return <LoadingPage />
  }
  if(isError){
    return <p>Error: {error.message || 'Something went wrong!'}</p>
  }

  return (
    <>
    {
    chosenProduct &&
    <div className='productPage'>
      <div className={classes.productContainer}>
          <ProductImages 
              chosenProduct={chosenProduct}
          />

          <ProductDetails 
              chosenProduct={chosenProduct}
          />
      </div>

      <Suggetions />

    {
      sideCompController.openedFullImg.isOpen &&(
      <FullImage
        chosenProduct = {chosenProduct}/>
      )
    }
  </div>
    }
    </>
  )
}

export default Product

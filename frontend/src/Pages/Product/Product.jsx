import React, { useContext } from 'react'
import Suggetions from '../../Components/ViewProduct/Suggetions.jsx';
import { useLoaderData } from 'react-router-dom';
import FullImage from '../../Components/ViewProduct/FullImage.jsx';
import ProductImages from '../../Components/ViewProduct/ProductImages.jsx';
import ProductDetails from '../../Components/ViewProduct/ProductDetails.jsx';
import classes from '../../Components/ViewProduct/ProductContainer.module.css';
import SideCompContext from '../../store/SideCompContext.jsx';

const Product = () => {
  const sideCompController = useContext(SideCompContext);

  const { productDetailsLoader: chosenProduct } = useLoaderData();

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

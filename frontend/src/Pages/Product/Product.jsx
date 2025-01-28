import React, { useContext } from 'react'
import Suggetions from '../../Components/ViewProduct/Suggetions.jsx';
import {useParams} from 'react-router-dom';
import FullImage from '../../Components/ViewProduct/FullImage.jsx';
import ProductImages from '../../Components/ViewProduct/ProductImages.jsx';
import ProductDetails from '../../Components/ViewProduct/ProductDetails.jsx';
import classes from '../../Components/ViewProduct/ProductContainer.module.css';
import useFetch from '../../use/useFetch.js';
import SideCompContext from '../../store/sideCompContext.jsx';

const requestConfig = {};

const Product = () => {
  const sideCompController = useContext(SideCompContext);

  const { id } = useParams();

  const { data } = useFetch(`http://localhost:5000/products?id=${id}`, requestConfig, []);
  const chosenProduct = data[0];
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

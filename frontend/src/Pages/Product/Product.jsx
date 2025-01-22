import React from 'react'
import Suggetions from '../../Components/ViewProduct/Suggetions.jsx';
import {useParams} from 'react-router-dom';
import FullImage from '../../Components/ViewProduct/FullImage.jsx';
import ProductImages from '../../Components/ViewProduct/ProductImages.jsx';
import ProductDetails from '../../Components/ViewProduct/ProductDetails.jsx';
import classes from '../../Components/ViewProduct/ProductContainer.module.css';
import useFetch from '../../use/useFetch.js';

const requestConfig = {};

const Product = ({openedFullImage, setOpenedFullImage}) => {

  const { category, id } = useParams();

  const { data: chosenProduct } = useFetch(`http://localhost:5000/products?id=${id}`, requestConfig, []);

  return (
    <>
    {
    chosenProduct[0] &&
    <div className='productPage'>
      <div className={classes.productContainer}>
          <ProductImages 
              chosenProduct={chosenProduct[0]}
              setOpenedFullImage={setOpenedFullImage}
          />

          <ProductDetails 
              chosenProduct={chosenProduct[0]}
          />
      </div>

      <Suggetions />

    {
      openedFullImage.isOpen &&(
      <FullImage openedFullImage={openedFullImage} setOpenedFullImage={setOpenedFullImage} chosenProduct = {chosenProduct[0]}/>
      )
    }
  </div>
    }
    </>
  )
}

export default Product

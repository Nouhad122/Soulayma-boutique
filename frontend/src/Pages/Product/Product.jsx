import React from 'react'
import Suggetions from '../../Components/ViewProduct/Suggetions.jsx';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import FullImage from '../../Components/ViewProduct/FullImage.jsx';
import ProductImages from '../../Components/ViewProduct/ProductImages.jsx';
import ProductDetails from '../../Components/ViewProduct/ProductDetails.jsx';
import classes from '../../Components/ViewProduct/ProductContainer.module.css';

const Product = ({openedFullImage, setOpenedFullImage}) => {

  const {category,id,kind} = useParams();

  const products = useSelector(state => state.products);

  const productId = Number(id);
  const chosenProduct = products.find(product => product.id === productId);

  return (
    <div className='productPage'>
      <div className={classes.productContainer}>
          <ProductImages 
              chosenProduct={chosenProduct}
              setOpenedFullImage={setOpenedFullImage}
          />

          <ProductDetails 
              chosenProduct={chosenProduct}
              products={products}
              kind={kind}
              id={id}
          />
      </div>

      <Suggetions category={category} products={products}/>

    {
      openedFullImage.isOpen &&(
      <FullImage openedFullImage={openedFullImage} setOpenedFullImage={setOpenedFullImage} chosenProduct = {chosenProduct}/>
      )
    }
  </div>
  )
}

export default Product

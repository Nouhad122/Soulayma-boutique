import React from 'react';
import classes from './Products.module.css';
import Title from './Title';
import Products from './Products';
import SliderSettings from '../ProductsSlider/SliderSettings';

const ProductsCont = ({title, subTitle, products, generateUrl, isSlider}) => {
  return (
    <>
      {title && subTitle && <Title title={title} subTitle={subTitle}/>}

      {isSlider ? 
        <SliderSettings>
          {products.map(product => (
            <div key={product.id}>
              <Products products={[product]} generateUrl={generateUrl} />
            </div>
          ))}
        </SliderSettings> 
       :
      <div className={classes.productsWrapper}>
        <Products products={products} generateUrl={generateUrl} />
      </div>
       }
    </>
  )
}

export default ProductsCont

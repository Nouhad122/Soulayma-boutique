import React from 'react';
import classes from './Products.module.css';
import Title from './Title';
import Products from './Products';
import Slider from '../ProductsSlider/slider.jsx';

const ProductsCont = ({title, subTitle, products, generateUrl, scrollRef}) => {
  const content = (
      <Products products={products} generateUrl={generateUrl} />
  );

  return (
    <>
      {title && subTitle && <Title title={title} subTitle={subTitle}/>}

      {scrollRef ?
      <div className={classes.productsSlider} ref={scrollRef}>
        <Slider scrollRef={scrollRef}>{content}</Slider>
      </div>  :
      <div className={classes.productsWrapper} ref={scrollRef}>
        {content}
      </div>
       
       }

    </>
  )
}

export default ProductsCont

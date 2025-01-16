import React from 'react';
import Products from '../Products/Products';

const Suggetions = ({category, products}) => {

    function getRandomIdsByCategory(products, category, count) {
        const filteredProducts = products.filter(product => product.category === category);
        const ids = filteredProducts.map(product => product.id);
        const shuffledIds = ids.sort(() => 0.5 - Math.random());
        return shuffledIds.slice(0, count);
      }

      const randomIds = getRandomIdsByCategory(products, category, 4);

    const filteredSuggs = products.filter(product => product.category === category && randomIds.includes(product.id)).slice(0,4);
    const generateUrl = (product) => `/shop/product/${product.category}/${product.kind}/${product.id}`;

  return (
    <Products 
      secondColor
      title="Products From"
      subTitle="The Same Category"
      products={filteredSuggs}
      generateUrl={generateUrl}
    />
  )
}

export default Suggetions

import React from 'react'
import CarouselSlider from '../../Components/CarouselSlider/CarouselSlider.jsx'
import ProductsSlider from '../../Components/ProductsSlider/ProductsSlider.jsx'
import AbayasGlance from '../../Components/AbayasGlance/AbayasGlance.jsx'
import HijabCategories from '../../Components/HijabCategories/HijabCategories.jsx'
import Benefits from '../../Components/Benifits/Benefits.jsx'
import BestSelling from '../../Components/BestSelling/BestSelling.jsx'
import SearchEnd from '../../Components/SearchEnd/SearchEnd.jsx'
import useFetch from '../../use/useFetch.js'

const requestConfig = {};

const Home = () => {

  const { data: speakPureProducts, error: speakPureError } = useFetch(
      'http://localhost:5000/products?kind=SpeakPure Set Satin Lined', requestConfig, []
  );
  const { data: instantJerseyProducts, error: instantJerseyError } = useFetch(
      'http://localhost:5000/products?kind=Instant Hijabs', requestConfig, []
  );

  return (
      <div className="homePage">
          <CarouselSlider />
          {speakPureError ? (
              <p>{speakPureError}</p>
          ) : (
              <ProductsSlider 
                products={speakPureProducts}
                sliderTitle="Featured Collection"
                sliderSub="SpeakPure X Soulayma"
               />
          )}
          <AbayasGlance />
          <HijabCategories />
          <Benefits />
          {instantJerseyError ? (
              <p>{instantJerseyError}</p>
          ) : (
              <ProductsSlider 
                products={instantJerseyProducts}
                sliderTitle="Exclusive Picks"
                sliderSub="Instant Hijabs"
              />
          )}
          <BestSelling />
          <SearchEnd />
      </div>
  );
};


export default Home

import React from 'react'
import CarouselSlider from '../../Components/CarouselSlider/CarouselSlider.jsx'
import ProductsSlider from '../../Components/ProductsSlider/ProductsSlider.jsx'
import AbayasGlance from '../../Components/AbayasGlance/AbayasGlance.jsx'
import HijabCategories from '../../Components/HijabCategories/HijabCategories.jsx'
import Benefits from '../../Components/Benifits/Benefits.jsx'
import BestSelling from '../../Components/BestSelling/BestSelling.jsx'
import SearchEnd from '../../Components/SearchEnd/SearchEnd.jsx'
import products from '../../Products/products.json'

const Home = () => {
  const speakPureProducts = products.filter(product => product.title === "SpeakPure Set Satin Lined" || product.title === "SpeakPure Set Mesh Tie-Back");
  const InstantJerseyProducts = products.filter(product => product.title === "Instant Premium Jersey Hijab");
  return (
    <div className='homePage'>
      <CarouselSlider/>
      <ProductsSlider products={speakPureProducts}/>
      <AbayasGlance/>
      <HijabCategories/>
      <Benefits/>
      <ProductsSlider products={InstantJerseyProducts}/>
      <BestSelling/>
      <SearchEnd/>
    </div>
  )
}

export default Home

import React from 'react'
import CarouselSlider from '../../Components/CarouselSlider/CarouselSlider.jsx'
import ProductsSlider from '../../Components/ProductsSlider/ProductsSlider.jsx'
import ProductsSlider2 from '../../Components/ProductsSlider/ProductsSlider2.jsx'
import AbayasGlance from '../../Components/AbayasGlance/AbayasGlance.jsx'
import HijabCategories from '../../Components/HijabCategories/HijabCategories.jsx'
import Benefits from '../../Components/Benifits/Benefits.jsx'
import BestSelling from '../../Components/BestSelling/BestSelling.jsx'
import SearchEnd from '../../Components/SearchEnd/SearchEnd.jsx'

const Home = () => {
  return (
    <div className='homePage'>
      <CarouselSlider/>
      <ProductsSlider/>
      <AbayasGlance/>
      <HijabCategories/>
      <Benefits/>
      <ProductsSlider2/>
      <BestSelling/>
      <SearchEnd/>
    </div>
  )
}

export default Home

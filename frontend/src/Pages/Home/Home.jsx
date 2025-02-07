import React, { Suspense } from 'react'
import CarouselSlider from '../../Components/CarouselSlider/CarouselSlider.jsx'
import AbayasGlance from '../../Components/AbayasGlance/AbayasGlance.jsx'
import HijabCategories from '../../Components/HijabCategories/HijabCategories.jsx'
import Benefits from '../../Components/Benifits/Benefits.jsx'
import BestSelling from '../../Components/BestSelling/BestSelling.jsx'
import SearchEnd from '../../Components/SearchEnd/SearchEnd.jsx'
import ProductsSlider from '../../Components/ProductsSlider/ProductsSlider.jsx'
import { useNavigation } from 'react-router-dom'
import LoadingPage from '../../Components/Secondary-Comps/LoadingPage.jsx'

const HomeContent = () => {
  const navigation = useNavigation();

  if(navigation.state === 'loading'){
    return <LoadingPage />;
  }

  return (
      <div className="homePage">
          <CarouselSlider />
          
          <ProductsSlider 
            kind= "SpeakPure Set Satin Lined"
            title="Featured Collection"
            subTitle="SpeakPure X Soulayma"    
          />
          
          <AbayasGlance />

          <HijabCategories />

          <Benefits />

          <ProductsSlider 
            kind= "Instant Hijabs"
            title="Exclusive Picks"
            subTitle="Instant Hijabs"    
          />
          
          <BestSelling />
          <SearchEnd />
      </div>
  );
};

const Home = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <HomeContent />
    </Suspense>
  );
};


export default Home


import React, { useEffect, useState } from 'react';
import './HijabCategories.css';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Secondary-Comps/Button';
import Title from '../Products/Title';

const HijabCategories = () => {

  const [categories] = useState([{
    categ_id: uuidv4(),
    categ_img: 'https://voile-chic-worldwide.myshopify.com/cdn/shop/products/ForestGreenPremiumChiffon2_23ae7b31-c1ad-4564-8db0-c2145713907f.jpg?v=1600551468',
    categ_title: "'NON-SLIP' CHIFFON HIJABS",
    categ_desc: "TEXTURED WITH A SLIGHT STRETCH & GREAT COVERAGE",
    categ_link: `/shop/Hijabs/Premium Chiffon Hijabs`
  },
  {
    categ_id: uuidv4(),
    categ_img: 'https://voilechic.ca/cdn/shop/products/IvoryPremiumJerseyFar_600x.png?v=1663911821',
    categ_title: "PREMIUM JERSEY HIJABS",
    categ_desc: "SOFT COMFORTABLE & VERSATILE, PERFECTED IN EVERY WAY",
    categ_link: `/shop/Hijabs/Premium Jersey Hijabs`
  },
  {
    categ_id: uuidv4(),
    categ_img: 'https://voilechic.ca/cdn/shop/products/SNLCH37_600x.jpg?v=1601959343',
    categ_title: "SMALL LUXURY CHIFFON HIJABS",
    categ_desc: "LIGHTWEIGHT, LONG LASTING AND DRAPES LIKE A DREAM",
    categ_link: `/shop/Hijabs/Small Luxury Chiffon Hijabs`
  }
]);
  
  useEffect(() => {
    const handleResize = () => {
      const images = document.querySelectorAll('.category-product img');
      images.forEach(img => {
        img.style.transition = 'none';
      });

      // Re-enable the transition after 500ms (or adjust this time)
      setTimeout(() => {
        images.forEach(img => {
          img.style.transition = 'transform 10s ease, filter 10s ease';
        });
      }, 500);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='hijab-categories'>
      <Title title="Look at our" subTitle="Most Popular Categories" />
      
      <div className="categories-container">
      {categories.map(category =>(
            <div className="category-product" key={category.categ_id}>
            <img className='to-zoom' src={category.categ_img} alt={category.categ_title}/>
            <p>{category.categ_desc}</p>
            <h1>{category.categ_title}</h1>
            <div className='categ-button-container'>
            <Button className="categ-btn" absoluteBtn url={category.categ_link}>Shop The Collection</Button>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
}

export default HijabCategories;

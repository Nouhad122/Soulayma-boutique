import React, { useEffect } from 'react'
import './HijabCategories.css'
import Button from '../Secondary-Comps/Button'
import Title from '../Products/Title'
import categories from '../../JSON/HijabCategories.json'

const HijabCategories = () => {
  
  useEffect(() => {
    const handleResize = () => {
      const images = document.querySelectorAll('.category-product img');
      images.forEach(img => {
        img.style.transition = 'none';
      });

      setTimeout(() => {
        images.forEach(img => {
          img.style.transition = 'transform 10s ease, filter 10s ease';
        });
      }, 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='hijab-categories'>
      <Title title="Look at our" subTitle="Most Popular Categories" />
      
      <div className="categories-container">
        {categories.map(category =>(
            <div className="category-product" key={category.id}>
                <img className='to-zoom' src={category.image} alt={category.categ_title}/>
                <p>{category.description}</p>
                <h1>{category.title}</h1>
                
                <div className='categ-button-container'>
                <Button className="categ-btn" absoluteBtn url={category.link}>Shop The Collection</Button>
                </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HijabCategories;

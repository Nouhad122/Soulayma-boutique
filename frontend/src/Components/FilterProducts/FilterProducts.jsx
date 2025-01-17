import React from 'react';
import './FilterProducts.css';
import { IoMdClose } from "react-icons/io";
import Button from '../Secondary-Comps/Button';

const FilterProducts = ({products, category, kind, page, openedFilter, setOpenedFilter, filterColor, setSearchParams}) => {
    const colorsForFilter = products.filter(product =>{
        const categoryMatch = product.category === category;
        const kindMatch = product.kind === kind;
         return page ? categoryMatch : product.category === 'Arm & Neck Covers' ||
          product.category === 'Luxury Bags' || product.category === 'Soulayma Accessories' ?
           categoryMatch : categoryMatch && kindMatch;
        })

    const filterProductsByColor = (prodColor)=>{
        filterColor = prodColor;
    }
    
  return (
    <div className='filter-products'>
        <div className= {`${openedFilter ? 'opened-filter-colors filter-colors' : 'filter-colors'}`}>
            <div className='filter-title'>
               <h1>Filter By Color</h1> 
               <IoMdClose onClick={() => setOpenedFilter(false)} className='filter-x-mark'/>
            </div>
            
            <div className='colors-in'>
            {
                colorsForFilter.map((product, index, array) =>(
                    array.findIndex(item => item.color === product.color) === index ?
                     <p onClick={() => {filterProductsByColor(product.color); setSearchParams({filter: product.color})}} className= {`${filterColor === product.color ? 'active-color': ''}`} key={product.id}>{product.color}</p> 
                     : null
                ))
            } 
            </div>
            
            <Button absoluteBtn={true} onClick={() => {setSearchParams({}); setOpenedFilter(false)}} className='reset-btn'>
                Reset
            </Button>
           
        </div>
        <Button onClick={() => setOpenedFilter(true)} className='filter-btn'>Filter</Button>
    </div>
  )
}

export default FilterProducts

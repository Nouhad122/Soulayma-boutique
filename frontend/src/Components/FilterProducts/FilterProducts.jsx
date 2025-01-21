import React from 'react';
import './FilterProducts.css';
import { IoMdClose } from "react-icons/io";
import Button from '../Secondary-Comps/Button';

const FilterProducts = ({products, filterColor, setColorParams, openedFilter, setOpenedFilter}) => {

    const handleSelectedColor = (color) =>{
        setColorParams({filter: color})
        filterColor = color;
    }

    const handleOpenFilter = () =>{
        setOpenedFilter(true);
    }

    const handleCloseFilter = () =>{
        setOpenedFilter(false);
    }

    const handleResetFilter = () =>{
        setColorParams({});
        setOpenedFilter(false);
    }
    
  return (
    <div className='filter-products'>
        <div className= {`${openedFilter ? 'opened-filter-colors filter-colors' : 'filter-colors'}`}>
            <div className='filter-title'>
               <h1>Filter By Color</h1> 
               <IoMdClose onClick={handleCloseFilter} className='filter-x-mark'/>
            </div>
            
            <div className='colors-in'>
            {
                products.map((product,index,array) =>(
                    array.findIndex(item => item.color === product.color) === index &&
                    <p key={product.id} onClick={() => handleSelectedColor(product.color)}>{product.color}</p>
                ))
            }
            </div>
            
            <Button absoluteBtn={true} onClick={handleResetFilter} className='reset-btn'>
                Reset
            </Button>
           
        </div>
        <Button onClick={handleOpenFilter} className='filter-btn'>Filter</Button>
    </div>
  )
}

export default FilterProducts

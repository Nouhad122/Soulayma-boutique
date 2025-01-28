import React, {useContext} from 'react';
import './FilterProducts.css';
import { IoMdClose } from "react-icons/io";
import Button from '../Secondary-Comps/Button';
import SideCompContext from '../../store/SideCompContext.jsx';
import Modal from '../Secondary-Comps/Modal.jsx';

const FilterProducts = ({products, filterColor, setColorParams}) => {
    const sideCompController = useContext(SideCompContext);

    const handleSelectedColor = (color) =>{
        setColorParams({filter: color})
        filterColor = color;
    }

    const handleResetFilter = () =>{
        setColorParams({});
        sideCompController.hideFilter();
    }
    
  return (
    <>
        {sideCompController.openedFilter && <Modal closeModal = {sideCompController.hideFilter} />}
        <div className='filter-products'>
            <div className= {`${sideCompController.openedFilter ? 'opened-filter-colors filter-colors' : 'filter-colors'}`}>
                <div className='filter-title'>
                <h1>Filter By Color</h1> 
                <IoMdClose onClick={sideCompController.hideFilter} className='filter-x-mark'/>
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
            <Button onClick={sideCompController.showFilter} className='filter-btn'>Filter</Button>
        </div>
    </>
    
  )
}

export default FilterProducts

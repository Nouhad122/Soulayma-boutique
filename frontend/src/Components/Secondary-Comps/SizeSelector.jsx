import React from 'react';
import classes from './SecondaryComp.module.css';

const SizeSelector = ({ sizes, selectedSize, onSizeSelect }) => {
  const availableSizes = sizes || ['XS', 'S', 'M', 'L', 'XL', 'One Size'];

  return (
    <div className={classes['size-selector-container']}>
      <label>Available Sizes</label>
      <div className={classes['size-options']}>
        {availableSizes.map((size) => (
          <button
            key={size}
            type="button"
            className={`${classes['size-option']} ${
              Array.isArray(selectedSize) && selectedSize.includes(size) ? classes['size-selected'] : ''
            }`}
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector; 
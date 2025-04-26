import React from 'react';
import classes from './SecondaryComp.module.css';

const Selector = ({ 
  items, 
  selectedItems, 
  onSelect, 
  label,
  isImage = false 
}) => {
  const availableItems = items || [];

  return (
    <div className={classes['size-selector-container']}>
      <label>{label}</label>
      <div className={classes['size-options']}>
        {availableItems.map((item) => (
          <button
            key={item.id || item}
            type="button"
            className={`${classes['size-option']} ${
              Array.isArray(selectedItems) && selectedItems.includes(item.id || item) ? classes['size-selected'] : ''
            }`}
            onClick={() => onSelect(item.id || item)}
          >
            {isImage ? (
              <>
                <img src={item.image} alt={item.label} />
                <span>{item.label}</span>
              </>
            ) : (
              item.label || item
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selector; 
import React from 'react';
import classes from './SecondaryComp.module.css';

const BestSeller = ({ checked, onChange }) => {
  return (
    <div className={classes['bestseller-container']}>
      <label className={classes['bestseller-label']}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={classes['bestseller-checkbox']}
        />
        Mark as Best Seller
      </label>
    </div>
  );
};

export default BestSeller; 
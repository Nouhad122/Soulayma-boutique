import React from 'react';
import classes from './SecondaryComp.module.css';
import fairSkin from '../../assets/skinTone1.png';
import lightTan from '../../assets/skinTone2.png';
import goldenTan from '../../assets/skinTone3.png';
import deepTan from '../../assets/skinTone4.png';
import richBrown from '../../assets/skinTone5.png';
import deepEbony from '../../assets/skinTone6.png';

const SkinToneSelector = ({ selectedTone, onToneSelect }) => {
  const skinTones = [
    { id: "fair_skin", image: fairSkin, label: "Fair" },
    { id: "light_tan", image: lightTan, label: "Light Tan" },
    { id: "golden_tan", image: goldenTan, label: "Golden Tan" },
    { id: "deep_tan", image: deepTan, label: "Deep Tan" },
    { id: "rich_brown", image: richBrown, label: "Rich Brown" },
    { id: "deep_ebony", image: deepEbony, label: "Deep Ebony" },
  ];

  return (
    <div className={classes['skin-tone-selector-container']}>
      <label>Available Skin Tones</label>
      <div className={classes['skin-tone-options']}>
        {skinTones.map((tone) => (
          <button
            key={tone.id}
            type="button"
            className={`${classes['skin-tone-option']} ${
              selectedTone === tone.id ? classes['skin-tone-selected'] : ''
            }`}
            onClick={() => onToneSelect(tone.id)}
          >
            <img src={tone.image} alt={`skin color ${tone.label}`} />
            <span>{tone.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkinToneSelector; 
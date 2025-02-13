import React from 'react'
import skinColor1 from '../../assets/skinColor1.png';
import classes from './ChoiceGuide.module.css';

const ChoiceGuide = () => {
  return (
    <div className={classes.choiceGuide}>
      <h2>Let Us Help You</h2>
      <h4>Please Choose Your Skin Tone Color:</h4>
      <ul className={classes.colorsList}>
        <li><img src={skinColor1} alt='skin color 1'/></li>
        <li><img src={skinColor1} alt='skin color 1'/></li>
        <li><img src={skinColor1} alt='skin color 1'/></li>
        <li><img src={skinColor1} alt='skin color 1'/></li>
        <li><img src={skinColor1} alt='skin color 1'/></li>
        <li><img src={skinColor1} alt='skin color 1'/></li>
      </ul>

    <h4>Please Choose Your Age Range:</h4>
    <div className={classes.ageRange}>
        <label>
            <input type="radio" name="ageRange" value="10-15" />
            10-15
        </label>
        <label>
            <input type="radio" name="ageRange" value="16-39" />
            16-39
        </label>
        <label>
            <input type="radio" name="ageRange" value="40+" />
            More than 40
        </label>
    </div>
    <p className={classes.buttonAction}>
        <button>Search For Products</button>
    </p>
    
    </div>
  )
}

export default ChoiceGuide

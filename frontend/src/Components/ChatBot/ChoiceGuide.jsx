import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import fairSkin from '../../assets/skinTone1.png';
import lightTan from '../../assets/skinTone2.png';
import goldenTan from '../../assets/skinTone3.png';
import deepTan from '../../assets/skinTone4.png';
import richBrown from '../../assets/skinTone5.png';
import deepEbony from '../../assets/skinTone6.png';
import classes from './ChoiceGuide.module.css';
import ChatBotContext from '../../store/ChatBotContext';

const ChoiceGuide = () => {
  const navigate = useNavigate();
  const { toggleChatbot } = useContext(ChatBotContext);
  const [selectedSkinTone, setSelectedSkinTone] = useState(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);

  const skinTones = [
    { id: "fair_skin", image: fairSkin, label: "Fair" },
    { id: "light_tan", image: lightTan, label: "Light Tan" },
    { id: "golden_tan", image: goldenTan, label: "Golden Tan" },
    { id: "deep_tan", image: deepTan, label: "Deep Tan" },
    { id: "rich_brown", image: richBrown, label: "Rich Brown" },
    { id: "deep_ebony", image: deepEbony, label: "Deep Ebony" },
  ];

  const handleFormSubmission = (event) =>{
    event.preventDefault();
    if(selectedSkinTone && selectedAgeRange){
      navigate(`shop/Hijabs?skinTone=${selectedSkinTone}`);
      console.log(selectedAgeRange, selectedSkinTone);
      toggleChatbot();
    }
  }

  const handleSkinToneSelection = (id) =>{
    setSelectedSkinTone(id);
  }

  const handleAgeRangeSelection = (event) =>{
    setSelectedAgeRange(event.target.value);
  }

  return (
    <form className={classes.choiceGuide} onSubmit={handleFormSubmission}>
      <h2>Let Us Help You</h2>
      <h4>Please Choose Your Skin Tone Color:</h4>
      <ul className={classes.colorsList}>
        {
          skinTones.map(tone =>(
            <li
             key={tone.id}
             onClick={() => handleSkinToneSelection(tone.id)}
             style={{border: selectedSkinTone === tone.id ? '4px solid var(--gold-color)' : 'none'}}
            >
              <img src={tone.image} alt={`skin color ${tone.label}`}/>
            </li>
          ))
        }
      </ul>

    <h4>Please Choose Your Age Range:</h4>
    <div className={classes.ageRange}>
        <label>
            <input type="radio" name="ageRange" value="12-18" onChange={handleAgeRangeSelection}/>
            12-18
        </label>
        <label>
            <input type="radio" name="ageRange" value=" 19-39" onChange={handleAgeRangeSelection}/>
            19-39
        </label>
        <label>
            <input type="radio" name="ageRange" value="40+" onChange={handleAgeRangeSelection}/>
            More than 40
        </label>
    </div>
    <p className={classes.buttonAction}>
        <button>Search For Products</button>
    </p>
    
    </form>
  )
}

export default ChoiceGuide

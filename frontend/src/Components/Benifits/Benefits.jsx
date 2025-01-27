import React, { useState } from 'react';
import './Benefits.css';
import { FaHeartCircleCheck, FaMedal, FaUserGroup, FaHandHoldingDollar } from "react-icons/fa6";
import benefits from '../../JSON/Benefits.json';

const Benefits = () => {
  const icons = {
    FaHeartCircleCheck: <FaHeartCircleCheck />,
    FaMedal: <FaMedal />,
    FaUserGroup: <FaUserGroup />,
    FaHandHoldingDollar: <FaHandHoldingDollar />
  };

  return (
    <div className='benefits-container'>
        <div className='benefits-cards'>
          {benefits.map(benefit =>(
          <div className='b-card' key={benefit.id}>
            {icons[benefit.icon]}
            <h1>{benefit.title}</h1>
            <p>{benefit.description}</p>
          </div>
        ))}
        </div>
      
    </div>
  )
}

export default Benefits

import React from 'react';
import classes from './Benefits.module.css'
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
    <div className={classes['benefits-container']}>
        <div className={classes['benefits-cards']}>
          {benefits.map(benefit =>(
          <div className={classes['b-card']} key={benefit.id}>
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

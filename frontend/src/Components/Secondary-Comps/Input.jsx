import React, { useEffect, useReducer, useState } from 'react'
import classes from './Input.module.css'
import { validate } from '../../utils/validators'
import { MdEmail } from 'react-icons/md'
import { FaUser, FaLock } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const inputReducer = (state, action) =>{
  switch(action.type){
    case 'TOUCH':
      return{
        ...state,
        isTouched: true
      }
    default:
      return state;
  }
}

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  // Only keep isTouched and isValid in reducer
  const [inputState, dispatch] = useReducer(inputReducer,
    {
      isTouched: false,
      isValid: props.initialValid || false
    }
  );

  const { id, onInput } = props;
  // Coerce value to string for validation
  const value = (props.value !== undefined && props.value !== null) ? String(props.value) : '';
  const isValid = validate(value, props.validators);

  useEffect(() =>{
    if(onInput){
      onInput(id, value, isValid);
    }
    // eslint-disable-next-line
  },[id, value, isValid]);

  const changeHandler = (event) =>{
    const newValue = event.target.value;
    const newIsValid = validate(newValue, props.validators);
    if (onInput) {
      onInput(id, newValue, newIsValid);
    }
  }

  const touchHandler = () =>{
    dispatch({
      type: 'TOUCH',
    })
  }

  const getIcon = () => {
    switch(props.id) {
      case 'email':
        return <MdEmail className={classes.icon} />;
      case 'password':
        return <FaLock className={classes.icon} />;
      case 'firstName':
      case 'lastName':
        return <FaUser className={classes.icon} />;
      default:
        return null;
    }
  }

  const element = props.isTextArea ? 
  <div className={classes.inputWrapper}>
    <textarea
     id={props.id}
     name={props.name} 
     rows={props.rows || 3} 
     onChange={changeHandler}
     onBlur={touchHandler}
     value={value}
     placeholder={props.placeholder}
     className={props.className}
    />
  </div>
     :
    <div className={classes.inputWrapper}>
      {getIcon()}
      <input
       id={props.id} 
       name={props.name}
       type={props.type === 'password' ? (showPassword ? 'text' : 'password') : props.type}
       onChange={changeHandler}
       onBlur={touchHandler} 
       value={value}
       placeholder={props.placeholder}
       className={props.className}
      />
      {props.type === 'password' && (
        <button 
          type="button"
          className={classes.passwordToggle}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 
            <AiOutlineEyeInvisible className={classes.icon} /> : 
            <AiOutlineEye className={classes.icon} />
          }
        </button>
      )}
    </div>

  return (
    <div className={`${classes['form-control']} ${!isValid && inputState.isTouched && classes['form-control__invalid']}`}>
      { element }
      { !isValid && inputState.isTouched &&
       <p className={classes['form-control__error-text']}>
        {props.errorText}
       </p>
      }
    </div>
  )
}

export default Input

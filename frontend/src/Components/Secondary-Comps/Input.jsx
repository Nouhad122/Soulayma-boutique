import React, { useEffect, useReducer, useState } from 'react'
import classes from './Input.module.css'
import { validate } from '../../utils/validators'
import { MdEmail } from 'react-icons/md'
import { FaUser, FaLock } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const inputReducer = (state, action) =>{
  switch(action.type){
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      }

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

  const [inputState, dispatch] = useReducer(inputReducer,
    {
      value: props.initialValue || '', 
      isValid: props.initialValid || false, 
      isTouched: false
    }
  );

  const { id, onInput } = props;
  const { value, isValid } = inputState;
  
  useEffect(() =>{
    onInput(id, value, isValid);
  },[id, onInput, value, isValid]);

  const changeHandler = (event) =>{
    dispatch({ 
      type: 'CHANGE',
      val: event.target.value, 
      validators: props.validators 
    });
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
     value={inputState.value}
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
       value={inputState.value}
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
    <div className={`${classes['form-control']} ${!inputState.isValid && inputState.isTouched && classes['form-control__invalid']}`}>
      { element }
      { !inputState.isValid && inputState.isTouched &&
       <p className={classes['form-control__error-text']}>
        {props.errorText}
       </p>
      }
    </div>
  )
}

export default Input

import React, { useState, useContext } from 'react'
import Input from '../../Components/Secondary-Comps/Input'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utils/validators'
import useForm from '../../use/useForm'
import classes from './Auth.module.css'
import AuthContext from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false);

  const switchModeHandler = () => {
    if(!isLoginMode){
        setFormData({
            ...formState.inputs,
            firstName: undefined,
            lastName: undefined
        }, formState.inputs.email.isValid && formState.inputs.password.isValid
        )
    }
    else{
        setFormData({
            ...formState.inputs,
            firstName: {value: '', isValid: false},
            lastName: {value: '', isValid: false}
        }, formState.inputs.email.isValid && formState.inputs.password.isValid
        )
    }
    setIsLoginMode((prevMode) => !prevMode);
  }

  const authSubmitHandler = (event) => {
    event.preventDefault();
    login();
    navigate('/');
    console.log(formState.inputs);
  }

  return (
    <div className={classes['auth-container']}>
        <div className={classes['form-container']}>
        <img 
            src={isLoginMode ? "https://voilechic.com/cdn/shop/files/20231230-5.png?v=1737480786&width=990" :
            "https://voilechic.com/cdn/shop/files/MOCHABROWN3_4e6fa733-cd0f-4028-b23d-d73d7842ffe3.jpg?v=1723308626&width=990"} 
            alt={isLoginMode ? "Sign In" : "Sign Up"} 
            className={classes['auth-image']}
        />
        <div className={classes['auth-form']}>
            <h2 className={classes['auth-title']}>{isLoginMode ? 'Sign In' : 'Sign Up'}</h2>
            <form onSubmit={authSubmitHandler}>
            {!isLoginMode && (
                <Input
                id="firstName"
                name="firstName"
                type="text"  
                placeholder="First Name"
                validators={[VALIDATOR_MINLENGTH(1)]}
                errorText="Please enter a valid name."
                onInput={inputHandler}
                />
            )}
            {!isLoginMode && (
                <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                validators={[VALIDATOR_MINLENGTH(1)]}
                errorText="Please enter a valid name."
                onInput={inputHandler}
                />
            )}

            <Input
            id="email"
            name="email"
            type="email" 
            placeholder="Email Address"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
            />

            <Input
            id="password"
            name="password"
            type="password" 
            placeholder="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Password must be at least 6 characters."
            onInput={inputHandler}
            />
            
            <button
            type="submit" 
            className={classes['auth-button']} 
            disabled={!formState.isValid}
            >
                {isLoginMode ? 'Sign In' : 'Sign Up'}
            </button>

            <div className={classes['switch-mode-container']}>
                <p>
                    {isLoginMode ? 'Don\'t have an account?' : 'Already have an account?'}
                    <button
                    type="button" 
                    className={classes['switch-mode-button']} 
                    onClick={switchModeHandler}>
                    {isLoginMode ? 'Sign Up' : 'Sign In'}
                    </button>
                </p>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Auth

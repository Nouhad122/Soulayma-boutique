import React, { useRef } from "react";
import AuthForm from "./AuthForm.jsx";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";

const SignIn = ({handleFocus}) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const inputs = [
    {
      id: "email",
      type: "email",
      placeholder: "Email Address",
      validation: {
        required: { value: true, message: "Email is required*" },
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Invalid email",
        },
      },
      icon: <FaRegEnvelope onClick={() => handleFocus(emailRef)} />,
      refObj: emailRef,
    },
    {
      id: "password",
      type: "password",
      placeholder: "Password",
      validation: {
        required: { value: true, message: "Password is required*" },
      },
      icon: <IoLockClosedOutline onClick={() => handleFocus(passwordRef)} />,
      refObj: passwordRef,
    },
  ];

  const handleSignIn = (data) => {
    console.log(data);
  };

  return (
    <AuthForm
      title="Sign In"
      inputs={inputs}
      onSubmit={handleSignIn}
      switchText="Don't have an account?"
      switchLink="/sign-up"
    />
  );
};

export default SignIn;

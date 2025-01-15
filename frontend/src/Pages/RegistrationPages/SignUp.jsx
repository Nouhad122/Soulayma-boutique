import React, { useRef } from "react";
import AuthForm from "./AuthForm.jsx";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";

const SignUp = ({handleFocus}) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const inputs = [
    {
      id: "firstName",
      type: "text",
      placeholder: "First Name",
      validation: {
        required: { value: true, message: "First Name is required*" },
        pattern: { value: /^[a-zA-Z]+$/, message: "Invalid First Name" },
        validate: {
          longFirstName: (fieldValue) => fieldValue.length < 12 || "First Name is too long",
          shortFirstName: (fieldValue) => fieldValue.length > 2 || "First Name is too short",
        },
      },
      icon: <FaRegUser onClick={() => handleFocus(firstNameRef)} />,
      refObj: firstNameRef,
    },
    {
      id: "lastName",
      type: "text",
      placeholder: "Last Name",
      validation: {
        required: { value: true, message: "Last Name is required*" },
        pattern: { value: /^[a-zA-Z]+$/, message: "Invalid Last Name" },
        validate: {
          longLastName: (fieldValue) => fieldValue.length < 12 || "Last Name is too long",
          shortLastName: (fieldValue) => fieldValue.length > 2 || "Last Name is too short",
        },
      },
      icon: <FaRegUser onClick={() => handleFocus(lastNameRef)} />,
      refObj: lastNameRef,
    },
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
        validate: {
          longPassword: (fieldValue) => fieldValue.length < 30 || "Password is too long",
          shortPassword: (fieldValue) => fieldValue.length > 4 || "Password is too short",
        },
      },
      icon: <IoLockClosedOutline onClick={() => handleFocus(passwordRef)} />,
      refObj: passwordRef,
    },
  ];

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <AuthForm
      title="Sign Up"
      inputs={inputs}
      onSubmit={handleSignUp}
      switchText="Already have an account?"
      switchLink="/sign-in"
    />
  );
};

export default SignUp;

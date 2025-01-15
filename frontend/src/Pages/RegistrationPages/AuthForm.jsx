import React, { useState } from "react";
import "./Registration.css";
import { FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";

const AuthForm = ({ title, inputs, onSubmit, switchText, switchLink }) => {
  const form = useForm();
  const { register, handleSubmit, formState: { errors } } = form;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-container">
      <div className="login-signup-form">
        <img
          src={
            title === "Sign In"
              ? "https://voilechic.com/cdn/shop/files/20231230-28.png?v=1713439786"
              : "https://voilechic.com/cdn/shop/products/NLCH44-1DustyRose_1.jpg?v=1604976868"
          }
          alt={`${title}-img`}
        />
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <h1>{title}</h1>
          <div className="input-fields">
            {inputs.map(({ id, type, placeholder, validation, icon, refObj }, index) => (
              <div key={index} className="one-input-wrapper">
                <div className="input-container">
                  <input
                    id={id}
                    className={id}
                    type={type === "password" && showPassword ? "text" : type}
                    placeholder={placeholder}
                    {...register(id, validation)}
                    ref={refObj}
                  />
                  <div className="form-icons">
                    {type === "password" && (
                      <FaRegEye onClick={() => setShowPassword(prevPassword => !prevPassword)} />
                    )}
                    {icon}
                  </div>
                </div>
                <p className="error-message">{errors[id]?.message}</p>
              </div>
            ))}
          </div>
          <p className="switch-mode">
            {switchText} <a href={switchLink} className="form-link">{title === "Sign In" ? "Sign Up" : "Sign In"}</a>
          </p>
          <button className="custom-btn btn-15 regist-btn">{title}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

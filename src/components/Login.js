import React, { useState, useRef } from "react";
import Header from "./Header";
import {validateFormData} from "../utils/validate"


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const errorMessage = validateFormData(email.current.value, password.current.value, name.current.value);
    setErrorMessage(errorMessage);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/9de4bb46-e40e-4fa7-9463-60ca680d9d27/SG-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg"
          alt="banner"
        />
      </div>
      <form onSubmit={(e)=> e.preventDefault()}  className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In": "Sing Up"}</h1>
        {!isSignInForm && (
          <input ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input ref={email}
          type="text" 
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input ref={password}
          type="password"
          className="p-4 my-4 w-full bg-gray-600"
          placeholder="password"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In": "Sing Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm} >{isSignInForm ? "New to Netflix? SingUp Now" : "Already registered? Sign In Now."  }</p>
      </form>
    </div>
  );
};

export default Login;

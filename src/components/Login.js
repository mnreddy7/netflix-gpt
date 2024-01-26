import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/9de4bb46-e40e-4fa7-9463-60ca680d9d27/SG-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg"
          alt="banner"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In": "Sing Up"}</h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          type="password"
          className="p-4 my-4 w-full bg-gray-600"
          placeholder="password"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg" onClick={toggleSignInForm}>
        {isSignInForm ? "Sign In": "Sing Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm} >{isSignInForm ? "New to Netflix? SingUp Now" : "Already registered? Sign In Now."  }</p>
      </form>
    </div>
  );
};

export default Login;

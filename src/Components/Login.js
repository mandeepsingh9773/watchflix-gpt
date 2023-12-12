import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMeassage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMeassage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/92371379?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMeassage(error.message);
            });
          console.log(user);
          // navigate("/browse");

         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMeassage(errorCode + "-" + errorMessage);
         
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMeassage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgphoto"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg "
        />
        <p className="text-red-500 font-bold pt-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now."
            : "Already registered ? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

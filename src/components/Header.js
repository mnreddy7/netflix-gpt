import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.log("singout error =", error);
        //todo
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe()
  }, []);

  const handleGptSearchClick = () => {
     dispatch(toggleGptSearchView())
  }

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-60"
        src= {LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <button className="py-2 px-4 mx-2 my-0 h-12 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}>GPT Search</button>
          <img className="w-12 h-12 rounded-lg" src={user?.photoURL} alt="usericon" />
          <button
            className="bg-red-600 text-white font-bold rounded-lg w-24 h-12"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const handleMenu = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="flex">
      <div className="flex-1 m-2 ">
        <h1 className="text-white text-4xl font-impact ml-3 p-5">DHENT</h1>
      </div>
      <div className="p-6 m-3">
        <nav>
          <Link className="font-extrabold text-lg  btn-grad bg-gradient-to-r from-gray-300  to-gray-500 hover:from-gray-700 hover:to-gray-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 py-3 px-5 uppercase  rounded-xl shadow-md">
            {isSignIn ? (
              <button onClick={handleMenu}>SIGN IN</button>
            ) : (
              <button onClick={handleMenu}>SIGN OUT</button>
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;

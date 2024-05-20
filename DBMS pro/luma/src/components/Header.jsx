import React, { useState } from "react";
const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const handleMenu = () => {
    setIsSignIn(!isSignIn);
  };
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex">
      <div className="flex-1 m-2 ">
        <h1 className="text-white text-4xl font-impact ml-3 p-5">DHENT</h1>
      </div>
      <div className="p-6 m-3">
        {/* <nav>
          <Link className="font-extrabold text-lg  btn-grad bg-gradient-to-r from-gray-300  to-gray-500 hover:from-gray-700 hover:to-gray-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 py-3 px-5 uppercase  rounded-xl shadow-md">
            {isSignIn ? (
              <button onClick={handleMenu}>SIGN IN</button>
            ) : (
              <button onClick={handleMenu}>SIGN OUT</button>
            )}
          </Link>
        </nav> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white text-3xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {menu && (
        <div className="absolute top-16 right-10  border-2 mt-6 p-4  rounded-lg shadow-lg">
          <ul className="">
            <li className="p-4 main">
              <a href="/" className="text-white ">
                Home
              </a>
            </li>
            <li className="p-4 main">
              <a href="/Create" className="text-white">
                Create Event
              </a>
            </li>
            <li className="p-4 main">
              <a href="/Explore" className="text-white">
                Explore Event
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

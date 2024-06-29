import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  // const [login, setLogin] = useState("Login");
  // let username = sessionStorage.getItem("userid");
  // let obj = JSON.parse(sessionStorage.getItem("userinfo"));

  // let username = obj.email;

  let obj = {};
  let username = "";

  if (sessionStorage.getItem("userinfo") === null) {
    console.log("no session storeage");
  } else {
    obj = JSON.parse(sessionStorage.getItem("userinfo"));
    // username = obj.email;
    console.log(obj);
  }

  // const handleClick = () => {
  //   setNavbar(!navbar);
  // };

  return (
    <div className="flex text-sm justify-between w-full py-3">
      <h2 className="text-2xl font-semibold text-blue-500">
        REACT<span className="text-red-500">BLOG</span>
      </h2>

      {/* Navigation Bar */}
      <div className="">
        <ul className="flex space-x-1">
          <li className="cursor-pointer py-1 hover:bg-blue-500 hover:text-white duration-300 text-slate-600 rounded px-5">
            <Link to={"/signup"}>Signup</Link>
          </li>

          <li className="cursor-pointer py-1 hover:bg-slate-800 bg-slate-900 rounded px-5 text-white">
            {username == "" ? (
              <Link to={"/login"}>Login</Link>
            ) : (
              <Link to={"/logout"}>Logout</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

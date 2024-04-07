import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Movies",
    path: "/",
  },
  {
    title: "Categories",
    path: "/",
  },
  {
    title: "Register",
    path: "/",
  },
];

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center px-5 py-5 w-full justify-between fixed z-50 h-24 text-movieClub-white font-montserrat-regular bg-movieClub-bg-primary/30 backdrop-blur-md ">
      <p className="text-xl font-montserrat-semi-bold">Movie Club</p>
      <div className="flex gap-10">
        {navLinks.map((link) => (
          <button onClick={() => navigate(link.path)} key={link.title}>
            {link.title}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-5 text-xl cursor-pointer">
        <IoMdNotifications />
        <RiSearchFill />
        <FaUser />
      </div>
    </div>
  );
}

export default NavBar;

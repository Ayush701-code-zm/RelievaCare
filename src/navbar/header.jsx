import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RelivaIcon from "../assets/reliva.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRefs = useRef({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const getActiveClass = (path) => {
    return location.pathname === path ? "bg-[#81bcf940]" : "";
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#cfcfcf4c] backdrop-blur-md transition-all duration-300 px-0 w-full">
      <div className="flex flex-row items-center justify-between w-full h-[120px] py-[1.375rem] px-[5%]">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={RelivaIcon}
              alt="Reliva Logo"
              style={{
                height: "70px",
                width: "auto",
                backgroundColor: "transparent",
              }}
            />
            <span className="text-2xl font-semibold px-6 pl-2">RELIVA</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate("/platform")}
            className={`text-lg font-normal text-grey-15 px-6 py-2 cursor-pointer flex items-center transition duration-300 ease-in-out ${getActiveClass(
              "/platform"
            )}`}
          >
            About
          </div>
          <div
            onClick={() => navigate("/aidna")}
            className={`text-lg font-normal text-grey-15 px-6 py-2 cursor-pointer flex items-center transition duration-300 ease-in-out ${getActiveClass(
              "/aidna"
            )}`}
          >
            Services
          </div>
          <div
            onClick={() => navigate("/kepela")}
            className={`text-lg font-normal text-grey-15 px-6 py-2 cursor-pointer flex items-center transition duration-300 ease-in-out ${getActiveClass(
              "/kepela"
            )}`}
          >
            Therapists
          </div>
          <div
            onClick={() => navigate("/sephai")}
            className={`text-lg font-normal text-grey-15 px-6 py-2 cursor-pointer flex items-center transition duration-300 ease-in-out ${getActiveClass(
              "/sephai"
            )}`}
          >
            Blog
          </div>
          <div
            onClick={() => navigate("/solutions")}
            className={`text-lg font-normal text-grey-15 px-6 py-2 cursor-pointer flex items-center transition duration-300 ease-in-out ${getActiveClass(
              "/solutions"
            )}`}
          >
            Contact
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => navigate("/preregister")}
            className={`text-lg font-normal text-grey-15 px-6 py-2 cursor-pointer flex items-center transition duration-300 ease-in-out ${getActiveClass(
              "/preregister"
            )}`}
          >
            Register
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

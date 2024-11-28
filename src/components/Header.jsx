import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownTimer; // Timer to close the dropdown after 10 seconds

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);

    if (!isDropdownOpen) {
      clearTimeout(dropdownTimer);
      dropdownTimer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 3000); 
    }
  };

  useEffect(() => {
    return () => clearTimeout(dropdownTimer);
  }, []);

  return (
    <>
      <nav className="bg-white border-b border-[#E6E3D2]">
        <div className="w-[95%] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/ivf-pulse-logo.svg"
              alt="IVF Pulse Logo"
              className="h-8"
            />
          </div>
          <div className="hidden lg:flex space-x-6 items-center">
            <Link
              to="/donor-programme"
              className="text-base lg:text-lg hover:underline ml-4"
            >
              Donor Programme
            </Link>
            <Link
              to="/fertility-preservation"
              className="text-base lg:text-lg hover:underline ml-4"
            >
              Fertility Preservation
            </Link>
            <Link
              to="/advanced-treatments"
              className="text-base lg:text-lg hover:underline ml-4"
            >
              Advanced Treatments
            </Link>
            <Link
              to="/infertility-treatments"
              className="text-base lg:text-lg hover:underline ml-4"
            >
              Infertility Treatments
            </Link>
            {/* IVF Testing with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-base lg:text-lg hover:underline ml-4 flex items-center"
              >
                IVF Testing
                <span className="ml-1">&#9662;</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-[#E6E3D2] shadow-lg z-10">
                  <Link
                    to="/ivf-success-rate-calculator"
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)} // Close on click
                  >
                    IVF Success Rate Calculator
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/about-us"
              className="text-base lg:text-lg hover:underline ml-4"
            >
              About Us
            </Link>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600">
              Talk to Us
            </button>
          </div>
          {/* Hamburger Button */}
          <button
            className="block lg:hidden p-2 focus:outline-none"
            onClick={toggleDrawer}
          >
            <img
              src="/hamburger.png"
              alt="hamburger"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-0 bg-white z-50 shadow-lg lg:hidden">
          <div className="flex flex-col items-center py-4 max-h-screen overflow-auto">
            <Link
              to="/donor-programme"
              className="text-base lg:text-lg py-2 hover:underline mb-4"
              onClick={toggleDrawer}
            >
              Donor Programme
            </Link>
            <Link
              to="/fertility-preservation"
              className="text-base lg:text-lg py-2 hover:underline mb-4"
              onClick={toggleDrawer}
            >
              Fertility Preservation
            </Link>
            <Link
              to="/advanced-treatments"
              className="text-base lg:text-lg py-2 hover:underline mb-4"
              onClick={toggleDrawer}
            >
              Advanced Treatments
            </Link>
            <Link
              to="/infertility-treatments"
              className="text-base lg:text-lg py-2 hover:underline mb-4"
              onClick={toggleDrawer}
            >
              Infertility Treatments
            </Link>
            {/* Mobile Dropdown for IVF Testing */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-base lg:text-lg py-2 hover:underline mb-4 flex items-center"
              >
                IVF Testing
                <span className="ml-1">&#9662;</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-[#E6E3D2] shadow-lg z-10">
                  <Link
                    to="/ivf-success-rate-calculator"
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                    onClick={toggleDrawer}
                  >
                    IVF Success Rate Calculator
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/about-us"
              className="text-base lg:text-lg py-2 hover:underline mb-4"
              onClick={toggleDrawer}
            >
              About Us
            </Link>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 mt-4"
              onClick={toggleDrawer}
            >
              Talk to Us
            </button>
            <button onClick={toggleDrawer} className="mt-4 text-gray-500">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

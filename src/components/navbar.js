import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#E6E3D2]">
      <div className="flex justify-between items-center py-4 px-6">

        <p className="text-[#1E231E] font-bold text-xl">ABHYANJANA</p>


        <div className="hidden md:flex space-x-6 items-center">
          <p className="text-[#1E231E] font-semibold cursor-pointer">About Us</p>
          <p className="text-[#1E231E] font-semibold cursor-pointer">Products</p>
          <p className="text-[#1E231E] font-semibold cursor-pointer">Blogs</p>
          <p className="text-[#1E231E] font-semibold cursor-pointer hover:underline">
            Contact Us
          </p>
        </div>


        <button
          className="md:hidden text-[#1E231E] font-semibold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>


      {isMenuOpen && (
        <div className="flex flex-col items-start space-y-4 px-6 py-4 md:hidden">
          <p className="text-[#1E231E] font-semibold cursor-pointer">About Us</p>
          <p className="text-[#1E231E] font-semibold cursor-pointer">Products</p>
          <p className="text-[#1E231E] font-semibold cursor-pointer">Blogs</p>
          <p className="text-[#1E231E] font-semibold cursor-pointer">Contact Us</p>
          <button className="bg-[#D75555] font-semibold px-4 py-2 rounded text-white">
            Talk to Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:px-5">
      <div className="flex items-center justify-between px-5 py-3">
        <div>
          <img className="h-10" src="crm.png" alt="crm-logo" />
        </div>
        <div className="sm:hidden">
          <button type="button" onClick={handleClick} className="text-gray-500 hover:text-white focus:text-white focus:outline-none block">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              {isOpen && <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>}
              {!isOpen && <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
            </svg>
          </button>
        </div>
      </div>
      <div className={`px-3 pt-2 pb-4 sm:flex sm:items-center ${isOpen ? "block": "hidden"}`}>
        <a href="#" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Login</a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-3">Home</a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-3">Logout</a>
      </div>
    </header>
  );
}

export default Navbar;
import React from "react";

function Header({ openModal }) {
  return (
    <header className="bg-teal-800 p-6 mb-5">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl text-white font-bold">
          Personal Diary
        </a>
        <div>
          <button
            onClick={openModal} data-modal-target="default-modal" data-modal-toggle="default-modal"
            className="mt-4 bg-white text-teal-800 px-4 py-2 rounded hover:text-white hover:bg-teal-600 transition all ease-in duration-300 cursor-pointer "
          >
            Add New Entry
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";

const ModalCard = (props) => {
  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden fixed bg-gray-700/70 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-20 w-full max-w-2xl max-h-full mt-[5%] mx-[30%]">
        {/* modal content */}
        <div className="relative bg-white rounded-lg shadow-sm">
          {/* modal header */}
          <div className="flex items-center bg-teal-800 justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h2 className="text-[#57C3AD] text-lg font-bold tracking-wider">
            {props.card.title}
            </h2>
          </div>
          {/* modal body */}
          <div className="flex flex-col justify-center items-center m-3 space-x-8 p-3">
            <img
              className="object-cover w-sm rounded-t-lg"
              src={props.card.img}
              alt={props.card.title}
            />
            <p className="m-4">{props.card.entry}</p>
          </div>
          {/* Modal footer */}
          <div className="flex items-center mt-4 space-x-4 rtl:space-x-reverse">
            <button
              onClick={props.onClose}
              type="button"
              className="m-2 py-2.5 px-5 text-sm font-medium text-white tracking-wide bg-teal-800 hover:bg-[#229389] shadow-md  focus:outline-none  rounded-lg border border-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ModalCard;

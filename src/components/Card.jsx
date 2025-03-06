import React from "react";
import { FaTrash } from "react-icons/fa";

const Card = (props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={props.index * 200}
      className="w-70 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
    >
      <img
        src={props.entry.img}
        alt={props.entry.title}
        className="h-40 object-cover rounded-xl w-full"
      />
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg uppercase mt-2 mb-1">
          {props.entry.title}
        </h3>
        <p className="text-sm text-gray-600">{props.entry.date}</p>
      </div>
      <p className="text-sm text-gray-600">{props.entry.entry}</p>

      <div className="flex justify-between items-center mt-2">
        <button
          onClick={props.toggleModal}
          className="bg-teal-600 text-white px-3 py-1 rounded-md hover:bg-teal-700 cursor-pointer"
        >
          Read More...
        </button>
        <button
          onClick={() => props.removeEntry(props.entry.id)}
          className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700  cursor-pointer"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;

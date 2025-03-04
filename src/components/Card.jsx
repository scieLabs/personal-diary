import React from "react";

const Card = (props) => {
  return (
    <>
      <div>
        <img src={props.entry.img} alt={props.entry.title} className="w-80" />
        <h3>{props.entry.title}</h3>
        <p>{props.entry.date}</p>
        <p>{props.entry.entry}</p>
        {/*}
            <button onClick={() => openModal(entry)} className="bg-blue-50">
                Open Modal
            </button>
            */}
        <button onClick={props.toggleModal} className="bg-blue-50">
          Read More...
        </button>
      </div>
    </>
  );
};

export default Card;

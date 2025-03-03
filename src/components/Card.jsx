import { useState, useEffect } from "react";
import Header from "./Header";

function Card() {
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem("diaryentries")) || [];
    const sortedEntries = storedEntries.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    setEntries(sortedEntries);
  }, []);

  const openModal = (entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div>
      <Header openModal={openModal} />
      <div className="grid grid-cols-5 container m-auto gap-10">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <div key={entry.id}>
              <img src={entry.image} alt={entry.title} className="w-80" />
              <h3>{entry.title}</h3>
              <p>{entry.date}</p>
              <p>{entry.content}</p>
              <button onClick={() => openModal(entry)} className="bg-blue-50">
                Open Modal
              </button>
            </div>
          ))
        ) : (
          <p>No notes</p>
        )}
      </div>
    </div>
  );
}

export default Card;

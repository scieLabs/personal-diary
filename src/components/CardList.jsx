import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import AddEntry from "./AddEntry";
import ModalCard from "./ModalCard";
import Card from "./Card";

function CardList() {
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCardModal, setShowCardModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem("diaryentries")) || [];
    const sortedEntries = storedEntries.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    setEntries(sortedEntries);
  }, []);

  const openModal = (entry = null) => {
    if (entry) {
      setSelectedEntry(entry);
      setIsAddingEntry(false);
    } else {
      setSelectedEntry(null);
      setIsAddingEntry(true);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
    setIsAddingEntry(false);
  };

  const toggleModal = (card) => {
    setSelectedCard(card);
    setShowCardModal(true);
  };

  const handleClose = () => {
    setSelectedCard(null);
    setShowCardModal(false);
  };

  const addNewEntry = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem("diaryentries", JSON.stringify(updatedEntries));
  };

  const removeEntry = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem("diaryentries", JSON.stringify(updatedEntries));
  };

  return (
    <div>
      <Header openModal={() => openModal()} />

      {isModalOpen && isAddingEntry && (
        <AddEntry
          addNewEntry={addNewEntry}
          closeModal={closeModal}
          entries={entries}
        />
      )}

      <div className="grid max-sm:grid-cols-1 max-sm:place-items-center sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 xl:grid-cols-5 container m-auto gap-10">
        {entries.length > 0 ? (
          entries.map((entry, index) => (
            <Card
              key={entry.id}
              entry={entry}
              toggleModal={() => toggleModal(entry)}
              index={index}
              removeEntry={removeEntry}
            />
          ))
        ) : (
          <p>No notes</p>
        )}
      </div>

      {selectedCard && <ModalCard onClose={handleClose} card={selectedCard} />}
    </div>
  );
}

export default CardList;

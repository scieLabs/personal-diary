import { useState } from "react";

function AddEntry({ addNewEntry, closeModal }) {
  const [entryData, setEntryData] = useState({
    date: "",
    title: "",
    img: "",
    entry: "",
  });

  const handleEntryData = (e) => {
    setEntryData({
      ...entryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      ...entryData,
    };

    addNewEntry(newEntry);
    t;

    setEntryData({
      date: "",
      title: "",
      img: "",
      entry: "",
    });

    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Entry</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              value={entryData.date}
              onChange={handleEntryData}
              required
            />
          </div>

          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={entryData.title}
              onChange={handleEntryData}
              required
            />
          </div>

          <div>
            <label htmlFor="img">Image URL:</label>
            <input
              type="url"
              name="img"
              value={entryData.img}
              onChange={handleEntryData}
            />
          </div>

          <div>
            <label htmlFor="entry">Content:</label>
            <textarea
              name="entry"
              value={entryData.entry}
              onChange={handleEntryData}
              required
            ></textarea>
          </div>

          <button type="submit">Add Entry</button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

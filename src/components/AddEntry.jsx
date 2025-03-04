import React from "react";

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

    setEntryData({
      date: "",
      title: "",
      img: "",
      entry: "",
    });

    closeModal();
  };

  return (
    <div id="default-modal" tabindex="-1" className="overflow-y-auto overflow-x-hidden fixed bg-gray-700/70 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-20 w-full max-w-2xl max-h-full mt-[5%] mx-[30%]">
      {/* modal content */}
        <div className="relative bg-white rounded-lg shadow-sm">
            {/* modal header */}
            <div className="flex items-center bg-teal-800 justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
              <h2 className="text-[#57C3AD] text-lg font-bold tracking-wider">Add New Entry</h2>
              <button type="button" onClick={closeModal} className="text-white tracking-wide bg-[#229389] hover:bg-[#57C3AD] shadow-md rounded-lg text-sm py-1 px-2 ms-auto inline-flex justify-center items-center" data-modal-hide="static-modal">
              Cancel
              </button>
            </div>
        {/* modal body */}
          <div className="p-4 md:p-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-teal-800">Date:</label>
                <input
                  type="date"
                  name="date"
                  value={entryData.date}
                  onChange={handleEntryData}
                  required
                  className="bg-gray-50 border border-gray-300 focus:outline-none focus:ring-0 focus:border-teal-800 text-teal-800 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-teal-800">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={entryData.title}
                  onChange={handleEntryData}
                  required
                  className="bg-gray-50 border border-gray-300 focus:outline-none focus:ring-0 focus:border-teal-800 text-teal-800 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label htmlFor="img" className="block mb-2 text-sm font-medium text-teal-800">Image URL:</label>
                <input
                  type="url"
                  name="img"
                  value={entryData.img}
                  onChange={handleEntryData}
                  className="bg-gray-50 border border-gray-300 focus:outline-none focus:ring-0 focus:border-teal-800 text-teal-800 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label htmlFor="entry" className="block mb-2 text-sm font-medium text-teal-800">Content:</label>
                <textarea
                  name="entry"
                  value={entryData.entry}
                  onChange={handleEntryData}
                  required
                  className="bg-gray-50 border border-gray-300 focus:outline-none focus:ring-0 focus:border-teal-800 text-teal-800 text-sm rounded-lg block w-full p-2.5"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="text-white tracking-wide bg-teal-800 hover:bg-[#229389] shadow-md text-sm py-1 px-2 rounded-lg text-sm ms-auto">Add Entry</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEntry;
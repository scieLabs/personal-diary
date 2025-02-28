import React from "react";

function AddEntry({ entryData, setEntryData }) {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleEntryData = (e) => {
        setEntryData({
            ...entryData,
            [e.target.name]: e.target.value,
        });
    };

    //set current date from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php

    let currentDate = new Date();
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd;
    } 
    if(mm<10) {
        mm='0'+mm;
    }
    currentDate = dd + '/' + mm + '/' + yyyy;
    //console.log(currentDate);

    // different method: currentDate.toISOString().split('T')[0] from https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('entryData', JSON.stringify(entryData));
        setEntryData({
            date: '',
            title: '',
            img: '',
            entry: '',

        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEntryData({
            date: '',
            title: '',
            img: '',
            entry: '',

        });

    }

    return (
        <div className='modal block' id='addEntry-modal'>
            <div className='modal-content'>
                <div className='modal-header bg-[#ebc2d5]'>
                    <span className='close' onClick={closeModal}>&times;</span>
                    {/* should make the X to close the thing */}
                    <h1 className='text-white text-xl'>New Entry</h1>
                </div>

                <div className='modal-body bg-[#cca9b9] text-white'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='date'>Date</label>
                            <input
                                onChange={handleEntryData}
                                value={currentDate}
                                type='text'
                                id='date'
                                name='date'
                                readOnly={true}
                                className='text-white bg-[#ad8f9d]'
                            />
                        </div>
                        <div>
                            <label htmlFor='title'>Title</label>
                            <input
                                onChange={handleEntryData}
                                value={entryData.title}
                                type='text'
                                id='title'
                                name='title'
                                className='text-white bg-[#ad8f9d]'
                            />
                        </div>
                        <div>
                            <label htmlFor='img'>Image</label>
                            <input 
                                onChange={handleEntryData}
                                value={entryData.img}
                                type='url'
                                // maybe set to type='file' for now so user can input their own image, at least before I figure out how to display this shite
                                id='img'
                                name='img'
                                className='text-white bg-[#ad8f9d]'
                            />
                        </div>
                        <div>
                            <textarea
                                onChange={handleEntryData}
                                value={entryData.entry}
                                id='entry'
                                name='entry'
                                className='text-white bg-[#ad8f9d]'
                            ></textarea>
                        </div>
                        <button type='submit' className='text-white bg-[#ebc2d5]'>Submit</button>
                        {/* figure out how to make submit also close the modal */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddEntry;
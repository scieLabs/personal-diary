import React from "react";

function AddEntry({ entryData, setEntryData }) {
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
            date: currentDate,
            title: '',
            img: '',
            entry: '',

        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='date'>Date</label>
                <input
                    onChange={handleEntryData}
                    value={entryData.date}
                    type='text'
                    id='date'
                    name='date'
                    readOnly={true}
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
                />
            </div>
            <div>
                <textarea
                    onChange={handleEntryData}
                    value={entryData.entry}
                    id='entry'
                    name='entry'
                ></textarea>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default AddEntry;
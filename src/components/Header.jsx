import React from "react";
import AddEntry from "./AddEntry";

function Header() {
    return (
        <header className='bg-[#ebc2d5] h-50 text-center'>
            <h1 className='text-7xl text-white p-6 tracking-wider'>
            My Diary</h1>
            <button onClick={AddEntry} type='button' className='px-5 py-2 text-white bg-radial from-[#ad8f9d] to-[#cca9b9] shadow-lg rounded-xl'>
                Add Entry
            </button>


        </header>



    )


}

export default Header;
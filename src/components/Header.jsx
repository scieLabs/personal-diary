import React from "react";
import AddEntry from "./AddEntry";

function Header() {
    return (
        <header className='bg-[#ebc2d5] h-svh'>
            <h1 className='text-3xl text-white'>
            Journal</h1>
            <button onClick={AddEntry} className='px-5 py-2 text-white bg-[#ad8f9d] shadow-lg'>
                Add Entry
            </button>


        </header>



    )


}
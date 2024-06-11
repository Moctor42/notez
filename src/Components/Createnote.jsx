import React from 'react';

export const Createnote = ({ handleText, handleTitle, text, title, panelStatus, setPanelStatus, handleSave, originalTimeStamp }) => {

    return (
        <div className='border-solid border-2 border-black m-2 w-2/3'>
            <div className='m-2 rounded-3xl p-4 bg-white' >
                <textarea
                onChange={handleTitle}
                value={title}
                placeholder="Title..."
                >

                </textarea>
                <br/>
                <textarea
                onChange={handleText}
                value={text}
                placeholder="type something..."
                >

                </textarea>
            </div>
            <br></br>
            <p>{originalTimeStamp ? originalTimeStamp : "new note!"}</p>
            <br></br>
            <button 
            onClick={()=>{handleSave()}}className='text-2xl font-sans self-end border-solid border-2 border-black rounded-3xl px-3 py-1 m-2 bg-white'>
                save
            </button>
            <button 
            onClick={()=>{setPanelStatus(0)}}className='text-2xl font-sans self-end border-solid border-2 border-black rounded-3xl px-3 py-1 m-2 bg-white'>
                cancel
            </button>
        </div>
    );
};
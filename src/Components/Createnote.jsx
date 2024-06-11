import React from 'react';

export const Createnote = ({ handleText, handleTitle, text, title, panelStatus, setPanelStatus, handleSave, originalTimeStamp }) => {

    return (
        <div className='m-2 w-2/3'>
            <textarea
                className='bg-transparent rounded-3xl text-xl font-bold resize-none p-3'
                onChange={handleTitle}
                value={title}
                placeholder="Title..."
                >

                </textarea>
                <br/>
                
                <textarea
                className='resize-none w-full rounded-3xl p-3 bg-white shadow-lg shadow-gray-400 mb-4 h-80'
                onChange={handleText}
                value={text}
                placeholder="type something..."
                >

                </textarea>
            
            <br></br>
            <p>{originalTimeStamp ? originalTimeStamp : "new note!"}</p>
            <br></br>
            <button 
            onClick={()=>{handleSave()}}className='text-2xl font-sans self-end  rounded-3xl px-3 py-1 m-2 bg-yellow-300 shadow-lg shadow-gray-500'>
                save
            </button>
            <button 
            onClick={()=>{setPanelStatus(0)}}className='text-2xl font-sans self-end rounded-3xl px-3 py-1 m-2 bg-white shadow-lg shadow-gray-500'>
                cancel
            </button>
        </div>
    );
};
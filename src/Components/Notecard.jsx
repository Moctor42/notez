import React, { useState } from 'react';

export const Notecard = ({ title, body, timeStamp, handleDelete, setTitle, setText, setOriginalTimeStamp, setPanelStatus }) => {
    const [confirmDelete, setConfirmDelete] = useState(false)

    const creationDate = new Date(timeStamp)

    const handleClick = () => {
        setTitle(title)
        setText(body)
        setOriginalTimeStamp(timeStamp)
        setPanelStatus(1)
    }

    return (
        <div 
            className='h-min w-64 rounded-lg m-2 p-3 bg-white shadow-lg shadow-gray-700 '>
            <div onClick={handleClick}>
                <h3 className='text-xl font-bold mb-3'>
                {title}
            </h3>
            <p className='text-md mb-3'>
                {body}
            </p>
            <p className='text-sm   text-gray-400'>
                Created {creationDate.toDateString()}
            </p>
            </div>
            
            <button 
            className='z-10'
            onClick={()=>{handleDelete(timeStamp)}}>
            delete note
            </button>
            
        </div>
    );
};

import React from 'react';

export const Notecard = ({ title, body, timeStamp, handleDelete, setTitle, setText, setOriginalTimeStamp, setPanelStatus }) => {

    const creationDate = new Date(timeStamp)

    const handleClick = () => {
        setTitle(title)
        setText(body)
        setOriginalTimeStamp(timeStamp)
        setPanelStatus(1)
    }

    return (
        <div onClick={handleClick}
            className='h-min w-64 border-solid  border-black border-4 rounded-lg m-2 p-2 bg-white'>
            <h3 className='text-xl'>
                {title}
            </h3>
            <p>
                {body}
            </p>
            <p className='text-sm   text-gray-400'>
                {creationDate.toDateString()}
            </p>
            <button onClick={()=>{handleDelete(timeStamp)}}>
            delete
            </button>
        </div>
    );
};

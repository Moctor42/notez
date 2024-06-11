import React from 'react';

export const Header = ({setPanelStatus, setOriginalTimeStamp, setTitle, setText}) => {

    const handleClick = ()=>{
        setOriginalTimeStamp(undefined)
        setTitle("")
        setText("")
        setPanelStatus(1)
    }
    return (
        <div className='bg-white min-w-full max-h-20 flex justify-evenly'>
            
            <div className='w-32'>

            </div>
            <h1 className='text-5xl font-sans self-center'>
                Notez
            </h1>
            <button className='text-3xl font-sans self-end border-solid border-2 border-black rounded-3xl px-4 py-1 m-2'
            onClick={()=>{handleClick()}}>
                new note
            </button>
        </div>
    );
};

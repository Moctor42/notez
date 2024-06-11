import React from 'react';

export const Header = ({setPanelStatus, setOriginalTimeStamp, setTitle, setText}) => {

    const handleClick = ()=>{
        setOriginalTimeStamp(undefined)
        setTitle("")
        setText("")
        setPanelStatus(1)
    }
    return (
        <div className='bg-yellow-300 min-w-full h-40 flex justify-between'>
            
            <div className='w-32'>

            </div>
            <h1 className='text-7xl font-sans self-end m-4 font-bold'>
                notez
            </h1>
            <button className='text-2xl font-bold font-sans self-start shadow-lg shadow-gray-600 rounded-3xl px-10 py-2 m-6 bg-white'
            onClick={()=>{handleClick()}}>
                New note
            </button>
        </div>
    );
};

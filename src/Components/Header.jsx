import React from 'react';

export const Header = () => {
    return (
        <div className='col-span-2 bg-white min-w-full max-h-20 flex justify-evenly'>
            
            <div className='w-32'>

            </div>
            <h1 className='text-5xl font-sans self-center'>
                Notez
            </h1>
            <button className='text-3xl font-sans self-end border-solid border-2 border-black rounded-3xl px-4 py-1 m-2'>
                new note
            </button>
        </div>
    );
};

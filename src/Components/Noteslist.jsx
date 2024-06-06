import React from 'react';
import { Notecard } from './Notecard';

export const Noteslist = () => {
    return (
        <div className='flex flex-wrap justify-even content-start border-solid border-2 border-black m-2'>
            <Notecard />
            <Notecard />
            <Notecard />
            <Notecard />
            <Notecard />
            <Notecard />
            <Notecard />
        </div>
    );
};

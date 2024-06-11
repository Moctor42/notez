import React from 'react';
import { Notecard } from './Notecard';

export const Noteslist = ({ notes, handleDelete, setTitle, setText, setOriginalTimeStamp, setPanelStatus }) => {

    const notesList = notes.map((note) =>
    (<Notecard
        
        key={note.timeStamp}
        title={note.title}
        body={note.body}
        timeStamp={note.timeStamp}
        handleDelete={handleDelete}
        setTitle={setTitle}
        setText={setText}
        setOriginalTimeStamp={setOriginalTimeStamp}
        setPanelStatus={setPanelStatus}
    />)

    )


    return (

        <div className='flex flex-wrap justify-center border-solid border-2 border-black m-2'>
            {notesList}
        </div>

    );
};

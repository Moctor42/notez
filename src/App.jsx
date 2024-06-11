import { useEffect, useState } from 'react'
import { Header } from './Components/Header'
import { Noteslist } from './Components/Noteslist'
import { Createnote } from './Components/Createnote'

export const App = () => {
  const [notes, setNotes] = useState([])
  const [update, setUpdate] = useState(false)
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const [originalTimeStamp, setOriginalTimeStamp] = useState(undefined)
  const [panelStatus, setPanelStatus] = useState(0)

  //loads notes array from local storage 
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"))
    if (storedNotes) {
      setNotes(storedNotes)
      console.log("notes loaded from localstorage", storedNotes);
    }

  }, [])

  const handleText = (event) => {
    setText(event.target.value)
    console.log("text changed!");
  }
  const handleTitle = (event) => {
    setTitle(event.target.value)
    console.log("title changed!");
  }

  const handleSave = () => {
    if (!originalTimeStamp) {
      const updatedNotes = [
          {
            title: title,
            body: text,
            timeStamp: Date.now()
          },
          ...notes
        ]
      setNotes(updatedNotes)
    } else if (originalTimeStamp) {
      const otherNotes = notes.filter((note) => note.timeStamp !== originalTimeStamp)
      const updatedNotes = [
        {
          title: title,
          body: text,
          timeStamp: originalTimeStamp
        },
        ...otherNotes
      ]
    setNotes(updatedNotes)
    }
    setUpdate(true)
    console.log("note saved!");
    setPanelStatus(0)
  }

  const handleDelete = (timeStamp) => {
    const undeletedNotes = notes.filter((note) => note.timeStamp !== timeStamp)
    setNotes(undeletedNotes)
    setUpdate(true)
    console.log("note deleted!");
  }

  const handlePanel = (panelStatus) => {
    if (panelStatus == 1) {
      return <Createnote
        title={title}
        text={text}
        handleText={handleText}
        handleTitle={handleTitle}
        setPanelStatus={setPanelStatus}
        handleSave={handleSave}
        originalTimeStamp={originalTimeStamp}
      />
    } else {
      return null
    }
  }

  // saves notes array to localstorage
  useEffect(() => {
    console.log(notes);
    if (update) {
      localStorage.setItem("notes", JSON.stringify(notes))
      console.log("notes saved to localstorage", notes)
      setUpdate(false)
    };
  }, [update])

  return (
    <div className='h-svh'>
      <Header 
        setPanelStatus={setPanelStatus}
        setOriginalTimeStamp={setOriginalTimeStamp}
        setTitle={setTitle}
        setText={setText}
      />
      <div className='flex w-full justify-end h-full'>
        <Noteslist
          notes={notes}
          handleDelete={handleDelete}
          setTitle={setTitle}
          setText={setText}
          setOriginalTimeStamp={setOriginalTimeStamp}
          setPanelStatus={setPanelStatus}
        />
        {handlePanel(panelStatus)}
      </div>

    </div>
  )
}


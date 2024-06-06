import { useState } from 'react'
import { Header } from './Components/Header'
import { Noteslist } from './Components/Noteslist'
import { Createnote } from './Components/Createnote'

function App () {
  return (
    <div className='grid grid-cols-2'>
      <Header />
      <Noteslist />
      <Createnote />
    </div>
    
  )
}

export default App

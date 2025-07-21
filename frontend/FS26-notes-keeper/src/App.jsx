



























import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import CreateNote from './components/CreateNote';


function App() {


  const [notes, setNotes] = useState([{id: 1,title:'test title', content:'test content'}])
const deleteNote =(itemToDeleteId)=>{
  setNotes((prevNotes)=>{
    return prevNotes.filter((noteItem )=>{
      return itemToDeleteId !== noteItem.id
    })
  })
}


const addNote = (newNote)=>{
  setNotes([...notes,newNote])

}


  return (
    <>


    <Header/>

    <CreateNote addNote = {addNote} />



    {notes.map((noteItem, index)=>{

      return (<Note key={`${noteItem.id}-${index}`} noteItem={noteItem}  deleteNote={deleteNote}
      
      />)
    }

    )}


    </>

  )

}

export default App
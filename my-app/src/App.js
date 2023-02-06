import logo from './logo.svg';
import './App.css';
import CreateNote from './component/CreateNote';
import Note from './component/Note';
import { useState } from 'react';

function App() {
const [notes,setNotes] = useState([])

const addNote = (newNote)=>{
setNotes([...notes,newNote])
  }
  const deleteNote = (id)=>{
    setNotes(notes.filter((note,index)=> index !== id))

  }
  return(
    <div className='App'>
    <CreateNote onAdd={addNote}/>
    {notes.map((note,index)=><Note onDelete={deleteNote} id={index} title={note.title} content={note.content}/>)}
    
    </div>
  )
}

export default App;

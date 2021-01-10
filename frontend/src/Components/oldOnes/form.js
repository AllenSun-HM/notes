import React, { useState } from 'react'
import { notes } from './note'

const Form = (props) => {
  const [newnotes, setNote] = useState(notes)
  const [newnote, setNewNote] = useState('a new note')
  const [names, setNames] = useState([])
  const [newName, setNewName] = useState('new name')
  const addNote = (event) => {
    let note = {
      content: newnote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNote(newnotes.concat(note))
  }
  const addName = (event) => {
    event.preventDefault()
    setNames(newnotes.concat(newName))
  }
  const changeNewName = (event) => setNewName(event.target.value)

  const handleNoteChange = (event) => {
    console.log(event.target)
    setNewNote(event.target.value)
  }
  return (<>
    {/* <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  */}
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {() => addName}>
        <div>
          name: <input value = {newName} onChange = {() => changeNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {names.length === 0? '...' : names.map(name => <li>{name}</li>)}
      </ul>
    </div>
  </>
  )
}
export default Form
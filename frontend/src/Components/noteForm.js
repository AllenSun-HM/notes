import Button from '@material-ui/core/Button'
import noteService from '../services/noteservice'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const addNote = (event, setNotes, notes, noteFormRef, setErrorMessage) => {
  event.preventDefault()
  console.log(event.target.checked.checked)
  if (event.target.content.value < 8 && event.target.content.value > 0) {
    setErrorMessage('min length is 8')
  }
  else {
    setErrorMessage(null)
  const noteObject = {
    title: event.target.title.value,
    content: event.target.content.value,
    date: new Date(),
    important: event.target.checked.checked,
  }
  noteService.create(noteObject).then(noteObject => setNotes(notes.concat(noteObject)))
  noteFormRef.current.toggleVisibility()
}
}



const NoteForm = ({ notes, setNotes, setErrorMessage, noteFormRef }) => {
  const [newNotes, setNewNotes] = useState({})
  const [important, setImportant] = useState(false)
  return (
    <div>
      <form onSubmit={(event) => addNote(event, setNotes, notes, noteFormRef, setErrorMessage)}>
      <TextField name='title' required id="standard-required" label="Title" />

        <TextField name="content" required label="Content" style={{display:'block', margin:'3px'}}
          ></TextField>
        
        <FormControlLabel style={{display:'block'}}
        control={
          <Checkbox
            name="checked"
            color="primary"
            checked={important}
            onChange={(event) => setImportant(!important)}
          />
        }
        label="Important"
      />
      <Button style={{marginBottom:'8px'}}size="small" variant="contained" color="primary" type="submit">submit
        </Button>
        
      </form>
    </div>
  )
}

export default NoteForm
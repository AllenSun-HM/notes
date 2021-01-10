import React, { useEffect, useState, useRef } from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link, Redirect
  } from "react-router-dom"
  import Typography from '@material-ui/core/Typography';
  import NoteForm from '../Components/noteForm'
  import Togglable from '../Components/togglable'
  import Notes from '../Components/notes'

const DisplayNotes = ({notes, setNotes, setErrorMessage, user, handleDelete, toggleImportanceOf}) => {
    const noteFormRef = useRef()

      if (user === null){
        setErrorMessage('please login first')
        setTimeout(() => setErrorMessage(null), 3000)
        return( <Redirect to="/login"></Redirect>)
      }
      else{
        return(
        <>
        <Typography variant='h4' style={{marginLeft: '10px'}}>Your Notes</Typography>
        <br></br>
        <Togglable  buttonLabel="make a new note" ref = {noteFormRef}>
          <NoteForm  notes={notes} setNotes={setNotes} setErrorMessage={setErrorMessage} noteFormRef={noteFormRef} ></NoteForm>
        </Togglable>
        <Notes notes={notes} handleDelete={handleDelete} toggleImportanceOf={toggleImportanceOf}></Notes>
        </>
        )
    
  }
  }

  export default DisplayNotes;
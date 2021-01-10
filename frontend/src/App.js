import React, { useEffect, useState, useRef } from 'react'
import noteService from './services/noteservice'
import  './css/index.css'
import Notification from './Components/notification'
import LoginForm from './Components/loginForm'
import RegisterForm from './Components/registerForm'
import Footer from './Components/footer'
import { ThemeProvider } from '@material-ui/styles'
import theme from './css/theme.js'
import PrimarySearchAppBar from './Components/navbar'
import Grid from '@material-ui/core/Grid';
import User from './Components/user'
import Home from './Components/home'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Note from "./Components/note"
import DisplayNotes from './Components/displayNotes'

function App() {
  const [notes, setNotes] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (user){
    noteService.getAll(user.id).then(notes => setNotes(notes))
    }
  }, [user])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const handleError = (err) => {
    console.log(typeof err)
    setErrorMessage(err.toString())
    setTimeout(() => setErrorMessage(null), 3000)
  }


  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    if (note !== undefined){
      const changedNote = { ...note, important: !note.important }
      console.log(changedNote)
      noteService.update(id, changedNote).then(n =>
        setNotes(notes.map(note => note.id !== id ? note : n))).catch(err => handleError(err))
    }
  }

  const handleDelete = async (id) => {
    const deleteID = await noteService.deleteNote(id)
    console.log(deleteID.toString()
    )
    setNotes(notes.filter(note => note.id !== deleteID))
  }

  return (
        <ThemeProvider theme={theme}>
          <Router>
            <div>
              <PrimarySearchAppBar user={user} setUser={setUser}></PrimarySearchAppBar>
              <Notification message={user === null ? null : user.username} error={errorMessage}></Notification>
              <br></br>
            </div>
            <Switch>
              <Route path="/notes/:id">
                <Note notes={notes}></Note>
              </Route>
              <Route path="/login">
                <LoginForm username={username} setUser={setUser} setUsername={setUsername} setErrorMessage={setErrorMessage} ></LoginForm>
              </Route>
              <Route path="/register">
                <RegisterForm username={username} setUser={setUser} setUsername={setUsername} setErrorMessage={setErrorMessage} ></RegisterForm>
              </Route>
              <Route path="/notes">
              <DisplayNotes user={user} setErrorMessage={setErrorMessage} notes={notes} setNotes={setNotes} handleDelete={handleDelete} toggleImportanceOf={toggleImportanceOf}></DisplayNotes>
              </Route>
              <Route path="/users">
               <User user={user} setErrorMessage={setErrorMessage}/>
              </Route>
              <Route path="/">
                <Grid item xs={6}>
                  <Home />
                </Grid>
              </Route>
            </Switch>
          </Router>
          <Footer className={'bottom'}></Footer>
        </ThemeProvider>


  )
  
}

export default App

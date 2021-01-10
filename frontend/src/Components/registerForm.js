import Button from '@material-ui/core/Button'
import register from '../services/register'
import noteService from '../services/noteservice'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'

const RegisterForm = ({username, setUser, setUsername, setErrorMessage }) => {
  const history = useHistory()

  const handleRegister = async (event, setUser, setUsername, setPassword, setErrorMessage, username, password) => {
    event.preventDefault()
    try {
      const user = await register.registerService({
        username, password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
  
      setUser(user)
      noteService.setToken(user.token)
      setUsername('')
      setPassword('')
      history.push('/')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  
  const [password, setPassword] = useState('')

  RegisterForm.propTypes = {
      username: PropTypes.string.isRequired,
      setUsername: PropTypes.func.isRequired,
      setUser: PropTypes.func.isRequired,
      setErrorMessage: PropTypes.func.isRequired
  }

  return (
    <div>
    <h2>Register</h2>
    <form onSubmit={(event) => handleRegister(event, setUser, setUsername, setPassword, setErrorMessage, username, password)}>
      <div>
        <TextField label="username" onChange={({ target }) => setUsername(target.value)}/>
      </div>
      <div>
        <TextField  label="password" type='password' onChange={({ target }) => setPassword(target.value)}/>
      </div>
      <div>
        <Button style={{marginTop:5}} variant="contained" size="small" color="inherit" type="submit">
          register 
        </Button>
      </div>
    </form>
  </div>

  )
}

export default RegisterForm
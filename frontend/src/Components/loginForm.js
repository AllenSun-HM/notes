import Button from '@material-ui/core/Button'
import login from '../services/login'
import noteService from '../services/noteservice'
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {
  BrowserRouter as Router,

} from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'

const LoginForm = ({username, setUser, setUsername, setErrorMessage }) => {
  const history = useHistory()

  const handleLogin = async (event, setUser, setUsername, setPassword, setErrorMessage, username, password) => {
    event.preventDefault()
    try {
      const user = await login.loginService({
        username, password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      console.log(user)
      setUser(user)
      noteService.setToken(user.token)
      setUsername('')
      setPassword('')
      history.push('/')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 2500)
    }
  }
  
  const [password, setPassword] = useState('')

  LoginForm.propTypes = {
      username: PropTypes.string.isRequired,
      setUsername: PropTypes.func.isRequired,
      setUser: PropTypes.func.isRequired,
      setErrorMessage: PropTypes.func.isRequired
  }

  return (
    <div>
    <h2>login</h2>
    <form onSubmit={(event) => handleLogin(event, setUser, setUsername, setPassword, setErrorMessage, username, password)}>
      <div>
        <TextField label="username" onChange={({ target }) => setUsername(target.value)}/>
      </div>
      <div>
        <TextField  label="password" type='password' onChange={({ target }) => setPassword(target.value)}/>
      </div>
      <div>
        <Button style={{marginTop:5}} variant="contained" size="small" color="inherit" type="submit">
          login
        </Button>
      </div>
      <div style={{marginTop:5}}>
        <Typography>
          <Button size='small' variant='text'>
        <Link to="/register" color="secondary" variant="body2">
          not registered? register here
        </Link>
        </Button>
        </Typography>
      </div>
    </form>
  </div>

  )
}

export default LoginForm
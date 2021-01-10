import Button from '@material-ui/core/Button'
import React from 'react'

const handleLogout = (setUser) => {
  window.localStorage.removeItem('loggedNoteappUser')
  setUser(null)
}

const LogOutButton = ({ setUser }) => {
  return (
    <Button variant="text" size="small" color='inherit' onClick={() => handleLogout(setUser)
    }>
        log out
    </Button>
  )
}
export default LogOutButton
import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }
  Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
  }

  Togglable.displayName = 'Togglable'

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div >
      <div style={hideWhenVisible}>
        <Button size="medium" color="primary" variant="outlined" onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button style={{marginLeft: '10px'}} size="small" color="primary" variant="outlined" onClick={toggleVisibility}>cancel</Button>
      </div>
    </div>
  )
})

export default Togglable
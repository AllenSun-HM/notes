import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {useRef} from 'react'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom"
import Typography from '@material-ui/core/Typography';

const Note = ({notes}) => {
    const id = useParams().id
    const ref = useRef('')
    const note = notes.find(note => note.id === id)
    // const handleClick = () => {
    //   ref.current.style.color = 'grey'
    //   ref.current.style.textDecoration = 'line-through'
    // }
    return (
      <div>
      <span>
        <Typography ref={ref} variant="h4" style={{paddingLeft: '10px'}}color="primary">{note.title}</Typography>
        <Typography style={{padding: '10px'}} variant="subtitle1">
          {note.content}  
        </Typography>
      </span>
        {/* <Button size="small" onClick={handleClick}>Finished?</Button>
        <input type='checkbox' onClick={() => console.log('aaa')}></input> */}
      </div>
    )
      }

export default Note




import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core'

const Notes = ({ notes, handleDelete, toggleImportanceOf }) => {
  console.log(notes)
  return(
<div>

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {notes.map(note => (
            <TableRow key={note.id}>
              <TableCell>
                <Link to={`/notes/${note.id}`}>{note.title}</Link>
              </TableCell>
              <TableCell>
                {note.important? <b>important</b> : null}
              </TableCell>
              <TableCell>
                  <Button  variant="outlined" size="small" onClick = {() => toggleImportanceOf(note.id)}>
              change importance
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined"color='inherit' startIcon={<DeleteIcon/>}
                  style={{fontSize: 10}}
                  onClick = {() => handleDelete(note.id)}>
                    delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
      )}

export default Notes
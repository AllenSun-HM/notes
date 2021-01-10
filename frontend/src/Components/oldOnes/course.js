import React, { useReducer, useState } from 'react'
import { Note } from './note'

const Course = (props) => {
  const [showAll, setShowAll] = useState(true)
  let { name, parts } = props
  let sum = parts.reduce((s,p) => s + p.exercises,0)
  parts = showAll? parts : parts.filter(part => part.important)
  return (
    <div>
      <h2><b>{name}</b></h2>
      <button onClick = {() => setShowAll(!showAll)}>show {showAll ?  'important' : 'all'}</button>
      <ul>
        {parts.map(part => <Note key={part.id} content={part.name}/>)}

        <li>{sum}</li>
      </ul>
    </div>
  )
}

export default Course
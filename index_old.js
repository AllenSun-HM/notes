const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const Note = require('./models/note')
const { response } = require('express')
const config = require('./utils/config')
app.use(express.static('build'))
app.use(express.json())  
app.use(cors())

// const logger = (request, response, next) => {
//   if (request.body != null){
//     console.log('the request body is')
//     console.log(request.body)
//   }
//   next()
// }
// app.use(logger)

const maxId = () => {
  return (notes.length > 0
? Math.max(...notes.map(n => n.id)) 
: 0)
}

//create note
app.post('/api/notes', (request, response, next) => {
  const body = request.body

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
    .catch(error => next(error))
})

//hello world page
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

//get all notes
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
    
  })
})

//get specified note
app.get('/api/notes/:id', (request, response, next) => {
  console.log(request.params.id)
  Note.findById(request.params.id).then(note => {
    if (note){
      response.json(note)
    }
    else {
      response.status(404).end()
    }
  })
  .catch(err => next(err))
}
)

//update note
app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

// delete note
app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(result => {
      console.log(result)
      response.status(204).end()
    })
    .catch(error => next(error))
  })
  
  const errorHandler = (error, request, response, next) => {  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
    else if(error.name === 'ValidationError') {
      return response.status(400).send({error : error.message})
    }
    return response.status(400).end()
  }
  // add the last middleware globally
  app.use(errorHandler)

  const config = require('./utils/config')

  logger.info(`Server running on port ${config.PORT}`)
  app.listen(config.PORT, console.log(`server running on ${PORT}`))
  


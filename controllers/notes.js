const notesRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/users')
const logger = require('../utils/logger')
const jwt = require('jsonwebtoken')

notesRouter.get('/', async (request, response, next) => {
  try {
    const body = request.body
    console.log(body)
    const notes = await Note.find({}).populate('user', {username: 1, name:1})
    response.set('Cache-Control', 'public, max-age=3')
    response.json(notes)
  }
  catch (e) {
    next(e)
  }
})

notesRouter.get('/:id', (request, response, next) => {
  User.findById(request.params.id).populate('notes')
    .then(note => {
      if (note) {
        response.json(note.notes)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

notesRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    logger.info(user)
    const note = new Note({
      title: body.title,
      content: body.content,
      important: body.important || false,
      date: new Date(),
      user: user._id
    })

    note.save()
      .then(savedNote => {
        response.json(savedNote)
        user.notes = user.notes.concat(savedNote._id)
        user.save()
      })
      .catch(error => next(error))
  }
  catch (e) {
    next(e)
  }
})

notesRouter.delete('/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(() => {
      response.send(request.params.id)
    })
    .catch(error => next(error))
})

notesRouter.put('/:id', (request, response, next) => {
  const body = request.body
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
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

module.exports = notesRouter
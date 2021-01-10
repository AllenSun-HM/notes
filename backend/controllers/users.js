const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/users')

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })

    const savedUser = await user.save()

    response.json(savedUser)
  }
  catch (e) {
    next(e)
  }
})

usersRouter.get('/', async (request, response, next) => {
  try {
    const user = await User.find({})
      .populate('notes', {content: 1, important:1})
    response.json(user)
  }
  catch (e) {
    next(e)
  }
})
module.exports = usersRouter
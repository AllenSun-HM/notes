const registerRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/users')
const jwt = require('jsonwebtoken')


registerRouter.post('/', async (request, response, next) => {
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
  
module.exports = registerRouter
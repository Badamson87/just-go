let router = require('express').Router()
let User = require('../models/user')

// update user
router.put('/', (req, res, next) => {
  User.findById(req.session.uid)
    .then(user => {
      user.image = req.body.image
      user.bio = req.body.bio
      user.save()
      delete user.password
      res.send(user)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})



module.exports = router
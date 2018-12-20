
let router = require('express').Router()
let Comment = require('../models/comment')


// Create a comment
router.post('/:postId', (req, res, next) => {
  req.body.creatorId = req.session.uid
  Comment.create(req.body)
    .then(newComment => {
      res.send(newComment)
      console.log(newComment)
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
})


// Delete a comment by Id

router.delete('/:id', (req, res, next) => {
  Comment.findById(req.params.id)
    .then(comment => {
      if (!comment.creatorId.equals(req.session.uid)) {
        return res.status(401).send("Access Denied!")
      }
      comment.remove(err => {
        if (err) {
          console.log(err)
          return res.status(400).send(err)
        }
        res.send("Successfully Deleted Post")
      })
    })
})


// get all comments by post Id

router.get('/:postId', (req, res, next) => {
  Comment.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      return res.status(400).send(err)
    })
})

module.exports = router
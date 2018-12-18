let router = require('express').Router()
let Albums = require('../models/album')

// Create a new album

router.post('/', (req, res, next) => {
  req.body.authorId = req.session.uid
  Albums.create(req.body)
    .then(newAlbum => {
      res.send(newAlbum)
      console.log(newAlbum)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

// Delete an album
router.delete('/:id', (req, res, next) => {
  Albums.findById(req.params.id)
    .then(album => {
      if (!album.authorId.equals(req.session.uid)) {
        return res.status(401).send("Access Denied!")
      }
      album.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Deleted Album")
      })
    })
})


// Edit an album

router.put('/:id', (req, res, next) => {
  Albums.findById(req.params.id)
    .then(album => {
      if (!album.authorId.equals(req.session.uid)) {
        return res.status(401).send("Access Denied!")
      }
      album.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Updated Album")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})



// Get album by Id
router.get('/:id', (req, res, next) => {
  Albums.findById(req.params.id)    // session / needs to be album id not user id?
    .populate('posts').exec((err, newAlbum) => {
      if (err) {
        next(err)
        return
      }
      res.send(newAlbum)
    })
  // .then(data => {
  //   res.send(data)
  // })
  // .catch(err => {
  //   console.log(err)
  //   next()
  // })
})


// Get all album by user id
router.get('/user/:authorId', (req, res, next) => {
  Albums.find({ authorId: req.params.authorId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


module.exports = router
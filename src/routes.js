const uploadConfig = require('./config/upload')
const router = require('express').Router()

const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

const multer = require('multer')
const upload = multer(uploadConfig)

router.get('/posts', PostController.index)
router.post('/posts', upload.single('image'), PostController.store)

router.post('/posts/:id/like', LikeController.store)

module.exports = router

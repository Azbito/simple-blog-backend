const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')

router.post('/', (req, res) => postController.create(req, res))
router.get('/', (req, res) => postController.list(req, res))

module.exports = router

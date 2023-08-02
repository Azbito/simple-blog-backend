const post = require('../models/Post')

class PostController {
  async create(req, res) {
    const { title, description } = req.body
    const result = await post.create({
      title,
      body: description
    })
    console.log(req.body)
    res.send(result).status(200)
  }

  async list(req, res) {
    const posts = await post.find()
    console.log(posts)
    res.send(posts).status(401)
  }
}

module.exports = new PostController()

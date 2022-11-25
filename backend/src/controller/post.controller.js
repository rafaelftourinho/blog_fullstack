const { postService } = require('../services');

const getAllPosts = async (_req, res) => {
  const post = await postService.getAllPosts();
  res.status(200).json(post);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);

  if (!post) return res.status(400).json('Post não encontrado');

  return res.status(200).json(post);
};

const insertPost = async (req, res) => {
  const { owner, title, body } = req.body;

  const post = await postService.insertPost(owner, title, body);

  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await postService.deletePost(id);

  if (post) return res.status(post.type).json(post.message);
  return null;
};

module.exports = {
  getAllPosts,
  getPostById,
  insertPost,
  deletePost,
};

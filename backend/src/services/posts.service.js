const { postModel } = require('../models');

const getAllPosts = async () => {
  const post = await postModel.getAllPosts();
  return post;
};

const getPostById = async (id) => {
  const post = await postModel.getPostById(id);

  return post;
};

const insertPost = async (owner, title, body) => {
  const insertId = await postModel.insertPost(owner, title, body);

  if (!insertId) return { type: '', message: '' };

  const post = await postModel.getPostById(insertId);

  return post;
};

const deletePost = async (id) => {
  await postModel.deletePost(id);
  const deletedItem = await postModel.getPostById(id);

  if (!deletedItem) return { type: 204, message: 'Excluído com sucesso' };
  return null;
};

module.exports = {
  getAllPosts,
  getPostById,
  insertPost,
  deletePost,
};

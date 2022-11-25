import React from 'react';
import PropTypes from 'prop-types';

function DeleteBtn({ post, deletePost }) {
  return (
    <div className="container-btn">
      {post.owner === JSON.parse(localStorage.getItem('login')) && (
        <button type="button" onClick={() => deletePost(post.id)} className="btn delete">
          Excluir
        </button>
      )}
    </div>
  );
}

DeleteBtn.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default DeleteBtn;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function GoTo({ post }) {
  const { pathname } = useLocation();
  return (
    <div className="container-btn">
      {pathname === '/' ? (
        <Link to={`/posts/${post.id}`} className="btn">
          Ler mais
          {' '}
        </Link>
      ) : (
        <Link to="/" className="btn">
          Home
        </Link>
      )}
    </div>
  );
}

GoTo.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};

export default GoTo;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogFetch from '../axios/config';
import './NewPost.css';

function NewPost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const owner = JSON.parse(localStorage.getItem('login'));

  const createPost = async (event) => {
    event.preventDefault();

    await blogFetch.post('/posts', {
      owner,
      title,
      body,
      created_at: new Date(),
    });

    navigate('/');
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(event) => createPost(event)}>
        <div className="form-control">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="title">
            Título:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>
        <div className="form-control">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="body">
            Conteúdo:
          </label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  );
}

export default NewPost;

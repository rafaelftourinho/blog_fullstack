import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import './index.css';
import Login from './routes/Login';
import ReadMore from './routes/ReadMore';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new',
        element: <NewPost />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/posts/:id',
        element: <ReadMore />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

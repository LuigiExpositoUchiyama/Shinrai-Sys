import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './Routes/Home';
import Error from './Routes/Error';
import Parceiros from './Routes/Parceiros/index.jsx';
import Solucoes from './Routes/Solucoes/index.jsx';
import Flow from './Routes/Flow/index.jsx';
import Blog from './Routes/Blog/index.jsx';
import Sobre from './Routes/Sobre/index.jsx';
import Contato from './Routes/Contato/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shinrai-flow',
        element: <Flow />,
      },
      {
        path: 'solucoes',
        element: <Solucoes />,
      },
      {
        path: 'parceiros',
        element: <Parceiros />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'sobre-nos',
        element: <Sobre />,
      },
      {
        path: 'contato',
        element: <Contato />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

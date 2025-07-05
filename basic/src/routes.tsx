import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import BasicLayout from './layouts/BasicLayout';

import Front from './pages/Front';
import NotFound from './pages/NotFound';

import UseStateExample from './pages/basic/UseStateExample';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // == path: ''
        element: <Front />,
      },
      {
        path: 'basic',
        element: <BasicLayout />,
        children: [
          {
            index: true,
            element: <UseStateExample />,
          },
        ],
      },
    ],
  },
]);

export default router;

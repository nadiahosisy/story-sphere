import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProtectedRoute } from './components';
import { Home, NotFound, Auth, Story } from './pages';

import { SharedLayout } from './components';

const routes = [
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'add',
        element: <ProtectedRoute></ProtectedRoute>,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'products',
        children: [
          {
            path: ':shoeId',
            element: <Story />
          },
          {
            path: ':shoeId/edit',
            element: <ProtectedRoute></ProtectedRoute>
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

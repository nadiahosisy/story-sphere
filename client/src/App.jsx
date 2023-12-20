import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, NotFound } from './pages';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import SharedLayout from './components/layout/SharedLayout';

const routes = [
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


 
// App.js
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, NotFound } from './pages';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import SharedLayout from './components/layout/SharedLayout';
import UserStoriesApp from './components/UserStories/UserStoriesApp'; // Import the new Story component
import './components/UserStories/UserStoriesApp.css'; // Import the new Story component

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
        path: '/register', // Fix the missing slash at the beginning of the path
        element: <Register />,
      },
      {
        path: '/stories', // Add a new route for stories
        element: <UserStoriesApp />,
      },
      {
        path: '/Article', // Add a new route for stories
        element: <UserStoriesApp />,
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














// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { Home, NotFound } from './pages';

// import Login from './components/Form/Login';
// import Register from './components/Form/Register';
// import SharedLayout from './components/layout/SharedLayout';

// const routes = [
//   {
//     path: '/',
//     element: <SharedLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/login',
//         element: <Login />,
//       },
//       {
//         path: 'register',
//         element: <Register />,
//       },
//       {
//         path: '*',
//         element: <NotFound />,
//       },
//     ],
//   },
// ];

// function App() {
//   const router = createBrowserRouter(routes);

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;


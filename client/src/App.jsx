
 
// App.js
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, NotFound } from './pages';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import SharedLayout from './components/layout/SharedLayout';
import UserStoriesApp from './components/UserStories/UserStoriesApp'; // Import the new Story component
import './components/UserStories/UserStoriesApp.css'; // Import the new Story component
import ProfileSetting from './components/ProfileSetting/ProfileSetting';
import './components/ProfileSetting/ProfileSetting.css';
import AboutUs from './components/layout/AboutUs/AboutUs';
import './components/layout/AboutUs/AboutUs.css';
import ContactUs from './components/ContactUS/ContactUs';
import Donate from './components/Donate/Donate';
import './components/Donate/Donate.css';


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
        path: '/ProfileSetting', // Add a new route for stories
        element: <ProfileSetting />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/donate',
        element: <Donate />,
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


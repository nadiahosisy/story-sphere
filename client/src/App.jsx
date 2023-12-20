import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Home, NotFound } from './pages';

import { SharedLayout } from './components';

// const routes = [
//   {
//     path: '/',
//     element: <SharedLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'add',
//         element: <ProtectedRoute><ManageShoe /> </ProtectedRoute>,
//       },
//       {
//         path: 'auth',
//         element: <Auth />,
//       },
//       {
//         path: 'products',
//         children: [
//           {
//             path: ':shoeId',
//             element: <Shoe />
//           },
//           {
//             path: ':shoeId/edit',
//             element: <ProtectedRoute> <ManageShoe /></ProtectedRoute>
//           }
//         ]
//       },
//       {
//         path: '*',
//         element: <NotFound />
//       }
//     ]
//   },
// ];

// function App() {
//   const router = createBrowserRouter(routes);

//   return (
//     <>
//       <ToastContainer />
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;



function App() {

  return (
    <> 
    </>
  );
}

export default App;

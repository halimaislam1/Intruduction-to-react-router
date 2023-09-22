import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello From React Router</div>,
//   },
//   {
//     path: '/about',
//     element: <div>I am in the about page</div>
//   },
//   {
//     path: '/contact',
//     element: <div>Call me right now!!</div>
//   }
// ]);
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App></App> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

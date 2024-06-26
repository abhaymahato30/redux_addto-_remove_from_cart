import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Home from './Home';
import Cart from './Cart';
import Navbar from './Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/><Home/> </>,
    },
    {
      path: "/cart",
      element: <><Navbar/><Cart/> </>,
    },
  ]);
  


  return (
    <>
 
  

  <RouterProvider router={router} />


  
    </>
  )
}

export default App

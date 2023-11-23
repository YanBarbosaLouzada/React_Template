import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[{
        path:"Home",
        element:<Home></Home>

      }]
    }
])

export default router
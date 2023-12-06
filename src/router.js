import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Errorpage from './pages/Errorpage.jsx'
import Get from './pages/Get.jsx'
import Post from './pages/Post.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "Home",
        element: <Home></Home>
      },
      {
        path: "Get",
        element: <Get></Get>
      },
      {
        path: "Post",
        element: <Post></Post>
      }
    ], errorElement: <Errorpage></Errorpage>
  }
])

export default router
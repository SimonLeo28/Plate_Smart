import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import PropPost from './pages/PropPost.jsx';
import Props from './pages/Props.jsx';
import SingleProp from './pages/SingleProp.jsx';
import ContactForm from './pages/ContactForm.jsx';
import { NGO } from './pages/NGO.jsx';
import NGOPost from './pages/NGOPost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Prop/PropPost",
    element: <PropPost />,
  },
  {
    path: "/Prop",
    element: <Props />,
  },
  {
    path: "/Props/SingleProp/:id",
    element: <SingleProp />
  },
  {
    path: "/Contact",
    element: <ContactForm />
  },
  {
    path: "/NGO",
    element: <NGO />
  },
  {
    path: "/NewNGO",
    element: <NGOPost />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
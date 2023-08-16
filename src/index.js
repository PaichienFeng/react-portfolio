import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/pages/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Project from './components/pages/Project/ProjectContainer';
import Contact from './components/pages/Contact/Contact';
import Resume from './components/pages/Resume/Resume';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <div>
            <Header/>
            <About/>
            <Footer/>
          </div>
        ),
      },
      {
        path: "/project",
        element: (
          <div>
            <Header/>
            <Project/>
            <Footer/>
          </div>
        ),
      },
      {
          path: "/contact",
          element: (
            <div>
              <Header/>
              <Contact/>
              <Footer/>
            </div>
          ),
        },
        {
          path: "/resume",
          element: (
            <div>
              <Header/>
              <Resume/>
              <Footer/>
            </div>
          ),
        },
  ]);

root.render( <RouterProvider router={router}/>)


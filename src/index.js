import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import Home from './components/Sessions/Home/Home';
import Contact from './components/Sessions/Contact/Contact';
import About from './components/Sessions/About/About';
import Services from './components/Sessions/Services/Services';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'gallery',
        element: <PhotoGallery />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);


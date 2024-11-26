import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' Component={HomePage} />
      <Route path='about' Component={AboutPage} />
      <Route path='gallery' Component={GalleryPage} />
      <Route path='services' Component={ServicesPage} />
      <Route path='contact' Component={ContactPage} />
      <Route path='projects' Component={ProjectsPage} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();

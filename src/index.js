import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import Workpage from './pages/Workpage';
import Workdetails from './pages/Workdetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BlogPage />} />
      <Route path="/blog" element={<BlogPage />} />

      <Route path="/Work" element={<Workpage/>}/>
      <Route path="/Workdetails" element={<Workdetails/>}/>
    </Routes>
  </BrowserRouter>
);

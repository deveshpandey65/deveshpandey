import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import About from './Elements/About';
import Projects from './Elements/Projects';
import ProjectDesc from './Elements/ProjectDesc';
import Contact from './Elements/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectdesc/:projectName" element={<ProjectDesc />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

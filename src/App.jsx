import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

import Page404 from './views/404/404.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

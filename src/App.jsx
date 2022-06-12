import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

import Page404 from './views/404/404.jsx';
import Header from './components/header/header.jsx';
import FactsList from './views/factsList/factsList.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<FactsList />} />
        <Route path = '*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

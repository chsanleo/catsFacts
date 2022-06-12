import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

import Page404 from './views/404/404.jsx';
import Header from './components/header/header.jsx';
import Landing from './views/landing/landing.jsx';
import Jokes from './views/jokes/jokes.jsx';
import About from './views/about/about.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'   element={<Landing />} />
        <Route path='/jokes' element={<Jokes />} />
        <Route path='/about' element={<About />} />
        <Route path = '*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

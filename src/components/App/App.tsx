import React from 'react';

import { Routes, Route } from 'react-router';

import Layout from '../common/Layout/Layout';
import MainPage from '../pages/MainPage/MainPage';

import './App.css';
import '../../assets/styles/_reset.scss';
import '../../assets/styles/style.scss';

// /. imports

const App: React.FC = () => {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

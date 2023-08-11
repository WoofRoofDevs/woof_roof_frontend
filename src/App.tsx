import { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Dashboard } from './components/Dashboard/Dashboard';

// import { Navigation } from './components/Navigation';
// import { PageRouter } from './utils/router';

export const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

// <>
//   <Navigation />

//   <PageRouter />
// </>

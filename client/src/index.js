import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Login from './pages/login';
import CreatePoll from './pages/create-poll';
import ViewPoll from './pages/view-poll';
import NewUser from './pages/new-user';
import Dashboard from './pages/dashboard';
// import VotePage from './pages/vote';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-election" element={<CreatePoll />} />
        <Route path="/view-poll" element={<ViewPoll />} />
        <Route path="/create-account" element={<NewUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/vote" element={<VotePage />} /> */}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SigninForm from './Signin';
import SignupForm from './Signup';
import SigninSuccess from './Success';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>User Authentication</h1>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/success" element={<SigninSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
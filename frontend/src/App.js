import logo from './logo.svg';
import './App.css';

import AdminLogin from './Components/AdminsLogin'
//import Registraition from './Components/Registraition';
import Signup from './pages/Signup';
import  Login from './pages/Login';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div>
      <div className='pages'>
        <Routes>
          <Route
            path="/login"
            element={Login}
          />
           <Route
            path="/signup"
            element={Signup}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

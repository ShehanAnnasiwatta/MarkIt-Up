import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";
import './App.css';

import Signup from './pages/Signup';
import  Login from './pages/Login';

function App() {
  return (
    <div className="App">
     <header className="App-header">
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
     </header>
    </div>
  );
}

export default App;

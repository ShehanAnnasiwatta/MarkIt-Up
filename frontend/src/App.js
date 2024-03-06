import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import React from 'react';

import Signup from './pages/Signup';
import  Login from './pages/Login';
import AdminLogin from './Components/AdminsLogin'
import Registraition from './Components/Registraition';

function App() {
  return (

 <Router>  

   <Routes>
    <Route exact path="/" element={<AdminLogin/>}></Route>
    <Route path="/register" element={<Registration/>}></Route> 
   </Routes>

 </Router>   
  );
}

export default App;

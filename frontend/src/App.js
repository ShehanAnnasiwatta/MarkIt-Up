import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import Registraition from './components/Registraition';
import AdminLogin from './components/AdminsLogin';
import RequestTable from './components/RequestTable';
import AdminHome from './components/adminhomePage';
import AddAssi from './components/AddAsignment';
import AddStudent from './components/AddStudentToSys';

import Signup from './pages/Signup';
import  Login from './pages/Login';
import Header from './components/headers/Header';

function App() {
  return (

 <Router>  
<Header />
   <Routes>
    <Route exact path="/" element={<AdminLogin/>}></Route>
    <Route path="/register" element={<Registraition/>}></Route> 
    <Route path="/requestTable" element={<RequestTable/>}></Route>
    <Route path="/adminHome/:id" element={<AdminHome/>}></Route> 
    <Route path="/addAssi" element={<AddAssi/>}></Route> 
    <Route path="/addStudents" element={<AddStudent/>}></Route> 
   </Routes>

 </Router>   
  );
}

export default App;

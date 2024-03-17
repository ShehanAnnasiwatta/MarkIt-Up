import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import Registraition from './Components/Registraition';
import AdminLogin from './Components/AdminsLogin';
import RequestTable from './Components/RequestTable';
import AdminHome from './Components/AdminHomePage';
import AddAssi from './Components/AddAsignment'
import AddStudent from './Components/AddStudentToSys';

import Signup from './pages/Signup';
import  Login from './pages/Login';
import ShedulePresentation from './Components/ShedulePresentation';
import MarkingRubric from './Components/MarkingRubric';

function App() {
  return (

 <Router>  

   <Routes>
    <Route exact path="/" element={<AdminLogin/>}></Route>
    <Route path="/register" element={<Registraition/>}></Route> 
    <Route path="/requestTable" element={<RequestTable/>}></Route>
    <Route path="/adminHome/:id" element={<AdminHome/>}></Route> 
    <Route path="/addAssi" element={<AddAssi/>}></Route> 
    <Route path="/addStudents" element={<AddStudent/>}></Route>
    <Route path="/shedulepresentaion" element={<ShedulePresentation/>}></Route> 
    <Route path="/rubric" element={<MarkingRubric/>}></Route> 


   </Routes>

 </Router>   
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import Registraition from './components/Registraition';
import AdminLogin from './components/AdminsLogin';
import RequestTable from './components/RequestTable';
import AdminHome from './components/adminhomePage';
import AddAssi from './components/AddAsignment';
import AddStudent from './components/AddStudentToSys';
import Registraition from './components/Registraition';
import AdminLogin from './components/AdminsLogin';
import RequestTable from './components/RequestTable';
import AdminHome from './components/adminhomePage';
import AddAssi from './components/AddAsignment';
import AddStudent from './components/AddStudentToSys';

import StudentLogin from './Components/StudentLogin';
import StudentReg from './Components/StudentReg';
import Header from './components/headers/Header';
import ShedulePresentation from './Components/ShedulePresentation';
import MarkingRubric from './Components/MarkingRubric';

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
    <Route path="/shedulepresentaion" element={<ShedulePresentation/>}></Route> 
    <Route path="/rubric" element={<MarkingRubric/>}></Route> 


    <Route path="/stLog" element={<StudentLogin/>}></Route>
    <Route path="/stReg" element={<StudentReg/>}></Route> 
   </Routes>

 </Router>   
  );
}

export default App;

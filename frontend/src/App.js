import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import Registraition from './components/Registraition';
import AdminLogin from './components/AdminsLogin';
import RequestTable from './components/RequestTable';
import AdminHome from './components/adminhomePage';
import AddAssi from './components/AddAsignment';
import AddStudent from './components/AddStudentToSys';
import Header from './components/headers/Header';
import ShedulePresentation from './components/ShedulePresentation';
import MarkingRubric from './components/MarkingRubric';
import AddProject from './pages/projects/addProjects';
import ManageProject from './pages/projects/manageProject';
import AddResearch from './pages/Research/AddResearch';
import ManageResearch from './pages/Research/ManageResearchPaper';
import StudentLogin from './components/StudentLogin';
import StudentReg from './components/StudentReg';


function App() {
  return (

 <Router>  
{/* <Header /> */}
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
    <Route path="/addPro" element={<AddProject/>}></Route> 
    <Route path="/managePro" element={<ManageProject/>}></Route> 
    <Route path="/addRes" element={<AddResearch/>}></Route> 
    <Route path="/manageRes" element={<ManageResearch/>}></Route> 
   </Routes>

 </Router>   
  );
}

export default App;

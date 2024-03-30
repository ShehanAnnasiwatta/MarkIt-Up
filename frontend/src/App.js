import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import Registraition from './Components/Registraition';
import AdminLogin from './Components/AdminsLogin';
import RequestTable from './Components/RequestTable';
import AdminHome from './Components/AdminHomePage';
import AddAssi from './Components/AddAsignment';
import AddStudent from './Components/AddStudentToSys';
import Header from './Components/headers/Header';
import ShedulePresentation from './Components/ShedulePresentation';
import ViewPresentations from './Components/Presentations';
import MarkingRubric from './Components/MarkingRubric';
import AddProject from './pages/projects/addProjects';
import ManageProject from './pages/projects/manageProject';
import AddResearch from './pages/Research/AddResearch';
import ManageResearch from './pages/Research/ManageResearchPaper';
import StudentLogin from './Components/StudentLogin';
import StudentReg from './Components/StudentReg';
import EditPresentation from './Components/EditPresentation';


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
    <Route path="/shedulepresentation" element={<ShedulePresentation/>}></Route>
    <Route path="/presentations" element={<ViewPresentations/>}></Route>
    <Route path="/presentation/:id" element={<EditPresentation/>}></Route>
    <Route path="/createrubric" element={<MarkingRubric/>}></Route> 
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

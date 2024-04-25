import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import Registraition from './Components/Registraition';
import AdminLogin from './Components/AdminsLogin';
import RequestTable from './Components/RequestTable';
import AdminHome from './Components/AdminHomePage';
//import AddAssi from './Components/AddAsignment';
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
import SpeciaSelect from './Components/SpecializationSelect'

import SeSem1 from './Components/AdminSpeacializationHomePages/SeSem1';
import SeSem2 from './Components/AdminSpeacializationHomePages/SeSem2';
import ItSem1 from './Components/AdminSpeacializationHomePages/ItSem1';
import ItSem2 from './Components/AdminSpeacializationHomePages/ItSem2';
import IsSem1 from './Components/AdminSpeacializationHomePages/IsSem1';
import IsSem2 from './Components/AdminSpeacializationHomePages/IsSem2';
import DsSem1 from './Components/AdminSpeacializationHomePages/DsSem1';
import DsSem2 from './Components/AdminSpeacializationHomePages/DsSem2';
import CsSem1 from './Components/AdminSpeacializationHomePages/CsSem1';
import CsSem2 from './Components/AdminSpeacializationHomePages/CsSem2';
import CSNESem1 from './Components/AdminSpeacializationHomePages/CSNESem1';
import CSNESem2 from './Components/AdminSpeacializationHomePages/CSNESem2';

import SeSem1Add from './Components/AdminAssignmentAdd/SeSem1Add';
import SeSem2Add from './Components/AdminAssignmentAdd/SeSem2Add';
import DsSem1Add from './Components/AdminAssignmentAdd/DSSem1Add';
import DsSem2Add from './Components/AdminAssignmentAdd/DSSem2Add';
import CSNESem1Add from './Components/AdminAssignmentAdd/CSNESem1Add';
import CSNESem2Add from './Components/AdminAssignmentAdd/CSNESem2Add';
import IsSem1Add from './Components/AdminAssignmentAdd/IsSem1Add';
import IsSem2Add from './Components/AdminAssignmentAdd/IsSem2Add';
import ItSem1Add from './Components/AdminAssignmentAdd/ItSem1Add';
import ItSem2Add from './Components/AdminAssignmentAdd/ItSem2Add';
import CsSem1Add from './Components/AdminAssignmentAdd/CSSem1Add';
import CsSem2Add from './Components/AdminAssignmentAdd/CSSem2Add';

function App() {
  return (

 <Router>  
{/* <Header /> */}
   <Routes>
    <Route exact path="/" element={<AdminLogin/>}></Route>
    <Route path="/register" element={<Registraition/>}></Route>
    <Route path="/requestTable" element={<RequestTable/>}></Route>
    <Route path="/adminHome/:id" element={<AdminHome/>}></Route> 
    <Route path="/addStudents" element={<AddStudent/>}></Route>
    <Route path="/shedulepresentation" element={<ShedulePresentation/>}></Route>
    <Route path="/presentations" element={<ViewPresentations/>}></Route>
    <Route path="/createrubric" element={<MarkingRubric/>}></Route> 
    <Route path="/stLog" element={<StudentLogin/>}></Route>
    <Route path="/stReg" element={<StudentReg/>}></Route> 
    <Route path="/addPro" element={<AddProject/>}></Route> 
    <Route path="/managePro" element={<ManageProject/>}></Route> 
    <Route path="/addRes" element={<AddResearch/>}></Route> 
    <Route path="/manageRes" element={<ManageResearch/>}></Route> 
    <Route path="/SpecializationSelect" element={<SpeciaSelect/>}></Route>

    <Route path="/CSNESem1" element={<CSNESem1/>}></Route>
    <Route path="/CSNESem2" element={<CSNESem2/>}></Route>
    <Route path="/CsSem1" element={<CsSem1/>}></Route>
    <Route path="/CsSem2" element={<CsSem2/>}></Route>
    <Route path="/DsSem1" element={<DsSem1/>}></Route>
    <Route path="/DsSem2" element={<DsSem2/>}></Route>
    <Route path="/IsSem1" element={<IsSem1/>}></Route>
    <Route path="/IsSem2" element={<IsSem2/>}></Route>
    <Route path="/ItSem1" element={<ItSem1/>}></Route>
    <Route path="/ItSem2" element={<ItSem2/>}></Route>
    <Route path="/SeSem1" element={<SeSem1/>}></Route>
    <Route path="/SeSem2" element={<SeSem2/>}></Route>

    <Route path="/CSNESem1Add/:id" element={<CSNESem2Add/>}></Route>
    <Route path="/CSNESem2Add/:id" element={<CSNESem1Add/>}></Route>
    <Route path="/CsSem2Add/:id" element={<CsSem2Add/>}></Route>
    <Route path="/CsSem2Add/:id" element={<CsSem1Add/>}></Route>
    <Route path="/DsSem2Add/:id" element={<DsSem2Add/>}></Route>
    <Route path="/DsSem1Add/:id" element={<DsSem1Add/>}></Route>
    <Route path="/IsSem2Add/:id" element={<IsSem2Add/>}></Route>
    <Route path="/IsSem1Add/:id" element={<IsSem1Add/>}></Route>
    <Route path="/ItSem2Add/:id" element={<ItSem2Add/>}></Route>
    <Route path="/ItSem1Add/:id" element={<ItSem1Add/>}></Route>
    <Route path="/SeSem2Add/:id" element={<SeSem2Add/>}></Route>
    <Route path="/SeSem1Add/:id" element={<SeSem1Add/>}></Route>

   </Routes>

 </Router>   
  );
}

export default App;

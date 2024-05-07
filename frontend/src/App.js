import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Registraition from './Components/Registraition'
import AdminsLogin from './Components/AdminsLogin'
import RequestTable from './Components/RequestTable'
import AdminHomePage from './Components/AdminHomePage'
import AddAsignment from './Components/AddAsignment'
import AddStudentToSys from './Components/AddStudentToSys'
import Header from './Components/headers/Header'
import ShedulePresentation from './Components/ShedulePresentation'
import MarkingRubric from './Components/MarkingRubric'
import AddProject from './pages/projects/addProjects';
import ManageProject from './pages/projects/manageProject';
import AddResearch from './pages/Research/AddResearch';
import ManageResearch from './pages/Research/ManageResearchPaper';
import StudentLogin from './Components/AdminsLogin'
import EditMarks from './pages/Examiners/viewExaminerMark';
import ViewStudent from './pages/Supervisor/viewStudentDetails';
import ProgressBar from './Components/Progressbar';
import EditProject from './pages/projects/editProjects';
import EditResearch from './pages/projects/editProjects';
import AddExaminerMark from './pages/Examiners/addMarks';
import ManageMark from './pages/Examiners/manageMarks';
import AddProjectS from './pages/projects/addProjectSample';

function App() {
  return (

 <Router>  
 <Header />
    
   <Routes>
    <Route exact path="/" element={<AdminsLogin/>}></Route>
    <Route path="/register" element={<Registraition/>}></Route>
    <Route path="/requestTable" element={<RequestTable/>}></Route>
    <Route path="/adminHome/:id" element={<AdminHomePage/>}></Route> 
    <Route path="/addAssi" element={<AddAsignment/>}></Route> 
    <Route path="/addStudents" element={<AddStudentToSys/>}></Route>
    <Route path="/shedulepresentaion" element={<ShedulePresentation/>}></Route> 
    <Route path="/rubric" element={<MarkingRubric/>}></Route> 
    <Route path="/stLog" element={<StudentLogin/>}></Route>
    <Route path="/addPro" element={<AddProject/>}></Route> 
    <Route path="/managePro" element={<ManageProject/>}></Route> 
    <Route path="/addRes"element={<AddResearch/>}></Route> 
    <Route path="/manageMark"element={<ManageMark/>}></Route> 
    <Route path="/manageRes" element={<ManageResearch/>}></Route> 
    <Route path="/editMark/:id" element={<EditMarks/>}></Route> 
    <Route path="/viewStudent" element={<ViewStudent/>}></Route>
    <Route path="/editPro/:id" element={<EditProject/>}></Route>
    <Route path="/editRes/:id" element={<EditResearch/>}></Route>
    <Route path="/addMark" element={<AddExaminerMark/>}></Route>
    <Route path="/progressBar" element={<ProgressBar futureDate={new Date(2024, 2, 31)} />}></Route>
   </Routes>
  
 </Router>   
  );
}

export default App;

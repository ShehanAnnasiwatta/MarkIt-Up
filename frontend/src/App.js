import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Registraition from './Components/Registraition'
import AdminsLogin from './Components/AdminsLogin'
import RequestTable from './Components/RequestTable'
// import AdminHomePage from './Components/AdminHomePage'
// import AddAsignment from './Components/AddAsignment'
import AddStudentToSys from './Components/AddStudentToSys'
import Header from './Components/headers/Header'
import ShedulePresentation from './Components/ShedulePresentation'
import MarkingRubric from './Components/MarkingRubric'
import SelectRubric from './Components/SelectRubric';
import EditPresentation from './Components/EditPresentation'
import Marking from './Components/Marking';

import AdminLogin from './Components/AdminsLogin';
// import AdminHome from './Components/AdminHomePage';
//import AddAssi from './Components/AddAsignment';
import AddStudent from './Components/AddStudentToSys';
import ViewPresentations from './Components/Presentations';
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
// import StudentLogin from './Components/StudentLogin';
// import StudentReg from './Components/StudentReg';
import SpeciaSelect from './Components/SpecializationSelect'
import ManualStudentAdd from './Components/AddStudentsManually'
import AddStaff from './Components/AddStaffToSystem'
import UserProfileUpdate from './Components/UserProfileUpdate';
import Getreasearchpaper from './Components/ReserchPaperDetails'

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

import StudentSeSem1 from './Components/Students/SeSem1Student';
import StudentSeSem2 from './Components/Students/SeSem2Student';
import StudentDsSem1 from './Components/Students/DsSem1Student';
import StudentDsSem2 from './Components/Students/DsSem2Student';
import StudentCSNESem1 from './Components/Students/CSNESem1Student';
import StudentCSNESem2 from './Components/Students/CSNESem2Student';
import StudentIsSem1 from './Components/Students/IsSem1Student';
import StudentIsSem2 from './Components/Students/IsSem2Student';
import StudentItSem1 from './Components/Students/ItSem1Student';
import StudentItSem2 from './Components/Students/ItSem2Student';
import StudentCsSem1 from './Components/Students/CsSem1Student';
import StudentCsSem2 from './Components/Students/CsSem2Student';

import ExaminerDash from './pages/Examiner Dash/ExaminerDashboard';


function App() {
  return (

 <Router>  
    
   <Routes>
    <Route exact path="/" element={<AdminLogin/>}></Route>
    <Route path="/register" element={<Registraition/>}></Route>
    <Route path="/requestTable" element={<RequestTable/>}></Route>
    {/* <Route path="/adminHome/:id" element={<AdminHomePage/>}></Route>  */}
    {/* <Route path="/addAssi" element={<AddAsignment/>}></Route>  */}
    <Route path="/addStudents" element={<AddStudentToSys/>}></Route>
    {/* <Route path="/adminHome/:id" element={<AdminHome/>}></Route>  */}
    <Route path="/addStudents" element={<AddStudent/>}></Route>
    <Route path="/manualStudents" element={<ManualStudentAdd/>}></Route>
    <Route path="/userProfile/:sid" element={<UserProfileUpdate/>}></Route>

    <Route path="/shedulepresentation" element={<ShedulePresentation/>}></Route>
    <Route path="/presentations" element={<ViewPresentations/>}></Route>
    <Route path="/update/presentation/:id" element={<EditPresentation/>}></Route>
    <Route path="/createrubric" element={<MarkingRubric/>}></Route>
    <Route path="/selectrubric" element={<SelectRubric/>}></Route>
    <Route path="/marking/:id" element={<Marking/>}></Route>
    <Route path="/AddStaff" element={<AddStaff/>}></Route>

    <Route path="/stLog" element={<StudentLogin/>}></Route>
    <Route path="/addPro" element={<AddProject/>}></Route> 
    <Route path="/managePro" element={<ManageProject/>}></Route> 
    <Route path="/addRes"element={<AddResearch/>}></Route> 
    <Route path="/manageRes" element={<ManageResearch/>}></Route> 
    <Route path="/editMark/:id" element={<EditMarks/>}></Route> 
    <Route path="/viewStudent" element={<ViewStudent/>}></Route>
    <Route path="/editPro/:id" element={<EditProject/>}></Route>
    <Route path="/editRes/:id" element={<EditResearch/>}></Route>
    <Route path="/addMark" element={<AddExaminerMark/>}></Route>
    <Route path="/progressBar" element={<ProgressBar futureDate={new Date(2024, 2, 31)} />}></Route>
    <Route path="/SpecializationSelect/:aid" element={<SpeciaSelect/>}></Route>
    <Route path="/researchpaper" element={<Getreasearchpaper/>}></Route>

    <Route path="/CSNESem1/:aid" element={<CSNESem1/>}></Route>
    <Route path="/CSNESem2/:aid" element={<CSNESem2/>}></Route>
    <Route path="/CsSem1/:aid" element={<CsSem1/>}></Route>
    <Route path="/CsSem2/:aid" element={<CsSem2/>}></Route>
    <Route path="/DsSem1/:aid" element={<DsSem1/>}></Route>
    <Route path="/DsSem2/:aid" element={<DsSem2/>}></Route>
    <Route path="/IsSem1/:aid" element={<IsSem1/>}></Route>
    <Route path="/IsSem2/:aid" element={<IsSem2/>}></Route>
    <Route path="/ItSem1/:aid" element={<ItSem1/>}></Route>
    <Route path="/ItSem2/:aid" element={<ItSem2/>}></Route>
    <Route path="/SeSem1/:aid" element={<SeSem1/>}></Route>
    <Route path="/SeSem2/:aid" element={<SeSem2/>}></Route>

    <Route path="/CSNESem1Add/:id" element={<CSNESem2Add/>}></Route>
    <Route path="/CSNESem2Add/:id" element={<CSNESem1Add/>}></Route>
    <Route path="/CsSem2Add/:id" element={<CsSem2Add/>}></Route>
    <Route path="/CsSem1Add/:id" element={<CsSem1Add/>}></Route>
    <Route path="/DsSem2Add/:id" element={<DsSem2Add/>}></Route>
    <Route path="/DsSem1Add/:id" element={<DsSem1Add/>}></Route>
    <Route path="/IsSem2Add/:id" element={<IsSem2Add/>}></Route>
    <Route path="/IsSem1Add/:id" element={<IsSem1Add/>}></Route>
    <Route path="/ItSem2Add/:id" element={<ItSem2Add/>}></Route>
    <Route path="/ItSem1Add/:id" element={<ItSem1Add/>}></Route>
    <Route path="/SeSem2Add/:id" element={<SeSem2Add/>}></Route>
    <Route path="/SeSem1Add/:id" element={<SeSem1Add/>}></Route>

    <Route path="/StudentSeSem1/:sid" element={<StudentSeSem1/>}></Route>
    <Route path="/StudentSeSem2/:sid" element={<StudentSeSem2/>}></Route>
    <Route path="/StudentDsSem1/:sid" element={<StudentDsSem1/>}></Route>
    <Route path="/StudentDsSem2/:sid" element={<StudentDsSem2/>}></Route>
    <Route path="/StudentCSNESem1/:sid" element={<StudentCSNESem1/>}></Route>
    <Route path="/StudentCSNESem2/:sid" element={<StudentCSNESem2/>}></Route>
    <Route path="/StudentIsSem1/:sid" element={<StudentIsSem1/>}></Route>
    <Route path="/StudentIsSem2/:sid" element={<StudentIsSem2/>}></Route>
    <Route path="/StudentItSem1/:sid" element={<StudentItSem1/>}></Route>
    <Route path="/StudentItSem2/:sid" element={<StudentItSem2/>}></Route>
    <Route path="/StudentCsSem1/:sid" element={<StudentCsSem1/>}></Route>
    <Route path="/StudentCsSem2/:sid" element={<StudentCsSem2/>}></Route>
    

    <Route path="/ExaminerDash" element={<ExaminerDash/>}></Route>

   </Routes>
  
 </Router>   
  );
}

export default App;
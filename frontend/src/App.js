import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import Registraition from './Components/Registraition';
import AdminLogin from './Components/AdminsLogin';

import StudentLogin from './Components/StudentLogin';
import StudentReg from './Components/StudentReg';

function App() {
  return (

 <Router>  

   <Routes>
    <Route exact path="/" element={<AdminLogin/>}></Route>
    <Route path="/register" element={<Registraition/>}></Route>
    <Route path="/stLog" element={<StudentLogin/>}></Route>
    <Route path="/stReg" element={<StudentReg/>}></Route> 
   </Routes>

 </Router>   
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import Registraition from './Components/Registraition';
import AdminLogin from './Components/AdminsLogin';
import RequestTable from './Components/RequestTable';

import Signup from './pages/Signup';
import  Login from './pages/Login';

function App() {
  return (

 <Router>  

   <Routes>
    <Route exact path="/" element={<AdminLogin/>}></Route>
    <Route path="/register" element={<Registraition/>}></Route> 
    <Route path="/requestTable" element={<RequestTable/>}></Route> 
   </Routes>

 </Router>   
  );
}

export default App;

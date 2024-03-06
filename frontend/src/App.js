import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AdminLogin from './Components/AdminsLogin'
import Registration from './Components/Registraition';
function App() {
  return (

 <Router>  

   <Routes>
    <Route exact path="/" element={<AdminLogin/>}></Route>
    <Route path="/register" element={<Registration/>}></Route> 
   </Routes>

 </Router>   
  );
}

export default App;

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
import { useParams} from 'react-router-dom'

import HeadingAdmin from './headers/HeaderForAdmin'


initMDB({ Dropdown, Collapse });

function AdminHomePage() {

  const[CurrentUser,SetAllUserData] = useState([])

  const { id } = useParams();
  

  console.log("Current user id AdminHome Page- ")
  console.log(id);

       const UserData=()=>{
         axios.get(`http://localhost:3005/normalroutes/oneUserEmail/${id}`).then((res)=>{
            SetAllUserData(res.data);
           // console.log(res.data);
         }).catch((err)=>{
            console.log(err);
         });
       }


       useEffect(()=>{
        UserData();
       },[]);

       console.log(CurrentUser);

       const RedirectToAddAssignment=()=>{
         window.location.href="";
       };
    
  return (
    <div>
      <div>
    <HeadingAdmin/>
      </div>
<div style={{background:'yellow',height:'80px'}}>

<Button variant="contained" style={{margin:'30px'}} onClick={RedirectToAddAssignment}>
      + Add Assignment
</Button>

<Button variant="contained" style={{margin:'30px'}}>
      + Add Announcement
</Button>

<Button variant="contained" style={{margin:'30px'}}>
      + Add Students
</Button>

</div>

    </div>
  )
  
} 
export default AdminHomePage;

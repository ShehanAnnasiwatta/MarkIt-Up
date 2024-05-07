import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
import { useParams} from 'react-router-dom'
import { AppBar, Avatar, Box, IconButton, Toolbar, Tab, Tabs, Badge, Menu, MenuItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Add from '@mui/icons-material/Add';

initMDB({ Dropdown, Collapse });

function AdminHomePage() {

  const[CurrentUser,SetAllUserData] = useState([])
  
  const { id } = useParams();

  console.log("Current user id AdminHome Page- ")
  console.log(id);


  const [value, setValue] = useState('1');
  const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl)

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    const navLabel = ['Dashboard', 'Staff', 'Research', 'Assessments', 'Gradings', 'Statistics','RequestTable','AddThems']
    const tabStyle = {
        textTransform: "capitalize",
        '&:hover': {
            color: grey['900']
        }
    }

    const menuList = [
        {
            label: "Profile",
            icon: <PersonIcon />
        },
        {
            label: "Sign out",
            icon: <LogoutIcon />
        },
    ]

       const UserData=()=>{
         axios.get(`http://localhost:3005/normalroutes/oneUserEmail/${id}`).then((res)=>{
            SetAllUserData(res.data);
           // console.log(res.data);
         }).catch((err)=>{
            console.log(err);
         });
       }


       const SignOut=()=>{
        axios.post("http://localhost:3005/loginAndSign/signout").then((res)=>{
          console.log("Signot success")

          setTimeout(()=>{
            window.location.href = '/';
          },1000)
        }).catch((err)=>{
          console.log("Signot err" +err)
        })
       }


       useEffect(()=>{
        UserData();
       },[]);

       console.log(CurrentUser);

       const renderTables = () => {
        const tables = [];
    
        // Loop to create 15 tables
        for (let i = 1; i <= 15; i++) {
          tables.push(
            <div key={i}>
              <table style={{ width: '100%', marginTop: '150px' }}>
                <thead>
                  <tr>
                    <th style={{ backgroundColor: 'green', color: 'white'}}>
                      <h3>Week {i}</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    <div>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap'}}>
                    <a href={`/addAssi/${i}`}><Button startDecorator={<Add />} color="primary">+ Add Assignment</Button></a>
                    </Box>
                    </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
    
        return tables;
      };
    

  return (
    <div>
     
     <div>
        {renderTables()}
     </div>
    
</div>
  )
  
} 

export default AdminHomePage;

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
import { useParams} from 'react-router-dom'

import HeadingAdmin from './headers/HeaderForAdmin'

import { AppBar, Avatar, Box, IconButton, Toolbar, Tab, Tabs, Badge, Menu, MenuItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';


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

       const RedirectToAddAssignment=()=>{
         window.location.href="";
       };
    
  return (
    <div>
     
     <div> 
        
     <AppBar
            sx={{
                bgcolor: "#ffff"
            }}
        >
            <Toolbar
                sx={{
                    margin: "0 auto",
                    padding: { lg: "0px", xl: "0px" },
                    width: "90%",
                    maxWidth: "1320px",
                    height: "80px",
                }}
            >
                <Box
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    padding="0 5px"
                    columnGap="200px"
                >
                    <Box
                        width="20%"
                    >

                    </Box>

                    <Box width="100%">
                        <Tabs>
                            {
                                navLabel.map(lableIndex => (
                                    <Tab key={lableIndex} label={lableIndex} sx={tabStyle} disableRipple/>
                                ))
                            }

                        </Tabs>
                    </Box>

                    <Box
                        width="12%"
                        maxWidth="122px"
                        display="flex"
                        flexDirection="row"
                        columnGap="5px"
                        alignItems="center"
                        justifyContent="end"
                    >

                        <IconButton>
                            <Badge badgeContent={1} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>


                        <IconButton
                            onClick={handleOpen}
                            id='icon-menu'
                            aria-controls={open ? 'iocn-menu' : undefined}
                            aria-haspopup={true}
                            aria-expanded={open ? true : undefined}
                            sx={{
                                padding: "4px",
                                height: "40px",
                                width: "40px",
                            }}
                        >
                            <Avatar sx={{
                                height: "32px",
                                width: "32px",
                            }}>
                               {String(CurrentUser.Fname)[0]}
                            </Avatar>
                        </IconButton>
                        <Menu
                            id="icon-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            sx={{
                                '& .MuiPaper-root': {
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    width: "300px",
                                    padding: "0px",
                                    borderRadius: "20px"
                                }
                            }}
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                borderBottom={1}
                                margin="5px 0px"
                                borderColor="divider"
                            >
                                <Avatar sx={{ height: "60px", width: "60px" }} >
                                {String(CurrentUser.Fname)[0]}
                                </Avatar>
                                <Typography fontSize="18px">
                                    {CurrentUser.Fname+" "+CurrentUser.Lname}
                                </Typography>
                                <Typography fontSize="13px" marginBottom="5px ">
                                   
                                </Typography>
                            </Box>
                            {
                                menuList.map(menu => (
                                    <MenuItem key={menu.label} onClick={menu.label === "Sign out" ?SignOut:undefined} sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        columnGap: "10px",
                                        margin: "4px 50px 4px 4px",
                                        borderRadius: "10px"
                                    }}>
                                        {menu.icon}
                                        {menu.label}
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>

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

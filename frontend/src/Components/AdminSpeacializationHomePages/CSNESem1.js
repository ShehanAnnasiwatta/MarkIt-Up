import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Tabs, IconButton, Badge, Avatar, Box, Menu, MenuItem, Typography, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Add from '@mui/icons-material/Add';
import axios from 'axios';
import { useEffect } from 'react';
import PdfIcon from '../Images/PdfICON.png'
import Card from '@mui/material/Card';
import Swal from 'sweetalert2';
import { Stack } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';

const ProfileMenu = (props) => {
    const menuList = [
        {
            label: "Profile",
            icon: <PersonIcon />
        },
        {
            label: "Sign out",
            icon: <LogoutIcon />
        },
    ];

    return (
        <Menu
            id="icon-menu"
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.onClose}
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
                margin="5px"
                borderColor="divider"
            >
                <Avatar sx={{ height: "60px", width: "60px" }} >
                    S
                </Avatar>
                <Typography fontSize="18px">
                    Shehan Annasiwatta
                </Typography>
                <Typography fontSize="13px" marginBottom="5px ">
                    annasiwattasa@gmail.com
                </Typography>
            </Box>
            {menuList.map(menu => (
                <MenuItem key={menu.label} sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "10px",
                    margin: "4px 50px 4px 4px",
                    borderRadius: "10px"
                }}>
                    {menu.icon}
                    {menu.label}
                </MenuItem>
            ))}
        </Menu>
    );
}

function CSNESem1() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [assignmentData,setAssignmentData]=useState([]);
    const open = Boolean(anchorEl);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const Datagetting=async()=>{
        axios.get('http://localhost:3005/AddAssi/GetCSNESem1').then((res)=>{
          setAssignmentData(res.data);
          console.log(res.data);
          console.log("Assignment data get Success");
        }).catch((err)=>{
          console.log(err);
          console.log("assignment data not get");
        })
      }
    
      useEffect(()=>{ 
        Datagetting();
      },[])

      const DeleteItems=(id)=>{
        axios.delete(`http://localhost:3005/AddAssi/CSNESem1Delete/${id}`).then((res)=>{
          console.log(res.data.message);
          console.log("Assignment data delete Success");
          if(res.data.message === "Assignment deleted"){

            Swal.fire({
                icon: "success",
                title: "Assignment Delete Success",
                text: `${res.data.message}`,
              });
              Datagetting();
          }
          else{
            Swal.fire({
                icon: "error",
                title: "Assignment Not Deleted",
                text: `${res.data.message}`,
              });
          }

       
        }).catch((err)=>{
          console.log(err);
          console.log("Assignment data not delete");

          Swal.fire({
            icon: "error",
            title: "Assignment Not Deleted",
            text: "Please try Again",
          });

        })
    }
      
    const{aid}=useParams();
    console.log(aid);

    const getUserData = async () => {

    await axios.get(`http://localhost:3005/loginAndSign/oneStaff/${aid}`).then((res)=>{
            console.log(res.data.role1);         
     }).catch((err)=>{
            console.log(err);
     })
    }

    useEffect(() => {
        getUserData();
    }, []);
      

    const renderTables = () => {
        const tables = [];

        // Loop to create 15 tables
        for (let i = 1; i <= 15; i++) {
            const weekData= assignmentData.filter(datas => datas.week === i.toString());
            tables.push(
                <div key={i}>
                    <table style={{ width: '100%', marginTop: '150px' }}>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'green', color: 'white' }}>
                                    <h3>Week {i}</h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>

                                    <div>
                                     {weekData.length===0 ? (
                                        <div> </div>
                                     ):(<Box sx={{ minWidth: 275 ,border:2,margin:1}}>
                                        <Card variant="outlined">
                                  
                                        {weekData.map((data, key) => (
                                                                              <div key={key}>
                                                                                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                                  
                                                                                  {data.url && (
                                              <div style={{margin:'10px'}}>
                                                  <img
                                                      src={PdfIcon}
                                                      alt="Pdf Icon"
                                                      style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                                                      onClick={() => window.open(data.url, '_blank')}
                                                  />
                                              </div>
                                          )}
                                  
                                  <div style={{margin:'10px'}}>
                                  {data.sdate && (
                                      <p>End Date: {new Date(data.edate).toLocaleString()}</p>
                                  )}

<Stack sx={{width:100,marginLeft:2}}>
                                     <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => DeleteItems(data._id)}>Delete</Button>
                                     </Stack>
                                  </div>
                                                                              </div>   
                                                                          ))}
                                  
                                        </Card>
                                      </Box>)}    

                                    </div>


                                    <a href={`/CSNESem1Add/${i}`}> <Button startIcon={<Add />} color="primary">Add Assignment</Button></a>
                                    <Button href={`/createrubric`} startIcon={<Add />} color="primary"> Add Marks</Button>
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
                        <Box width="50%">
                            <Tabs>
                                <Tab label="Dashboard" />
                                <Tab label="Staff" />
                                <Tab label="Research" />
                                <Tab label="Assessments" />
                                <Tab label="Gradings" />
                                <Tab label="Statistics" />
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
                                    S
                                </Avatar>
                            </IconButton>
                            <ProfileMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <div>
                {renderTables()}
            </div>
           
        </div>
    );
}

export default CSNESem1;

import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Tabs, IconButton, Badge, Avatar, Box, Menu, MenuItem, Typography, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
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

const SpecializationSelect = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { aid } = useParams();
  console.log(aid);
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
            <div style={{ border: "2px solid black", width: "75%", margin: "100px auto", padding: "100px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                    <a href={`/SeSem1/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Software Engenearing Sem 1</Button></a>
                    <a href={`/SeSem2/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Software Engenearing Sem 2</Button></a>
                    <a href={`/ItSem1/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Information Technology Sem 1</Button></a>
                    <a href={`/ItSem2/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Information Technology Sem 2</Button></a>
                    <a href={`/IsSem1/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Information Systems Sem 1</Button></a>
                    <a href={`/IsSem2/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Information Systems Sem 2</Button></a>
                    <a href={`/CsSem1/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Cyber Security Sem 1</Button></a>
                    <a href={`/CsSem2/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Cyber Security Sem 2</Button></a>
                    <a href={`/DsSem1/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Data Science Sem 1</Button></a>
                    <a href={`/DsSem2/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Data Science Sem 2</Button></a>
                    <a href={`/CSNESem1/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Computer Systems and Network Engineering Sem 1</Button></a>
                    <a href={`/CSNESem2/${aid}`}><Button variant="outlined" sx={{ width: '400px' }}>Computer Systems and Network Engineering Sem 2</Button></a>
                </Box>
            </div>
        </div>
    );
}

export default SpecializationSelect;

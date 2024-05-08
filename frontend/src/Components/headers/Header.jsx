import { AppBar, Avatar, Box, IconButton, Toolbar, Tab, Tabs, Badge } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react'
import ProfileMenu from '../menus/ProfileMenu';
import Staff from '../menus/Staff';

const Header = () => {
    const [value, setValue] = useState('1');
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElStaff, setAnchorElStaff] = useState(null);

    const open = Boolean(anchorEl)
    const openStaff = Boolean(anchorElStaff)

    const handleOpenIcon = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleOpenTabs = (e) => {
        setAnchorElStaff(e.currentTarget)
    }

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    const navLabel = ['Dashboard', 'Staff', 'Research', 'Assessments', 'Gradings', 'Statistics']
    const tabStyle = {
        textTransform: "capitalize",
        '&:hover': {
            // fontWeight: "bold",
            color: grey['900']
        }
    }
    return (
        <AppBar
            sx={{
                bgcolor: "#ffff"
            }}
        >
            <Toolbar
                sx={{
                    // bgcolor: lightBlue['100'],
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
                            {
                                navLabel.map(lableIndex => (
                                    <Tab
                                        key={lableIndex}
                                        label={lableIndex}
                                        sx={tabStyle}
                                        disableRipple
                                        aria-controls={open ? 'staff-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleOpenTabs} />
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
                            onClick={handleOpenIcon}
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
                        <ProfileMenu anchorEl={anchorEl} open={open} setAnchorEl={setAnchorEl}/>
                        <Staff anchorEl={anchorElStaff} open={openStaff} setAnchorElStaff={setAnchorElStaff} />

                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
    );
}

export default Header;

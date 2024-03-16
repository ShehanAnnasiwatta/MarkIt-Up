import { AppBar, Avatar, Box, IconButton, Toolbar, Tab, Tabs } from '@mui/material';
import { grey } from '@mui/material/colors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react'

const Header = () => {
    const [value, setValue] = useState('1');

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    const navLabel = ['Dashboard', 'Staff', 'Research', 'Assessments', 'Gradings', 'Statistics']
    const tabStyle = {
        textTransform: "capitalize",
        '&:hover': {
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
                                    <Tab key={lableIndex} label={lableIndex} sx={tabStyle} />
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
                            <NotificationsIcon />
                        </IconButton>


                        <IconButton
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

                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
    );
}

export default Header;

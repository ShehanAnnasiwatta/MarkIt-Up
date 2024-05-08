import { Menu, MenuItem, Box, Avatar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileMenu = (props) => {

    const handleClose = () => {
        props.setAnchorEl(null);
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
    return (
        <Menu
            id="icon-menu"
            anchorEl={props.anchorEl}
            open={props.open}
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
                    borderRadius:"20px"
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
                    S
                </Avatar>
                <Typography fontSize="18px">
                    Shehan Annasiwatta
                </Typography>
                <Typography fontSize="13px" marginBottom="5px ">
                    annasiwattasa@gmail.com
                </Typography>
            </Box>
            {
                menuList.map(menu => (
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
                ))
            }
        </Menu>
    );
}

export default ProfileMenu;

import { Menu, MenuItem, Box, Avatar, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

const Staff = ({ anchorEl, open, setAnchorElStaff }) => {

    const navigate = useNavigate()
    const handleClose = () => {
        setAnchorElStaff(null);
    }

    const menuList = [
        {
            label: "Add Staff",
            icon: <AddCircleOutlineIcon />,
            route: '/AddStaff'
        },
    ]

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
                '& .MuiPaper-root': {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "200px",
                    padding: "0px",
                }
            }}
        >
            <Box
                sx={{
                    padding: "10px"
                }}
            >

                {
                    menuList.map((menu) => (
                        <MenuItem
                            key={menu.label}
                            sx={{
                                flexDirection: "row",
                                columnGap: "10px",
                                borderRadius: "10px"
                            }}
                            onClick={() => navigate(menu.route)}
                        >
                            {menu.icon}
                            {menu.label}
                        </MenuItem>
                    ))
                }
            </Box>

        </Menu>
    )
}

export default Staff
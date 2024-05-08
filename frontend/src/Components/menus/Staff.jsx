import { Menu, MenuItem, Box, Avatar, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Staff = ({ anchorEl, open, setAnchorElStaff }) => {

    const handleClose = () => {
        setAnchorElStaff(null);
    }

    const menuList = [
        {
            label: "Add Staff",
            icon: <AddCircleOutlineIcon />
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
                                flexDirection:"row",
                                columnGap:"10px",
                                borderRadius: "10px"
                            }}
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
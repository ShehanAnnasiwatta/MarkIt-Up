import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function UserProfileUpdate() {

    const [studentData, setStudentData] = useState([]);
    const{sid}=useParams();
    const [updateProfile, setupdateProfile] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getStudentData = () => {
        axios.get(`http://localhost:3005/normalroutes/oneStudent/${sid}`)
            .then((res) => {
               console.log(res.data);
                setStudentData(res.data);
            })
            .catch((err) => {
                console.log("Student data fetch error" + err);
            });
    }

    useEffect(() => {
        getStudentData();
    }, []);

      
      const card = (
        <React.Fragment>
          <CardContent>
            <div style={{display:'flex'}}>
            
            
          <Stack direction={'row'}> 

<Stack spacing={2}>
<Avatar sx={{ width: 150, height: 150,fontSize:40}}>{studentData?.StudentName?.charAt(0)}</Avatar>
<Typography variant="h4" component="div" sx={{color:'#8B0000'}}>{studentData.StudentName}</Typography>
</Stack>

</Stack>

<Stack sx={{marginLeft:'200px',border:1,borderRadius:5,padding:'50px'}}>
<Typography>
  Email :- {studentData.Email}
</Typography>

<Typography>
Registration No :- {studentData.RegistrationNo}
</Typography>

<Button variant="contained" onClick={handleOpen} sx={{marginTop:'150px'}}>update profile</Button>
</Stack>


            
            </div>                   
          </CardContent>

        </React.Fragment>
      );
      

  return (
    <div>

        <div>
       

          <div>
          <Box sx={{ minWidth:100, margin: '150px' }}>
                <Card variant="outlined">{card}</Card>
          </Box>
          </div>



        </div>

        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

         <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
         <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Your Password
          </Typography>
         </div>

          <div>
          <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <div style={{margin:'40px'}}>
      <TextField fullWidth label="Add New Password" id="fullWidth"/>
      </div>
      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
      <Button variant="contained" onClick={handleOpen} sx={{marginTop:'10px'}}>update password</Button>
      </div>
    </Box>
          </div>
        </Box>
      </Modal>
    </div>


      
    </div>
  )
}

export default UserProfileUpdate

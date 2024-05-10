import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';


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
  const [studentData, setStudentData] = useState({});
  const { sid } = useParams();
  const [open, setOpen] = useState(false);
  const [updatePass, setUpdatePass] = useState('');
  const [idNumber, setIdNumber] = useState('');

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
  }, [sid]);

  const updatePassword = (id) => {
    handleOpen();
    setUpdatePass(id);
    console.log(id);
  }

  const handleUpdatePassword = (id) => {
    axios.put(`http://localhost:3005/normalroutes/updateStudent/${id}`, { IdNumber: idNumber })
      .then((res) => {
        console.log(res.data);
        console.log("Password updated success");
        if(res.data.message === 'data updated') {
          Swal.fire({
            icon: "success",
            title: `${studentData.StudentName} Password Updateded`,
            text:`${res.data.message }`
          });
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Password Updation Failed",
            text:`Data not update`
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Password update error");
        Swal.fire({
          icon: "error",
          title: "Password Updation Failed",
          text:`Data not update`
        });
      })
      .finally(() => {
        handleClose();
      });
  }

  const card = (
    <CardContent>
      <div style={{ display: 'flex' }}>
        <Stack direction={'row'} spacing={2}>
          <Stack spacing={2}>
            <Avatar sx={{ width: 150, height: 150, fontSize: 40 }}>{studentData?.StudentName?.charAt(0)}</Avatar>
            <Typography variant="h4" component="div" sx={{ color: '#8B0000' }}>{studentData.StudentName}</Typography>
          </Stack>
        </Stack>

        <Stack sx={{ marginLeft: '200px', border: 1, borderRadius: 5, padding: '50px' }}>
          <Typography>Email: {studentData.Email}</Typography>
          <Typography>Registration No: {studentData.RegistrationNo}</Typography>
          <Button variant="contained" onClick={() => { updatePassword(studentData._id) }} sx={{ marginTop: '150px' }}>Update Profile</Button>
        </Stack>
      </div>
    </CardContent>
  );

  return (
    <div>
      <Box sx={{ minWidth: 100, margin: '150px' }}>
        <Card variant="outlined">{card}</Card>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Your Password
          </Typography>

          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <div style={{ margin: '40px' }}>
              <TextField fullWidth label="Add New Password" id="fullWidth" onChange={(e) => { setIdNumber(e.target.value) }} />
            </div>
            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Button variant="contained" onClick={() => { handleUpdatePassword(updatePass) }} sx={{ marginTop: '10px' }}>Update Password</Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default UserProfileUpdate;

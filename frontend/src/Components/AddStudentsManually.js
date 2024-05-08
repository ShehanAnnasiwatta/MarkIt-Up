import * as React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from 'antd/es/typography/Typography';
import { display } from '@mui/system';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddStudentsManually() {
    const [StudentName,setStudentName]=useState('');
    const [Email,setEmail]=useState('');
    const [IdNumber,setIdNumber]=useState('');
    const [RegistrationNo,setRegistrationNumber]=useState('');
    const [Specialization,setSpecialization]=useState('');
    const [Semester,setSemester]=useState('');


    const DataAdded=async()=>{

        const item={
            StudentName:StudentName,
            Email:Email,
            IdNumber:IdNumber,
            RegistrationNo:RegistrationNo,
            Specialization:Specialization,
            Semester:Semester,
        }

        await axios.post('http://localhost:3005/normalroutes/addStudent', item).then((res)=>{
            console.log(res.data.message);
           if(res.data.message==="Student data added"){
            Swal.fire({
                title: 'success',
                text: 'Student Data Added To the System',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
           }else if(res.data.message==="Student already exists"){
            Swal.fire({
                title: 'warning',
                text: 'Student Already Exists in the System',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
           }else{
            Swal.fire({
                title: 'error',
                text: 'Student Data Not Added To the System',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
           }
        }).catch((err)=>{
            console.log("Student Data Not Added To the System"+err);
        })
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Box
            sx={{
              width: 1000,
              maxWidth: '100%',
              border: '1px solid',
              padding: '50px'
            }}
          >
             <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                 <h2>Add Student Details</h2>
    </div>
            <TextField fullWidth label="Student Name" id="Student Name" sx={{ margin: '10px' }} onChange={(e)=>{setStudentName(e.target.value)}}/>
            <TextField fullWidth label="Email" id="Email" sx={{ margin: '10px' }} onChange={(e)=>{setEmail(e.target.value)}}/>
            <TextField fullWidth label="Id Number" id="Id Number" sx={{ margin: '10px' }} onChange={(e)=>{setIdNumber(e.target.value)}}/>
            <TextField fullWidth label="Registration Number" id="Registration Number" sx={{ margin: '10px' }} onChange={(e)=>{setRegistrationNumber(e.target.value)}}/>
            <TextField fullWidth label="Specialization" id="Specialization" sx={{ margin: '10px' }} onChange={(e)=>{setSpecialization(e.target.value)}}/>
            <TextField fullWidth label="Semester" id="Semester" sx={{ margin: '10px' }} onChange={(e)=>{setSemester(e.target.value)}}/>
    
            <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
            <Stack sx={{ width: '100px', margin: '20px' }}>
  <Button variant="contained" endIcon={<SendIcon />} onClick={() => DataAdded()}>
    Add
  </Button>
</Stack>

            </div>
          </Box>
        </div>
      );
}

export default AddStudentsManually

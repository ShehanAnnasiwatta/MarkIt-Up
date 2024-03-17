import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Swal from 'sweetalert2';
import axios from "axios";

function StudentReg() {

    const [Sname, setSname] = useState('');
    const [Password, setPassword] = useState('');
    const [Repassword, setRepassword] = useState('');
    const [RegisterNum, setRegisterNum] = useState('');
    const [Email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [Phone, setPhone] = useState('');
    const [Batch, setBatch] = useState('');
    const [Specialization, setSpecialization] = useState('');
    const [matchpass, setMatchpass] = useState('');

    const insertStudentData = async (e) => {
        e.preventDefault();

        const StudentData = {
            Sname: Sname,
            Password: Password,
            Repassword: Repassword,
            RegisterNum: RegisterNum,
            Email: Email,
            Phone: Phone,
            Batch: Batch,
            Specialization: Specialization
        }

        console.log(StudentData);

        try {
            const AllData = await axios.post("http://localhost:3005/normalroutes/add", StudentData);
            console.log(AllData.data);
            testAlert("success", "Registration success")

            setTimeout(() => {
                window.location.href = '/';
            }, 1500);

        } catch (error) {
            console.log("Registration Error: " + error);
            testAlert("error", "Not Registered")
        }

    }

    const checkTwoPass = (e) => {
        e.preventDefault();

        if (Password === Repassword) {
            insertStudentData();
        } else {
            setMatchpass("Re-entered password is incorrect");
        }

    }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    //     emailValidation(e.target.value);
    // }

    // const emailValidation = (value) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //     if (!emailRegex.test(value)) {
    //         setEmailError("Please enter a valid email");
    //     }
    // }

    const testAlert = (icon, title) => {
        Swal.fire({
            position: "center",
            icon: icon,
            title: title,
            showConfirmButton: false,
            timer: 1500
        });

    }

    const countries = [
        { label: 'Examiner' },
        { label: 'Member' },
        { label: 'Supervisor' },
        { label: 'Co-Supervisor' },
    ];

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '60ch' },
                border: '1px solid',
                width: '1200px',
                margin: 'auto',
                borderRadius: '10px',
                textAlign: 'center',
                padding: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '150px',
                marginBottom: '50px'
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-error"
                    label="Student Name"
                    onChange={(e) => { setSname(e.target.value) }}
                    required
                />

                <TextField
                    id="outlined-error"
                    label="Password"
                    sx={{
                        '& .MuiInputLabel-root': {
                            textAlign: 'center',
                        },
                    }}
                    onChange={(e) => { setPassword(e.target.value) }}
                    required
                />

            </div>

            <div>
                <TextField
                    id="outlined-error"
                    label="Email"
                    //onChange={handleEmailChange}
                    helperText={emailError}
                    error={Boolean(emailError)}
                    required
                />

                <TextField
                    id="outlined-error-helper-text"
                    label="Registration Number"
                    onChange={(e) => { setRegisterNum(e.target.value) }}
                    required
                />
            </div>

            <div>
                <TextField
                    id="outlined-error"
                    label="Phone"
                    onChange={(e) => { setPhone(e.target.value) }}
                    required
                />

                <TextField
                    id="outlined-error-helper-text"
                    label="Re Enter Password"
                    onChange={(e) => { setRepassword(e.target.value) }}
                    error={Boolean(matchpass)}
                    helperText={matchpass}
                    required
                />
            </div>

            <div>
                <TextField
                    id="outlined-error"
                    label="Specialization"
                    onChange={(e) => { setSpecialization(e.target.value) }}
                    required
                />
            </div>

            <div>

                {/* <Autocomplete

                id="Position Select"
                sx={{ width:'60ch',m:'1',paddingLeft:'350px' }}

                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}

                onChange={(event, newValue) => {
                // Update the state when an option is selected
                setRole(newValue.label);
                console.log(newValue);
                }}

                renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                {option.label}
                </Box>
                )}
                renderInput={(params) => (
                <TextField
                {...params}
                label="Choose Your Role"
                inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
                }}
                />
                )}
                /> */}

            </div>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: '100px', margin: '10px' }}
                onClick={(e) => checkTwoPass(e)} 
            >
                Register
            </Button>



            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: '100px', margin: '10px', bgcolor: 'red', '&:hover': { bgcolor: 'red' } }}
                onClick={(e) => insertStudentData(e)} 
            >
                Cancel
            </Button>

   
   </Box>
   
   )
 
 
 }
 
 export default StudentReg
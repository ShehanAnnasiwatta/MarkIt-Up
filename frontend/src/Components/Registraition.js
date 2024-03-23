import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Swal from 'sweetalert2';
import axios from "axios";
import Input from './cutomisedTags/Input';
import { grey } from '@mui/material/colors';

function Registraition() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setpass] = useState('');
  const [Repassword, setRePass] = useState('');
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [phone, setphone] = useState('');
  const [role, setRole] = useState('');
  const [matchpass, setMatchpass] = useState('');
  const [showPW, setShowPW] = useState(false)
  const [showConfirmPW, setShowConfirmPW] = useState(false)

  const insertUsersData = async (e) => {
    e.preventDefault();

    const UsersData = {
      Fname: Fname,
      Lname: Lname,
      password: password,
      email: email,
      phone: phone,
      role: role
    }

    console.log(UsersData);

    try {
      const AllData = await axios.post("http://localhost:3005/loginAndSign/addReg", UsersData);
      console.log(AllData.data);
      testAlert("success", "Registration sucess")

      setTimeout(() => {
        window.location.href = '/';
      }, 1500);

    } catch (error) {
      console.log("Registration Error: " + error);
      testAlert("error", "Not Registered")
    }

  }

  const cheackTwoPass = (e) => {

    e.preventDefault();

    if (password === Repassword) {
      insertUsersData();
    } else {
      setMatchpass("Re entered password is incorrect");
    }

  }



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    emailvalidation(e.target.value);
  }

  const emailvalidation = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email");
    }
  }
  const handleVisibility = () => {
    setShowPW(!showPW)
  }

  const handleConfirmPwVisibility = () => {
    setShowConfirmPW(!showConfirmPW)
  }
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
    { label: 'Examinar' },
    { label: 'Member' },
    { label: 'Supervisor' },
    { label: 'Co-Supervisor' },
  ];

  const textStyle = {
    '& .MuiOutlinedInput-root': {
      height: "45px",
      borderRadius: "10px"
    }
  }
  const root = {
    '& -webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    ' & -webkit-inner-spin-button': {
      '-webkit-appearance': 'none'
    }

  }
  const roles = [
    'Examinar',
    'Member',
    'Supervisor',
    'Co-Supervisor'
  ]

  return (

    //     <Box
    //     component="form"
    //     sx={{
    //       '& .MuiTextField-root': { m: 1, width: '60ch' },
    //       border: '1px solid',
    //       width: '1200px',
    //       margin: 'auto',
    //       borderRadius: '10px',
    //       textAlign: 'center',
    //       padding: '10px',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       marginTop: '150px',
    //       marginBottom: '50px'
    //     }}
    //     noValidate
    //     autoComplete="off"
    //   >
    //     <div>
    //     <TextField
    //     id="outlined-error"
    //     label="First name"
    //     onChange={(e)=>{setFname(e.target.value)}} 
    //     required
    // />

    // <TextField
    //     id="outlined-error"
    //     label="Last name"
    //     sx={{
    //         '& .MuiInputLabel-root': {
    //             textAlign: 'center',
    //         },
    //     }}
    //     onChange={(e)=>{setLname(e.target.value)}} 
    //     required
    // />

    //     </div>

    //     <div>
    //       <TextField
    //         id="outlined-error"
    //         label="Email"
    //         onChange={handleEmailChange}
    //         helperText={emailError}
    //         error={Boolean(emailError)}
    //         required
    //       />

    //       <TextField
    //         id="outlined-error-helper-text"
    //         label="Phone number" 
    //         onChange={(e)=>{setphone(e.target.value)}}      
    //         required
    //       />
    //     </div>

    //     <div>
    //       <TextField
    //         id="outlined-error"
    //         label="Password"    
    //         onChange={(e)=>{setpass(e.target.value)}} 
    //         required
    //       />

    //       <TextField
    //         id="outlined-error-helper-text"
    //         label="Re Enter Password"  
    //         onChange={(e)=>{setRePass(e.target.value)}}   
    //         error={Boolean(matchpass)}   
    //         helperText={matchpass}
    //         required
    //       />
    //     </div>

    //     <div>

    //     <Autocomplete

    //       id="Possition Select"
    //       sx={{ width:'60ch',m:'1',paddingLeft:'350px' }}

    //       options={countries}
    //       autoHighlight
    //       getOptionLabel={(option) => option.label}

    //       onChange={(event, newValue) => {
    //         // Update the state when an option is selected
    //         setRole(newValue.label);
    //         console.log(newValue);
    //       }}

    //       renderOption={(props, option) => (
    //         <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
    //           {option.label}
    //         </Box>
    //       )}
    //       renderInput={(params) => (
    //         <TextField
    //           {...params}
    //           label="Choose Your Role"
    //           inputProps={{
    //             ...params.inputProps,
    //             autoComplete: 'new-password', // disable autocomplete and autofill
    //           }}
    //         />
    //       )}
    //     />

    //     </div>

    //     <Button
    //               type="submit"
    //               fullWidth
    //               variant="contained"
    //               sx={{ mt: 3, mb: 2,width:'100px',margin:'10px'}}
    //               onClick={insertUsersData}
    //             >
    //               Register
    //             </Button>


    //      <Button
    //               type="submit"
    //               fullWidth
    //               variant="contained"
    //               sx={{ mt: 3, mb: 2,width:'100px',margin:'10px',bgcolor:'red','&:hover': {
    //                 bgcolor: 'red'}}}
    //             >
    //               Cancel
    //             </Button>

    //   </Box>

    <Box width="100vw" height="100vh" position="relative" bgcolor="whitesmoke">
      <Box
        display="flex"
        flexDirection="column"
        marginTop="20px"
        position="absolute"
        right="15%"
        width="90%"
        maxWidth="500px"
        padding="15px 50px 50px 50px"
        bgcolor="white"
        borderRadius="20px"
        alignItems="center"
      >
        <Avatar sx={{
          height: "70px",
          width: "70px",
        }}>
          I
        </Avatar>
        <Typography variant="h4" marginBottom="20px">
          New account
        </Typography>

        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          rowGap="20px"
        >
          <Box display="flex" flexDirection="row" columnGap="15px">
            <TextField
              type='text'
              placeholder='First Name'
              sx={textStyle}
            />
            <TextField
              type='text'
              placeholder='Last Name'
              sx={textStyle}
            />
          </Box>

          <TextField
            type='email'
            placeholder='Email'
            fullWidth
            sx={textStyle}
          />

          <TextField
            type='number'
            placeholder='Phone Number'
            fullWidth
            sx={textStyle}
            inputProps={{
              classes: {
                root: root
              }
            }}
          />
          {/* <Input /> */}
          {/* <input
            type='number'
            placeholder='Phone Number (optional)'
            style={root} /> */}

          <FormControl fullWidth>
            <OutlinedInput
              type={showPW ? 'text' : 'password'}
              placeholder='Password'
              fullWidth
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={handleVisibility}>
                    {showPW ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                borderRadius: "10px",
                height: "45px"
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <OutlinedInput
              type={showConfirmPW ? 'text' : 'password'}
              placeholder='Confirm password'
              fullWidth
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={handleConfirmPwVisibility}>
                    {showConfirmPW ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                borderRadius: "10px",
                height: "45px",
                width: "100%"
              }}
            />
          </FormControl>

          <TextField
            label="Select Role"
            select
            sx={textStyle}
            InputLabelProps={{
              style: {
                color: grey['500']
              }
            }}
          >
            {
              roles.map(role => (
                <MenuItem key={role} value={role}>{role}</MenuItem>
              ))
            }
          </TextField>

        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            fontSize: "18px",
            textTransform: "capitalize",
            borderRadius: "10px",
            marginTop: "25px",
            marginBottom: "5px",
          }}
        >
          Create Account
        </Button>

        <Typography
          width="100%"
          fontSize="12px"
        >
          Already have an account? <a href='#'>Sign in</a>
        </Typography>

      </Box>

    </Box>

  )


}

export default Registraition
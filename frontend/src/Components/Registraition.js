import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import axios from "axios";
import { signupSchema } from '../validations/formValidations';

function Registraition() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setphone] = useState('');
  const [role, setRole] = useState('');
  const [matchpass, setMatchpass] = useState('');
  const [showPW, setShowPW] = useState(false)
  const [showConfirmPW, setShowConfirmPW] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    console.log("Error :", errors)
    console.log(Object.entries(errors).length)
    if (Object.entries(errors).length == 0) {
      setFname('')
      setLname('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setphone('')
      setRole('')
    }
    if (showPW || showConfirmPW) {
      setShowPW(false);
      setShowConfirmPW(false)
    }

  }, [errors])

  const insertUserData = async (e) => {
    e.preventDefault();

    const userData = {
      fname: fname,
      lname: lname,
      password: password,
      confirmPW: confirmPassword,
      email: email,
      phone: phone,
      role: role
    }

    const { confirmPW, ...userDataNew } = userData
    console.log(userData);

    try {
      await signupSchema.validate(userData, { abortEarly: false })
      const AllData = await axios.post("http://localhost:3005/loginAndSign/addReg", userDataNew);
      console.log(AllData.data);
      testAlert("success", "Registration sucess")
      setErrors({})
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);

    } catch (error) {
      console.log("Registration Error: " + error);
      console.log("Err :", error.inner);
      // testAlert("error", "Not Registered")

      let errorsObject = {}

      const errorsArray = error.inner

      if (errorsArray && errorsArray.length > 0) {
        errorsArray.forEach(err => {
          errorsObject[err.path] = err.message
        })
      }

      setErrors(errorsObject)
    }

  }

  // const cheackTwoPass = (e) => {

  //   e.preventDefault();

  //   if (password === Repassword) {
  //     insertUserData();
  //   } else {
  //     setMatchpass("Re entered password is incorrect");
  //   }

  // }



  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  //   emailvalidation(e.target.value);
  // }

  // const emailvalidation = (value) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (!emailRegex.test(value)) {
  //     setEmailError("Please enter a valid email");
  //   }
  // }
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

  const textStyle = {
    '& .MuiOutlinedInput-root': {
      height: "45px",
      borderRadius: "10px"
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

    <Box
      width="100vw"
      height="100vh"
      position="relative"
      bgcolor="whitesmoke"
      sx={{
        overflowY: "scroll"
      }}>
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
              value={fname}
              error={errors && errors.fname}
              helperText={errors && errors.fname}
              onChange={(e) => setFname(e.target.value)}
              type='text'
              placeholder='First Name'
              sx={textStyle}
            />
            <TextField
              value={lname}
              error={errors && errors.lname}
              helperText={errors && errors.lname}
              onChange={(e) => setLname(e.target.value)}
              type='text'
              placeholder='Last Name'
              sx={textStyle}
            />
          </Box>

          <TextField
            value={email}
            error={errors && errors.email}
            helperText={errors && errors.email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            fullWidth
            sx={textStyle}
          />

          <TextField
            type='number'
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            fullWidth
            sx={textStyle}
            inputProps={{
              className: "input"
            }}
          />

          <FormControl fullWidth>
            <OutlinedInput
              value={password}
              error={errors && errors.password}
              onChange={(e) => setPassword(e.target.value)}
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
            <FormHelperText sx={{ color: "#d32f2f" }}>{errors.password}</FormHelperText>
          </FormControl>

          <FormControl fullWidth>
            <OutlinedInput
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors && errors.confirmPW}
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
            <FormHelperText sx={{ color: "#d32f2f" }}>{errors.confirmPW}</FormHelperText>
          </FormControl>

          <TextField
            value={role}
            onChange={(e) => setRole(e.target.value)}
            error={errors && errors.role}
            helperText={errors && errors.role}
            label="Select Role"
            select
            sx={textStyle}
            InputLabelProps={{
              style: {
                color: "#bdbdbd"

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
          onClick={insertUserData}
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
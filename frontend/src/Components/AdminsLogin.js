import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckIcon from '@mui/icons-material/Check';
import { loginSchema } from '../validations/formValidations';
import { blue } from '@mui/material/colors';



function AdminsLogin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginmsg, setloginMsg] = useState([])
  const [showPW, setShowPW] = useState(false)
  const [errors, setErrors] = useState({})
  const [reqtableData,setReqtableData]=useState([])

  const loginCredentials = { email: email, password: password }


    const reqTableData=()=>{
      axios.get(`http://localhost:3005/RequestTUserEmail/${email}`).then((res)=>{
      console.log("request table data read")
      console.log(res.data)
      setReqtableData(res.data)
    }).catch((err)=>{
       console.log("Request table data fetching error")
       console.log(err)
    })
    }


  const UserdataSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(loginCredentials, { abortEarly: false });

      const alldata = await axios.post("http://localhost:3005/loginAndSign/signIn", loginCredentials)
      console.log(alldata.data.user);
      alert(alldata.data.message);

      setloginMsg(alldata)
      setErrors({})

     
      if (alldata.data.message === "Login success as admin" ) {
         reqTableData()
        window.location.href = `/SpecializationSelect`;
      }
      else if (alldata.data.message === "Login success as student") {
         if(alldata.data.user.Semester===1 && alldata.data.user.Specialization==="IT"){
            window.location.href = `/StudentItSem1`;
         }
         else if(alldata.data.user.Semester===1 && alldata.data.user.Specialization==="SE"){
          window.location.href = `/StudentSeSem1`;
       }
       else if(alldata.data.user.Semester===1 && alldata.data.user.Specialization==="CSNE"){
        window.location.href = `/StudentCSNESem1`;
     }
     else if(alldata.data.user.Semester===1 && alldata.data.user.Specialization==="CS"){
      window.location.href = `/StudentCsSem1`;
   }
   else if(alldata.data.user.Semester===1 && alldata.data.user.Specialization==="DS"){
    window.location.href = `/StudentDsSem1`;
 }
 else if(alldata.data.user.Semester===2 && alldata.data.user.Specialization==="SE"){
  window.location.href = `/StudentSeSem2`;
}
else if(alldata.data.user.Semester===2 && alldata.data.user.Specialization==="DS"){
  window.location.href = `/StudentDsSem2`;
}
else if(alldata.data.user.Semester===2 && alldata.data.user.Specialization==="CS"){
  window.location.href = `/StudentCsSem2`;
}
else if(alldata.data.user.Semester===2 && alldata.data.user.Specialization==="CSNE"){
  window.location.href = `/StudentCSNESem2`;
}
else if(alldata.data.user.Semester===2 && alldata.data.user.Specialization==="IT"){
  window.location.href = `/StudentItSem2`;
}
      }


    } catch (error) {
      let err = {}

      const errArray = error.inner

      if (errArray && errArray.length > 0) {
        errArray.forEach(error => {
          err[error.path] = error.message
        });
      }
      setErrors(err)
      console.log("data not send " + error.message)
      // alert(loginmsg.data.message);
    }
    if (email && password) {
      setEmail('')
      setPassword('')
    }

  }
  useEffect(() => {
    console.log("Error object:", errors)
  }, [errors])
  const handleVisibility = () => {
    setShowPW(!showPW)
  }

  return (

    <Box width="100vw" height="100vh" position="relative" bgcolor="whitesmoke">

      <Box
        display="flex"
        flexDirection="column"
        marginTop="80px"
        position="absolute"
        right="15%"
        width="90%"
        maxWidth="488px"
        padding="50px"
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
          Sign-in
        </Typography>

        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          rowGap="20px"
        >
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email && true}
            helperText={errors.email}
            fullWidth
            placeholder='Email'
            type='text'
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: "10px"
              }
            }}
          />
          <FormControl>
            <OutlinedInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password && true}
              fullWidth
              placeholder='Password'
              type={showPW ? 'text' : 'password'}
              sx={{
                borderRadius: "10px"
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleVisibility}
                  >
                    {showPW ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText sx={{ color: "#d32f2f" }}>{errors.password}</FormHelperText>
          </FormControl>
        </Box>

        <Grid
          container
          display="flex"
          alignItems="center"
        >
          <Grid item flexGrow={1}>
            <FormControlLabel
              control={<Checkbox size='small' />} label="Remember me"
              sx={{
                '& .MuiTypography-root': {
                  fontSize: "12px"
                }
              }}
            />
          </Grid>

          <Grid item>
            <Button
              disableRipple
              sx={{
                textTransform: "capitalize",
                fontSize: "12px",
                '&:hover': {
                  // fontWeight: "bold",
                  bgcolor: "white",
                  color: blue['900']
                }
              }}
            >
              Forgot password ?
            </Button>
          </Grid>

        </Grid>

        <Button
          onClick={UserdataSubmit}
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
          Sign in
        </Button>

        <Typography
          width="100%"
          fontSize="12px"
        >
          Don't have an account? <a href='/register'>Sign up</a>
        </Typography>
      </Box>

    </Box>

  )
}

export default AdminsLogin
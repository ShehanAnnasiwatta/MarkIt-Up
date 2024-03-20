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

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// function Alerttheme() {
//   return (

//     <Stack sx={{ width: '100%' }} spacing={2}>
//       <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
//         This success Alert has a custom icon.
//       </Alert>
//     </Stack>

//   );
// }

// const defaultTheme = createTheme();

function AdminsLogin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginmsg, setloginMsg] = useState([])
  const [showPW, setShowPW] = useState(false)
  const [errors, setErrors] = useState({})

  const loginCredentials = { email: email, password: password }

  const UserdataSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(loginCredentials, { abortEarly: false });

      const alldata = await axios.post("http://localhost:3005/loginAndSign/signIn", loginCredentials)
      console.log(alldata.data);
      alert(alldata.data.message);
      setloginMsg(alldata)
      setErrors({})
      if (alldata.data.message === "Login successful") {
        window.location.href = `/adminHome/${alldata.data.UserId}`;
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

    //   <ThemeProvider theme={defaultTheme}>
    //   <Grid container component="main" sx={{ height: '100vh' }}>
    //     <CssBaseline />
    //     <Grid
    //       item
    //       xs={false}
    //       sm={4}
    //       md={7}
    //       sx={{
    //         backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundColor: (t) =>
    //           t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //       }}
    //     />
    //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    //       <Box
    //         sx={{
    //           my: 8,
    //           mx: 4,
    //           display: 'flex',
    //           flexDirection: 'column',
    //           alignItems: 'center',
    //         }}
    //       >
    //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //           <LockOutlinedIcon />
    //         </Avatar>
    //         <Typography component="h1" variant="h5">
    //           Sign in
    //         </Typography>
    //         <Box component="form" noValidate  sx={{ mt: 1 }}>
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="email"
    //             label="Email Address"
    //             name="email"
    //             autoComplete="email"
    //             autoFocus
    //             onChange={(e)=>{setEmail(e.target.value)}}
    //           />
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="password"
    //             label="Password"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //             onChange={(e)=>{setPassword(e.target.value)}}
    //           />
    //           <FormControlLabel
    //             control={<Checkbox value="remember" color="primary" />}
    //             label="Remember me"
    //           />
    //           <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             sx={{ mt: 3, mb: 2 }}
    //             onClick={UserdataSubmit}
    //           >
    //             Sign In
    //           </Button>
    //           <Grid container>
    //             <Grid item xs>
    //               <Link href="#" variant="body2">
    //                 Forgot password?
    //               </Link>
    //             </Grid>
    //             <Grid item>
    //               <Link href="#" variant="body2">
    //                 {"Don't have an account? Sign Up"}
    //               </Link>
    //             </Grid>
    //           </Grid>
    //           <Copyright sx={{ mt: 5 }} />
    //         </Box>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>

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
          Don't have an account? <a href='#'>Sign up</a>
        </Typography>
      </Box>

    </Box>

  )
}

export default AdminsLogin
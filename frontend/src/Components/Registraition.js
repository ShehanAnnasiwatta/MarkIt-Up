import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

function Registraition() {

    const[email,setEmail]=useState('');
    const[emailError,setEmailError]=useState('');

    const handleEmailChange=(e) => {
             setEmail(e.target.value);
             emailvalidation(e.target.value);
    }

    const emailvalidation=(value)=>{
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       
        if(!emailRegex.test(value)){
            setEmailError("Please enter a valid email");
        }      
    }


    const countries = [
        { label: 'Examinar'},
        { label: 'Member'},
        { label: 'Supervisor'},
        { label: 'Co-Supervisor'},
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
    label="First name"
/>

<TextField
    id="outlined-error"
    label="Last name"
    sx={{
        '& .MuiInputLabel-root': {
            textAlign: 'center',
        },
    }}
/>

    </div>

    <div>
      <TextField
        id="outlined-error"
        label="Email"
        onChange={handleEmailChange}
        helperText={emailError}
        error={Boolean(emailError)}
      />

      <TextField
        id="outlined-error-helper-text"
        label="Phone number"       
      />
    </div>

    <div>
      <TextField
        id="outlined-error"
        label="Password"    
      />

      <TextField
        id="outlined-error-helper-text"
        label="Re Enter Password"       
      />
    </div>

    <div>

    <Autocomplete
    
      id="Possition Select"
      sx={{ width:'60ch',m:'1',paddingLeft:'350px' }}

      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
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
    />

    </div>
    
    <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,width:'100px',margin:'10px'}}
              //onClick={emailvalidation(email)}
            >
              Register
            </Button>


     <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,width:'100px',margin:'10px',bgcolor:'red','&:hover': {
                bgcolor: 'red'}}}
            >
              Cancel
            </Button>
   
  </Box>
  
  )


}

export default Registraition
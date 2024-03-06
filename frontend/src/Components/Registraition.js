import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";

function Registraition() {

    const[email,setEmail]=useState('');
    const[emailError,setEmailError]=useState('');
    const[password,setpass]=useState('');
    const[Repassword,setRePass]=useState('');
    const[Fname,setFname]=useState('');
    const[Lname,setLname]=useState('');
    const[phone,setphone]=useState('');
    const[role,setRole]=useState('');
    const[matchpass,setMatchpass]=useState('');

const insertUsersData=async(e)=>{
   // e.preventDefault();

     const UsersData={
        Fname:Fname,
        Lname:Lname,
        password:password,
        email:email,
        phone:phone,
        role:role
     }

     console.log(UsersData);

     try {
        const AllData=await axios.post("http://localhost:3005/normalroutes/add",UsersData);
        console.log("Registration sucess",AllData.data);
     } catch (error) {
        console.log("Registration Error: " + error);
     }

}

const cheackTwoPass=(e)=>{

   e.preventDefault();

   if( password===Repassword){
        insertUsersData();
   }else{
    setMatchpass("Re entered password is incorrect");
   }
     
}



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
    onChange={(e)=>{setFname(e.target.value)}} 
    required
/>

<TextField
    id="outlined-error"
    label="Last name"
    sx={{
        '& .MuiInputLabel-root': {
            textAlign: 'center',
        },
    }}
    onChange={(e)=>{setLname(e.target.value)}} 
    required
/>

    </div>

    <div>
      <TextField
        id="outlined-error"
        label="Email"
        onChange={handleEmailChange}
        helperText={emailError}
        error={Boolean(emailError)}
        required
      />

      <TextField
        id="outlined-error-helper-text"
        label="Phone number" 
        onChange={(e)=>{setphone(e.target.value)}}      
        required
      />
    </div>

    <div>
      <TextField
        id="outlined-error"
        label="Password"    
        onChange={(e)=>{setpass(e.target.value)}} 
        required
      />

      <TextField
        id="outlined-error-helper-text"
        label="Re Enter Password"  
        onChange={(e)=>{setRePass(e.target.value)}}   
        error={Boolean(matchpass)}   
        helperText={matchpass}
        required
      />
    </div>

    <div>

    <Autocomplete
    
      id="Possition Select"
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
    />

    </div>
    
    <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,width:'100px',margin:'10px'}}
              onClick={(e)=>{cheackTwoPass(e)}}
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
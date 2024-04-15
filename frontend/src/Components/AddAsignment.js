import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';


function AddAsignment() {

  const[Desvalu,setDesValue] =useState('');
  console.log(Desvalu);
  const[endDate,setEnddate]=useState('');
  const[startDate,setStartdate]=useState('');
  console.log(startDate);
  const[UploadFile,setFile]=useState([]);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const HandleFileChange=(e)=>{
       setFile([...e.target.files]);
  };

  const submitAss=async(e)=>{

    e.preventDefault();

    const sDate = new Date(startDate);
    console.log(sDate);
    const eDate = new Date(endDate);
    console.log(eDate);

    const assigmentData={
          description:Desvalu,
          sdate:sDate,
          edate:eDate
    }

    axios.post("http://localhost:3005/normalroutes/addAssignmet",assigmentData).then((res)=>{
         console.log(res.data);
         console.log("Assignment data added Success");
    }).catch((err)=>{
      console.log(err);
      console.log("assignment data not addedd");
    })
  }
  

  return (
    <div>

    <div style={{margin:'5%'}}>
<div class="container">
  <form class="border" onSubmit={submitAss}>
    
    <div>
      <div style={{margin:'20px',fontSize:'20px'}}>
      <label for="formGroupExampleInput">Description</label>
      </div>
    <ReactQuill
  style={{ height: '300px', margin: '25px' }}
  theme="snow" 
  onChange={(content, delta, source, editor) => {
    setDesValue(editor.getContents());
  }}
/>

    </div>
  <div style={{display:'flex'}}>

    <div class="form-group" style={{margin:'20px'}}>
      <label for="formGroupExampleInput" style={{marginTop:'10px',fontSize:'20px'}}>Start Date/Time</label>
      <input type="datetime-local" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange={(e)=>{setStartdate(e.target.value)}}/>
    </div>

    <div class="form-group" style={{margin:'20px'}}>
      <label for="formGroupExampleInput" style={{marginTop:'10px',fontSize:'20px'}}>End Date/Time</label>
      <input type="datetime-local" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange={(e)=>{setEnddate(e.target.value)}}/>
    </div>

  </div>

  <Button style={{marginLeft:'20px'}}
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
  onChange={HandleFileChange}
>
  Upload file
  <VisuallyHiddenInput type="file" />
</Button>

<div>
        {UploadFile.map((file, index) => (
          <div key={index}>
            {file.name} - {file.size} bytes
          </div>
        ))}
  </div>

  <div class="row justify-content-center" style={{direction:'flex'}}>
    <div class="col-auto">
      <input class="btn btn-primary mt-5" type="submit" value="Submit" style={{margin:'15px'}} />
    </div>

    <div class="col-auto">
      <input class="btn btn-danger mt-5" type="submit" value="Cansel" style={{margin:'15px'}}/>
    </div>
</div>

  </form>
</div>

</div>  
    </div>
  )
}

export default AddAsignment
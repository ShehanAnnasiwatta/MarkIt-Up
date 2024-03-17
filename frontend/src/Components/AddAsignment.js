import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function AddAsignment() {

  const[Desvalu,setDesValue] =useState('');
  console.log(Desvalu);

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
  

  return (
    <div>

    <div style={{margin:'5%'}}>
<div class="container">
  <form class="border">
    
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
      <input type="datetime-local" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
    </div>

    <div class="form-group" style={{margin:'20px'}}>
      <label for="formGroupExampleInput" style={{marginTop:'10px',fontSize:'20px'}}>End Date/Time</label>
      <input type="datetime-local" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
    </div>

  </div>

  <Button style={{marginLeft:'20px'}}
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Upload file
  <VisuallyHiddenInput type="file" />
</Button>

  <div class="row justify-content-center" style={{direction:'flex'}}>
    <div class="col-auto">
      <input class="btn btn-primary mt-5" type="submit" value="Submit" style={{margin:'15px'}}/>
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
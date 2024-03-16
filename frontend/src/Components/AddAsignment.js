import React from 'react'
import TextField from '@mui/material/TextField';
import { margin } from '@mui/system';

function AddAsignment() {
  return (
    <div>

    <div style={{marginTop:'10%'}}>
<div class="container">
  <form class="border">
    <div class="form-group" style={{margin:'25px'}}>
      <label for="formGroupExampleInput" style={{margin:'10px',fontSize:'20px'}}>Topic of the Assignment</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
    </div>
    <div class="form-group" style={{margin:'25px'}}>
      <label for="formGroupExampleInput2">Another label</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
    </div>
    
    <div class="form-group" style={{margin:'25px'}}>
    <label for="exampleFormControlTextarea1" style={{margin:'10px',fontSize:'20px'}}>Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <div class="form-group" style={{margin:'25px'}}>
      <label for="formGroupExampleInput" style={{margin:'10px',fontSize:'20px'}}>Start date</label>
      <input type="Date" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
    </div>

  <div class="row justify-content-center">
    <div class="col-auto">
      <input class="btn btn-primary mt-5" type="submit" value="Submit" style={{margin:'15px'}}/>
    </div>
</div>

  </form>
</div>

</div>  
    </div>
  )
}

export default AddAsignment
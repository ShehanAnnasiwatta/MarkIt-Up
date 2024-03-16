import { margin } from '@mui/system';
import React from 'react'
import { useState } from "react";
import * as XLSX from 'xlsx';

function AddStudentToSys() {

    // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  // onchange event
  const handleFile=(e)=>{
    let fileTypes = ['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv'];
    let selectedFile = e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileTypes.includes(selectedFile.type)){
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFile(e.target.result);
        }
      }
      else{
        setTypeError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('Please select your file');
    }
  }
  
  // submit event
  const handleFileSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type: 'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      console.log(data);
    
    }
  }

  return (
    <div>

<div className="wrapper">

<h3 style={{margin:'20px',textAlign:'center'}}>Add All Students to System</h3>

{/* form */}

<div className='border' style={{margin:'80px'}}>
<form className="form-group custom-form" onSubmit={handleFileSubmit} style={{margin:'40px'}}>
     <h2 style={{textAlign:'center',marginBottom:'20px'}}>Add your XLXS File</h2>
  <input type="file" className="form-control" required onChange={handleFile} />
  <button type="submit" className="btn btn-success btn-md" style={{marginTop:'40px'}}>UPLOAD</button>
  {typeError&&(
    <div className="alert alert-danger" role="alert">{typeError}</div>
  )}
</form>
</div>

<div className='border' style={{marginBottom:'50px', marginLeft:'80px',marginRight:'80px'}}>
   <div>
     <h3 style={{background:'red',margin:'10px'}}>
        Note
     </h3>
     <p>Please data insert</p>
   </div>
</div>


{/* view data */}
<div className="viewer">
  {excelData?(
    <div className="table-responsive">
      <table className="table">

        <thead>
          <tr>
            {Object.keys(excelData[0]).map((key)=>(
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {excelData.map((individualExcelData, index)=>(
            <tr key={index}>

              {Object.keys(individualExcelData).map((key)=>(
                <td key={key}>{individualExcelData[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  ):(
    <div></div>
  )}
</div>

</div>

    </div>
  )
}

export default AddStudentToSys
import axios from 'axios';
import React from 'react'
import { useState } from "react";
import * as XLSX from 'xlsx';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Hourglass } from 'react-loader-spinner'
import {RotatingLines} from 'react-loader-spinner';

import ExcellHeadingImage from './Images/ExcellModel.png'


function AddStudentToSys() {

  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  const [Semester, setPersonName] = useState([]);
  const[specia,setSpeacialization]= useState([]);

  const [uploading, setUploading] = useState(false);
  const [ErrUpload, setErruploading] = useState(false);

  // onchange event
  const handleFile = (e) => {
    let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        }
      }
      else {
        setTypeError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else {
      console.log('Please select your file');
    }
  }

  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      //console.log(data);

    }
  }

  const addStudentdata = async () => {
    try {
      if (excelData !== null) {
        // console.log('Uploading:',uploading);
        for (const item of excelData) {
          await axios.post('http://localhost:3005/normalroutes/addStudent', item).then((res)=>{
            console.log(res.data.error);
            if (res.data.error){
              setErruploading(true);
            }
            else{
              setUploading(true);
            }
            console.log("StudentData added to the System");
          })
        }
        setUploading(false);
        // console.log('Uploading:',uploading);
      } else {
        console.log("No data to add");
      }
    } catch (error) {
      setUploading(false);
      setErruploading(true);
      console.log("Error adding student data to the System");
      console.error(error.message);
    }
  };

  //Drop Down Items
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const semester = ["Semester 1", "Semester 2"];
  const speacialization=["Sofware Enginearing (SE)","Information Technology (IT)","Information System (IS)","Computer Science (CS)","Data science (DS)","Computer Science & Network Enginearing (CSNE)"];  //it,se,is,cs,ds,csne

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeSpe= (event) => {
    const {
      target: { value },
    } = event;
    setSpeacialization(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>

<div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    {uploading &&(
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Hourglass 
          visible={uploading}
          height="150px"
          width="100px"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
        <p style={{background:'red',fontWeight:'bold'}}>Data Adding...</p>
      </div>
    )}
  </div>

  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
   {ErrUpload &&(<div> 
    <RotatingLines
  visible={ErrUpload}
  height="96"
  width="96"
  color='#306cce'
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  <p style={{background:'red',fontWeight:'bold'}}>Data Adding Error!!.</p>
   </div>)}

  </div>

      <div className="wrapper">

        <h3 style={{ margin: '20px', textAlign: 'center' }}>Add Students To System</h3>

        {/* form */}

        <div className='border' style={{ margin: '80px' }}>
          <form className="form-group custom-form" onSubmit={handleFileSubmit} style={{ margin: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add your XLXS File</h2>
            <input type="file" className="form-control" required onChange={handleFile} />
            <button type="submit" className="btn btn-success btn-md" style={{ marginTop: '40px' }}>UPLOAD</button>
            {typeError && (
              <div className="alert alert-danger" role="alert">{typeError}</div>
            )}
          </form>
        </div>

        <div className='border' style={{ marginBottom: '50px', marginLeft: '80px', marginRight: '80px' }}>
          <div>
            <h3 style={{ background: 'red', margin: '10px' }}>
              Note
            </h3>
            <p style={{textAlign:'center'}}>Your Data Heading Should Me As Follows</p>
            <div>
              <div style={{textAlign:'center', margin:'20px'}}>
                <img src={ExcellHeadingImage}></img>
              </div>
            </div>
          </div>
        </div>

        {/* Add Student Botton  */}

        <div style={{ marginLeft: '80px', display: 'flex' }}>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={addStudentdata}>
              Add Students
            </Button>
          </Stack>

          <Stack direction="row" spacing={2} style={{marginLeft:'20px'}}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={addStudentdata}>
              Add Students Manually
            </Button>
          </Stack>

          <div style={{ marginLeft: '80px' }}>
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Select Students Current semester</InputLabel>
              <Select

                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                value={Semester}
                onChange={handleChange}
                input={<OutlinedInput label="Select Students Current semester" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {semester.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}

              </Select>
            </FormControl>
          </div>

                    <div style={{ marginLeft: '80px' }}>
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Select Student speacialization</InputLabel>
              <Select

                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                value={specia}
                onChange={handleChangeSpe}
                input={<OutlinedInput label="Select Students Current specialization" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {speacialization.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}

              </Select>
            </FormControl>
          </div>

        </div>

        {/* view data */}
        <div className="viewer" style={{ margin: '80px' }}>
          {excelData && (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    {Object.keys(excelData[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {excelData.map((individualExcelData, index) => (
                    <tr key={index}>
                      {Object.keys(individualExcelData).map((key) => (
                        <td key={key}>{individualExcelData[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}

export default AddStudentToSys
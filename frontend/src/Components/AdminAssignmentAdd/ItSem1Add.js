import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useParams} from 'react-router-dom'

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Initialize Firebase    
const firebaseConfig = {
  apiKey: "AIzaSyBWHX2jVHS1pUs8RGgiBEL-AMb0VsbpCLM",
  authDomain: "markitupproject.firebaseapp.com",
  projectId: "markitupproject",
  storageBucket: "markitupproject.appspot.com",
  messagingSenderId: "251316166179",
  appId: "1:251316166179:web:96ab9062c734f0979e1b96",
  measurementId: "G-F73MGFE8RC"
};

firebase.initializeApp(firebaseConfig);
const storageRef = firebase.storage().ref();


function ItSem1Add() {
  
  const [Desvalu, setDesValue] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [UploadFiles, setFiles] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [FilesUrls,setURL] = useState('');

  const{id}=useParams();
  console.log(id);


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

  const addData = async (e) => {
    e.preventDefault();
    try {
      const promises = UploadFiles.map((file) => {
        const fileRef = storageRef.child(file.name);
        const uploadTask = fileRef.put(file);
        return new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              console.log(`Upload is ${progress}% done`);
              setUploadProgress(progress);
            },
            (error) => {
              console.error(error);
              reject(`Failed to upload file ${file.name}: ${error.message}`);
            },
            async () => {
              try {
                const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
                console.log('File uploaded successfully. Download URL:', downloadUrl);
                resolve(downloadUrl);
                setURL(downloadUrl);
              } catch (error) {
                console.error(error);
                reject(`Failed to get download URL for file ${file.name}: ${error.message}`);
              }
            }
          );
        });
      });

      Promise.all(promises)
        .then((downloadUrls) => {
          // Here you can use downloadUrls array containing download URLs of all uploaded files
          console.log('All files uploaded successfully', downloadUrls);
          // Now you can proceed to save other data with these download URLs
        })
        .catch((error) => {
          console.error(error);
          alert(`Failed to upload files: ${error}`);
        });
    } catch (error) {
      console.error(error);
      alert(`Failed to upload files: ${error}`);
    }
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  const submitAss=async(e)=>{

    e.preventDefault();

    const sDate = new Date(startDate);
    console.log(sDate);
    const eDate = new Date(endDate);
    console.log(eDate);

    const assigmentData={
          description:Desvalu,
          sdate:sDate,
          edate:eDate,
          week:id
    }

    axios.post("http://localhost:3005/AddAssi/ItSem1",assigmentData).then((res)=>{
         console.log(res.data);
         console.log("Assignment data added Success");
    }).catch((err)=>{
      console.log(err);
      console.log("assignment data not addedd");
    })
  }
  

  return (
    <div>
      <div style={{ margin: '5%' }}>
        <div className="container">
          <form className="border" onSubmit={submitAss}>
            <div>
              <div style={{ margin: '20px', fontSize: '20px' }}>
                <label htmlFor="description">Description</label>
              </div>
              <ReactQuill
                style={{ height: '300px', margin: '25px' }}
                theme="snow"
                value={Desvalu}
                onChange={(value) => {
                  setDesValue(value);
                }}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <div className="form-group" style={{ margin: '20px' }}>
                <label htmlFor="startDate" style={{ marginTop: '10px', fontSize: '20px' }}>
                  Start Date/Time
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="startDate"
                  placeholder="Start Date/Time"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
              </div>
              <div className="form-group" style={{ margin: '20px' }}>
                <label htmlFor="endDate" style={{ marginTop: '10px', fontSize: '20px' }}>
                  End Date/Time
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="endDate"
                  placeholder="End Date/Time"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                />
              </div>
            </div>

            <div style={{width:'50%',marginLeft:'1.5%'}}> 
               <input type="file" className="form-control" onChange={handleFileChange}/>
            </div>
            <div style={{marginLeft:'1.5%'}}>
            <CircularProgressWithLabel value={uploadProgress} />
            </div>
            <button type="submit" className="btn btn-success btn-md" style={{marginLeft:'1.5%' }} onClick={addData}>UPLOAD</button>

            <div className="row justify-content-center" style={{ direction: 'flex' }}>
              <div className="col-auto">
                <input className="btn btn-primary mt-5" type="submit" value="Submit" style={{ margin: '15px' }} />
              </div>
              <div className="col-auto">
                <button className="btn btn-danger mt-5" type="button" style={{ margin: '15px' }}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ItSem1Add
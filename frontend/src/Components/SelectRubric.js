import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, Button, Typography, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { flexbox } from '@mui/system';

function SelectRubric() {
  const [rubrics, setRubrics] = useState([]);

  useEffect(() => {
    // Fetch all rubrics from the backend
    axios.get("http://localhost:3005/normalroutes/rubrics/all")
      .then(response => {
        setRubrics(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching rubrics:', error);
      });
  }, []);

  const handleDelete = async (rubricId) => {
    try {
      // Make DELETE request to delete the rubric
      await axios.delete(`http://localhost:3005/normalroutes/delete/rubric/${rubricId}`);
      
      // If deletion is successful, remove the rubric from the state
      setRubrics(prevRubrics => prevRubrics.filter(rubric => rubric._id !== rubricId));
      
      console.log("Rubric deleted successfully.");
    } catch (error) {
      console.error('Error deleting rubric:', error);
    }
  }

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '50px', float: 'left', marginLeft: '130px' }}>Select the Specialization</Typography>
      <Grid container spacing={3} justifyContent="center">
        {rubrics.map(rubric => (
          <Grid item key={rubric._id}>
            <Card
              sx={{
                width: 300,
                height: flexbox,
                backgroundColor: '#ced4da',
                transition: 'background-color 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#e9ecef'
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>{rubric.specialization}</Typography>
                <p>{rubric.assignment}</p>
                <Button variant="contained" endIcon={<SendIcon />} component={Link} to={`/marking/${rubric._id}`} style={{ marginTop: '10px' }}>
                  Get Rubric
                </Button><br></br>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(rubric._id)} style={{ marginTop: '10px' }}>
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SelectRubric;

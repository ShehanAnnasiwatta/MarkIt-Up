import React, { useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const MarkingRubric = () => {
  const [criteria, setCriteria] = useState([]);
  const [scores, setScores] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleCriteriaChange = (rowIndex, colIndex, event) => {
    const newCriteria = [...criteria];
    newCriteria[rowIndex][colIndex] = event.target.value;
    setCriteria(newCriteria);
  };

  const handleScoreChange = (rowIndex, event) => {
    const newScores = [...scores];
    newScores[rowIndex] = event.target.value;
    setScores(newScores);
  };

  const addRow = () => {
    const newRow = new Array(criteria[0] ? criteria[0].length : 1).fill('');
    setCriteria([...criteria, newRow]);
    setScores([...scores, '']);
  };

  const addColumn = () => {
    const newCriteria = criteria.map(row => [...row, '']);
    setCriteria(newCriteria);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (criteria.some(row => row.some(cell => cell === '')) || scores.some(score => score === '') || !selectedOption) {
      alert("Please fill all fields.");
      return;
    }
  
    const newRubric = {
      specialization: selectedOption,
      criteria: criteria.map((row, index) => ({
        name: row,
        score: scores[index]
      }))
    };
    
    console.log(newRubric); // Log the newRubric object before sending it
  
    axios.post("http://localhost:3005/normalroutes/addrubric", newRubric)
      .then(() => {
        alert('Rubric submitted successfully!');
        window.location.reload();
      })
      .catch((err) => {
        console.error('Error submitting rubric:', err);
        alert('Error submitting rubric: ' + err);
      });
  }
  
  

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} style={{ padding: 20, maxHeight: '80vh', overflow: 'auto', width: '80%' }}>
        <Typography variant="h5" gutterBottom style={{marginBottom:'25px'}}>
          Marking Rubric
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <FormControl sx={{ minWidth: '200px', marginRight: '10px' }}>
            <InputLabel id="select-option-label">Specialization</InputLabel>
            <Select
              labelId="select-option-label"
              label="Specialization"
              id="select-option"
              value={selectedOption}
              size="small"
              onChange={(e) => setSelectedOption(e.target.value)}
              sx={{ paddingTop: '10px' }}
            >
              <MenuItem value="option1">Information Technology</MenuItem>
              <MenuItem value="option2">Software Engineering</MenuItem>
              <MenuItem value="option3">Data Science</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TableContainer>
          <Table aria-label="marking rubric table">
            <TableHead>
              <TableRow>
                {criteria[0] && criteria[0].map((_, index) => (
                  <TableCell key={index}>Criterion {index + 1}</TableCell>
                ))}
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {criteria.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((col, colIndex) => (
                    <TableCell key={`${rowIndex}-${colIndex}`}>
                      <TextField
                        value={criteria[rowIndex][colIndex]}
                        onChange={(e) => handleCriteriaChange(rowIndex, colIndex, e)}
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </TableCell>
                  ))}
                  <TableCell align="right">
                    <TextField
                      value={scores[rowIndex] || ''}
                      onChange={(e) => handleScoreChange(rowIndex, e)}
                      variant="outlined"
                      size="small"
                      sx={{width:'100px'}}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={addRow} style={{ marginRight: 10 }}>
            Add Row
          </Button>
          <Button variant="contained" color="primary" onClick={addColumn}>
            Add Column
          </Button>
        </Box>
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default MarkingRubric;

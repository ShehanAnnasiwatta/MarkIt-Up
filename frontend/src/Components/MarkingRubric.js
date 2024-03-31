import React, { useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
  const [rubric, setRubric] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleCriteriaChange = (rowIndex, colIndex, event) => {
    const newRubric = [...rubric];
    newRubric[rowIndex][colIndex] = event.target.value;
    setRubric(newRubric);
  };

  const addRow = () => {
    const newRow = new Array(rubric[0] ? rubric[0].length : 1).fill('');
    setRubric([...rubric, newRow]);
  };

  const addColumn = () => {
    const newRubric = rubric.map(row => [...row, '']);
    setRubric(newRubric);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!selectedOption) {
      alert("Please select a specialization.");
      return;
    }
  
    const criteria = rubric.map(row => ({ name: row }));
  
    const newRubric = {
      specialization: selectedOption,
      criteria: criteria
    };
  
    console.log(newRubric);
  
    axios.post("http://localhost:3005/normalroutes/addrubric", newRubric)
      .then(() => {
        alert('Rubric submitted successfully!');
        window.location.reload();
      })
      .catch((err) => {
        console.error('Error submitting rubric:', err);
        alert('Error submitting rubric: ' + err);
      });
  };
  

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} style={{ padding: 20, maxHeight: '80vh', overflow: 'auto', width: '80%' }}>
        <Typography variant="h5" gutterBottom style={{ marginBottom:'25px' }}>
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
              <MenuItem value="Information Technology">Information Technology</MenuItem>
              <MenuItem value="Software Engineering">Software Engineering</MenuItem>
              <MenuItem value="Data Science">Data Science</MenuItem>
              <MenuItem value="Interactive Media">Interactive Media</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TableContainer>
          <Table aria-label="marking rubric table">
            <TableBody>
              {rubric.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((col, colIndex) => (
                    <TableCell key={`${rowIndex}-${colIndex}`}>
                      <TextField
                        value={rubric[rowIndex][colIndex]}
                        onChange={(e) => handleCriteriaChange(rowIndex, colIndex, e)}
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder={rowIndex === 0 ? 'Header' : 'Criterion'}
                      />
                    </TableCell>
                  ))}
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
